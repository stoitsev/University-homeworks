define([
    'jquery',
    'underscore',
    'backbone',
    'models/SettingsModel',
    'text!templates/friends/nearbyFriends.js'
], function($, _, Backbone, SettingsModel, template) {

    var NearbyFriendsView = Backbone.View.extend({

        el: $('[data-role=content]'),

        initialize: function() {
            var that = this;
        },

        render: function(friends) {
            var compiled_template = _.template(template);

            this.$el.html(compiled_template({friends: friends}));
            this.$el.trigger('create');
            return this;
        },

        loadFriendsNearby: function(container) {
            var that = this;

            var displayGeolocationError = function(error) {
                var errorText;

                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorText = 'User denied the request for Geolocation.';
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorText = 'Location information is unavailable.';
                        break;
                    case error.TIMEOUT:
                        errorText = 'The request to get user location timed out.';
                        break;
                    case error.UNKNOWN_ERROR:
                        errorText = 'An unknown error occurred.';
                        break;
                }

                that.$el.html(errorText);
            };

            $('[data-role="navbar"]').show();

            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                that.registerUserLocation(latitude, longitude, container);
            }, displayGeolocationError);
        },

        registerUserLocation: function(latitude, longitude, container) {
            var settingsModel = new SettingsModel(),
                that = this;
            settingsModel.load();

            var request = {
                sessionID: settingsModel.get('sessionID'),
                latitude: latitude,
                longitude: longitude
            };

            var jqxhr = $.ajax({
                url: 'http://mobilefriends.apphb.com/MobileFriendsService.svc/update-coordinates',
                type: 'post',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(request),
                beforeSend: function() {
                    $.mobile.showPageLoadingMsg();
                }
            }).done(function(data) {
                that.getFriendsNearby(request.latitude, request.longitude);
            }).fail(function(jqXHR, textStatus, errorThrown) {
                var errorString = jqXHR.responseText;
                var error = JSON.parse(errorString);

                that.$el.html(error.errorMsg);
            }).always(function() {
                $.mobile.hidePageLoadingMsg();
            });
        },

        getFriendsNearby: function(latitude, longitude) {
            var settingsModel = new SettingsModel(),
                that = this;
            settingsModel.load();
            $('[href=#nearby]').addClass('ui-btn-active');

            var request = {
                sessionID: settingsModel.get('sessionID'),
                latitude: latitude,
                longitude: longitude,
                distance: 1.23
            };

            var jqxhr = $.ajax({
                url: 'http://mobilefriends.apphb.com/MobileFriendsService.svc/get-near-friends',
                type: 'post',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(request),
                beforeSend: function() {
                    $.mobile.showPageLoadingMsg();
                }
            }).done(function(response) {
                var friendsList = response.friends;
                that.render(friendsList);
            }).fail(function(jqXHR, textStatus, errorThrown) {
                var errorString = jqXHR.responseText;
                var error = JSON.parse(errorString);

                that.$el.html(error.errorMsg);
            }).always(function() {
                $.mobile.hidePageLoadingMsg();
            });
        }

    });

    return NearbyFriendsView;
});

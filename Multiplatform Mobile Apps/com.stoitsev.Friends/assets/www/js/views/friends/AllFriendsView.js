define([
    'jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'models/SettingsModel',
    'text!templates/friends/allFriends.js',
    'text!templates/friends/addFriend.js',
    'text!templates/friends/friend.js'
], function($, _, Backbone, UserModel, SettingsModel, template, addFormTemplate, viewFriendTemplate) {

    var AllFriendsView = Backbone.View.extend({

        el: $('[data-role=content]'),

        initialize: function() {

        },

        events: {
            'click #addfriendButton': 'openAddFriendDialog',
            'click #showAllFriendsButton': 'render',
            'submit #addFriend': 'addFriend',
            'click #removeFriend': 'sendRemoveRequest'
        },

        addFriend: function(event) {
            $('.error_container').html('');
            event.preventDefault();

            var name = $('#friend_name').val();

            if (name.length < 3) {
                $('#friend_name_error_container').html('Username should be at least 3 chars long.');
                return false;
            }
            console.log('add friend', name);
            this.sendAddFriendRequest(name);

            return false;
        },

        sendAddFriendRequest: function(name) {
            var settingsModel = new SettingsModel(),
                that = this,
                request = {
                    sessionID: settingsModel.get('sessionID'),
                    friend: name
                };
            var jqxhr = $.ajax({
                url: 'http://mobilefriends.apphb.com/MobileFriendsService.svc/add-friend',
                type: 'post',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(request),
                beforeSend: function() {
                    $.mobile.showPageLoadingMsg();
                }
            }).done(function(data) {
                var friends = {};
                friends.message = 'You added ' + name + ' successfly to your friends list.';
                that.render(friends);
            }).fail(function(jqXHR, textStatus, errorThrown) {
                var errorString = jqXHR.responseText;
                var error = JSON.parse(errorString);

                $('#friend_name_error_container').html(error.errorMsg);
            }).always(function() {
                $.mobile.hidePageLoadingMsg();
            });
        },

        openAddFriendDialog: function() {
            var compiled_template = _.template(addFormTemplate);

            this.$el.html(compiled_template());
            this.$el.trigger('create');
            return this;
        },

        render: function(friends) {
            if (!friends) {
                friends = {};
            }
            var that = this,
                compiled_template = _.template(template),
                settingsModel = new SettingsModel(),
                sessionID = settingsModel.get('sessionID'),
                url = 'http://mobilefriends.apphb.com/MobileFriendsService.svc/get-friends/';

            $.get(url + sessionID, function(response) {
                var friendsList = response.friends;
                friends.list = friendsList;
                console.log(friendsList);

                that.$el.html(compiled_template({friends: friends}));
                that.$el.trigger('create');
            }).fail(function(jqXHR, textStatus, errorThrown) {
                var errorString = jqXHR.responseText;
                var error = JSON.parse(errorString);

                that.$el.html(error.errorMsg);
            });

            return this;
        },

        showFriend: function(name) {
            compiled_template = _.template(viewFriendTemplate);

            var friend = {};
            friend.name = name;

            this.$el.html(compiled_template({friend: friend}));
            this.$el.trigger('create');
            return this;
        },

        sendRemoveRequest: function() {
            var name = $('#removeFriend').data('name'),
                settingsModel = new SettingsModel(),
                that = this,
                request = {
                    sessionID: settingsModel.get('sessionID'),
                    friend: name
                };

            var jqxhr = $.ajax({
                url: 'http://mobilefriends.apphb.com/MobileFriendsService.svc/remove-friend',
                type: 'post',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(request),
                beforeSend: function() {
                    $.mobile.showPageLoadingMsg();
                }
            }).done(function(data) {
                var friends = {};
                friends.message = 'You removed ' + name + ' successfly from your friends list.';
                that.render(friends);
            }).fail(function(jqXHR, textStatus, errorThrown) {
                var errorString = jqXHR.responseText;
                var error = JSON.parse(errorString);

                $('#friend_name_error_container').html(error.errorMsg);
            }).always(function() {
                $.mobile.hidePageLoadingMsg();
            });
        }
    });

    return AllFriendsView;
});

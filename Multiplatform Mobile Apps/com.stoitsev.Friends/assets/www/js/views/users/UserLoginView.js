define([
    'jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'models/SettingsModel',
    'text!templates/users/loginForm.js'
], function($, _, Backbone, UserModel, SettingsModel, formTemplate) {

    var UserRegistrationView = Backbone.View.extend({

        el: $('[data-role=content]'),

        initialize: function() {
            var that = this;
            var onDataHandler = function(collection) {
                that.render();
            };
        },

        events: {
            'submit #login_form': 'loginUser'
        },

        logoutUser: function() {
            var that = this,
                settingsModel = new SettingsModel();
            settingsModel.load();

            var sessionID = settingsModel.get('sessionID');

            $.get('http://mobilefriends.apphb.com/MobileFriendsService.svc/logout/' + sessionID, function() {
                $('.ui-btn-active').removeClass('ui-btn-active');
                window.localStorage.setItem('sessionID', '');

                that.render();
            }).fail(function(jqXHR, textStatus, errorThrown) {
                var errorString = jqXHR.responseText;
                var error = JSON.parse(errorString);

                that.$el.html(error.errorMsg);
            });
        },

        loginUser: function(event) {
            event.preventDefault();
            $('.error_container').html('');
            var username = $('#username_login').val(),
                password = $('#password_login').val(),
                userModel = new UserModel(),
                errors = userModel.setCredentials(username, password);

            if (_.isEmpty(errors)) {
                this.sendLoginRequest(userModel.toJSON());
            } else {
                _.each(errors, function(error) {
                    var fieldName = _.keys(error)[0];
                    var errorMessage = _.values(error)[0];

                    $('#' + fieldName + '_error_container').html(errorMessage);
                });
            }

            return false;
        },

        sendLoginRequest: function(model) {
            var jqxhr = $.ajax({
                url: 'http://mobilefriends.apphb.com/MobileFriendsService.svc/login',
                type: 'post',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify(model),
                beforeSend: function() {
                    $.mobile.showPageLoadingMsg();
                }
            }).done(function(data) {
                var settingsModel = new SettingsModel();
                settingsModel.set({
                    sessionID: data.sessionID
                });
                settingsModel.save();

                window.location.hash = '#nearby';
            }).fail(function(jqXHR, textStatus, errorThrown) {
                var errorString = jqXHR.responseText;
                var error = JSON.parse(errorString);

                $('#username_error_container').html(error.errorMsg);
            }).always(function() {
                $.mobile.hidePageLoadingMsg();
            });
        },

        render: function() {
            $('[data-role="navbar"]').hide();
            var compiled_template = _.template(formTemplate);

            this.$el.html(compiled_template());
            this.$el.trigger('create');
            return this;
        }

    });

    return UserRegistrationView;
});

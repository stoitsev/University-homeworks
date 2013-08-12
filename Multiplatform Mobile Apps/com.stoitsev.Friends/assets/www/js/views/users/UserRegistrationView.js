define([
    'jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'models/SettingsModel',
    'text!templates/users/registrationForm.js'
], function($, _, Backbone, UserModel, SettingsModel, formTemplate) {

    var UserRegistrationView = Backbone.View.extend({

        el: $('[data-role=content]'),

        initialize: function() {

        },

        events: {
            'submit #registration_form': 'registerUser'
        },

        registerUser: function(event) {
            event.preventDefault();
            $('.error_container').html('');
            var username = $('#username').val(),
                password = $('#password').val(),
                password_again = $('#password_again').val(),
                userModel = new UserModel(),
                errors = userModel.setCredentials(username, password, password_again);

            if (_.isEmpty(errors)) {
                this.sendRegistrationRequest(userModel.toJSON());
            } else {
                _.each(errors, function(error) {
                    var fieldName = _.keys(error)[0];
                    var errorMessage = _.values(error)[0];

                    $('#' + fieldName + '_error_container').html(errorMessage);
                });
            }

            return false;
        },

        sendRegistrationRequest: function(model) {
            var jqxhr = $.ajax({
                url: 'http://mobilefriends.apphb.com/MobileFriendsService.svc/register',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify(model),
                dataType: 'json',
                beforeSend: function() {
                    $.mobile.showPageLoadingMsg();
                }
            }).done(function(data) {
                var settingsModel = new SettingsModel();
                settingsModel.set({
                    sessionID: data.sessionID
                });
                settingsModel.save();

                window.location.hash = '#nearby'; //TODO: find a way to make this working

            }).fail(function(jqXHR, textStatus, errorThrown) {
                var errorString = jqXHR.responseText;
                var error = JSON.parse(errorString);

                switch (error.errorCode) {
                    case 'ERR_DUP_USR':
                    case 'ERR_USR_NAME':
                        $('#username_error_container').html(error.errorMsg);
                        break;
                }

            }).always(function() {
                $.mobile.hidePageLoadingMsg();
            });
        },

        render: function() {
            var compiled_template = _.template(formTemplate);

            this.$el.html(compiled_template());
            this.$el.trigger('create');
            return this;
        }

    });

    return UserRegistrationView;
});

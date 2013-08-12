define(['jquery', 'underscore', 'backbone', 'sha1'], function($, _, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        defaults: {
            username: '',
            authCode: ''
        },
        setCredentials: function(username, password, password_again) {
            var errors = [];

            if (username.length < 3) {
                errors.push({
                    username: 'Username should be at least 3 chars long.'
                });
            }

            if (password.length < 3) {
                errors.push({
                    password: 'Password should be at least 3 chars long.'
                });
            }

            if (password_again && password_again.length < 3) {
                errors.push({
                    password_again: 'Password should be at least 3 chars long.'
                });
            }

            if (password_again && password.length > 2 && password != password_again) {
                errors.push({
                    password: 'The password must mach the password bellow.'
                });
            }

            if (_.isEmpty(errors)) {
                this.set({
                    username: username,
                    authCode: $.sha1(username + password)
                });
            }

            return errors;
        }
    });

    return UserModel;
});

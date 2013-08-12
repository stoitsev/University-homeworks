define(['jquery', 'underscore', 'backbone', 'sha1'], function($, _, Backbone) {
    'use strict';

    var SettingsModel = Backbone.Model.extend({
        initialize: function() {
            console.log('new setting model');
            this.set({sessionID: window.localStorage.getItem('sessionID')});
        },
        defaults: {
            username: '',
            authCode: '',
            sessionID: window.localStorage.getItem('sessionID')
        },
        save: function() {
            window.localStorage.setItem('sessionID', this.get('sessionID'));
        },
        load: function() {
           this.set({sessionID: window.localStorage.getItem('sessionID')});
        }
    });

    return SettingsModel;
});

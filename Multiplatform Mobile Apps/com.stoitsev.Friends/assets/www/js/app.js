define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, Router) {
  $(document).bind('mobileinit', function() {
    $.mobile.hashListeningEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.pushStateEnabled = false;
  });

  var config = {
    authCode: ''
  };

  var mobile = require(['jquery_mobile']);
  var initialize = function() {
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});

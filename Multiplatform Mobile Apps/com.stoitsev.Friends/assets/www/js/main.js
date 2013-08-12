require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    jquery_mobile: 'libs/jquery/jquery.mobile-1.2.0',
    text: 'libs/require/text',
    sha1: 'libs/jquery/jquery.sha1',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    json: 'libs/json/json'
  },
  shim: {
    'libs/jquery/jquery.sha1': {
        deps: ['jquery'],
        exports: 'jQuery.sha1'
    }
  }

});

require(['app'], function(App) {

  App.initialize();
});

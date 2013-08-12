define([
  'jquery',
  'underscore',
  'backbone',
  'views/friends/NearbyFriendsView',
  'views/friends/AllFriendsView',
  'views/users/UserRegistrationView',
  'views/users/UserLoginView'
], function($, _, Backbone, NearbyFriendsView, AllFriendsView, UserRegistrationView, UserLoginView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      'nearby': 'nearbyFriends',
      'all': 'allFriends',
      'login': 'userLogin',
      'register': 'userRegistration',
      'friend/:name': 'showFriend',
      'logout': 'logoutUser',
      '*actions': 'userLogin'
    },
    test: function() {
        var nearbyView = new NearbyFriendsView();
        nearbyView.render();
    }
  });

  var initialize = function() {

    var app_router = new AppRouter;

    app_router.on('route:nearbyFriends', function() {
        var nearbyView = new NearbyFriendsView();
        nearbyView.loadFriendsNearby();
    });

    app_router.on('route:logoutUser', function() {
        var userLoginView = new UserLoginView();
        userLoginView.logoutUser();
    });

    app_router.on('route:allFriends', function() {
        var allView = new AllFriendsView();
        allView.render();
    });

    app_router.on('route:userRegistration', function() {
        var registrationView = new UserRegistrationView();
        registrationView.render();
    });

    app_router.on('route:userLogin', function() {
        var userLoginView = new UserLoginView();
        userLoginView.render();
    });

    app_router.on('route:showFriend', function(name) {
        var allView = new AllFriendsView();
        allView.showFriend(name);
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});

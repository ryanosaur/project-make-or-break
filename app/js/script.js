var mob = angular.module("mob", ['ui.router']);
mob.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('gigs', {
      url: "/home",
      templateUrl: "views/feed.html",
      controller: "FeedCtrl"
    })
    .state('gig', {
      url: "/gig/:id",
      templateUrl: "views/onegig.html",
      controller: "GigCtrl"
    })
    .state('create' {
      url: "/create",
      templateUrl: "views/create.html",
      controller: "CreateCtrl"
    });
})
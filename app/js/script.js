var mob = angular.module("mob", ['ui.router']);
mob.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/gig');
  $stateProvider
    .state('gigs', {
      url: "/home",
      templateUrl: "views/feed.html",
      controller: "FeedCtrl"
    })
    .state('gig', {
      url: "/gig",
      templateUrl: "views/onegig.html",
      controller: "GigCtrl"
    })
    .state('create', {
      url: "/create",
      templateUrl: "views/create.html",
      controller: "CreateCtrl"
    });
})
.controller('FeedCtrl', function() {

})
.controller('GigCtrl', function() {
  console.log('working');
})
.controller('CreateCtrl', function() {

})
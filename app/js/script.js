var mob = angular.module("mob", ['ui.router']);
mob.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/gigs');
  $stateProvider
    .state('gigs', {

    })
    .state('gig', {

    })
    .state('create' {

    })
})
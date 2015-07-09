var mob = angular.module("mob", ['ui.router']);
mob.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('gig', {
      url: "/gig",
      templateUrl: "views/onegig.html",
      controller: "GigCtrl"
    })
    .state('list', {
      url: "/",
      templateUrl: "views/listView.html",
      controller: "listCtrl"
    })
    .state('create', {
      url: "/create",
      templateUrl: "views/create.html",
      controller: "CreateCtrl"
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
})
.constant('BASE_URL', 'https://mob-squad.herokuapp.com')
.factory('Gig', function($http, BASE_URL) {
  return {
    getAllGigs: function() {
      return $http.get(BASE_URL + '/api/services');
    },
    postGig: function(service) {
      return $http.post(BASE_URL + '/api/services', service);
    }
  }
})
.controller('NavCtrl', function($state) {})
.controller('GigCtrl', function($scope) {
  $scope.service = {
    name: "Guitar Lessons",
    poster: "Javier Escobar",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam repudiandae eaque, facilis quasi, vitae dolore quam dicta. Ratione, doloribus, odit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis facere, excepturi minus quos! Ipsum sunt sequi, ratione hic aliquid corrupti esse illo, alias voluptate aliquam quasi, consequatur, labore optio excepturi?",
    charity: "Red Cross",
    price: "$500"
  }
})
.controller('CreateCtrl', function($scope, Gig) {
  $scope.submit = function() {
    Gig.postGig($scope.service)
    .success(function(data) {
      $scope.service = {};
      alert('Donation request received!');
    }).catch(function(error) {
      console.error(error);
    })
  }
})
.controller('listCtrl', function($scope, Gig) {
  Gig.getAllGigs()
  .success(function(data) {
    console.log(data);
    $scope.services = data;
  }).catch(function(error) {
    console.log(error);
  })
})

var mob = angular.module("mob", ['ui.router']);
mob.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('gig', {
      url: "/gig/:id",
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
    getOneGig: function(service_id) {
      return $http.get(BASE_URL + '/api/services/' + service_id);
    },
    postGig: function(service) {
      return $http.post(BASE_URL + '/api/services', service);
    }
  }
})
.controller('NavCtrl', function($scope, $state) {})
.controller('GigCtrl', function($scope, $state, Gig) {
  var service_id = $state.params.id;
  Gig.getOneGig(service_id)
  .success(function(data){
    $scope.service = data;
  })
  .catch(function(error){
    console.log(error);
  });
})
.controller('CreateCtrl', function($scope, Gig) {
  // console.log('Create Controller');
  // $scope.submit = function() {
  //   console.log('running');
  //   $scope.service;
  // }
})
.controller('listCtrl', function($scope, Gig){
  Gig.getAllGigs()
  .success(function(data) {
    console.log(data);
    $scope.services = data;
  }).catch(function(error) {
    console.log(error);
  })
})

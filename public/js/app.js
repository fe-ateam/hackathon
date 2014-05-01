var app = angular.module('app', ['ui.bootstrap']);

app.controller('MainController', function($scope, $http) {

  $scope.cities = [];

  $http.get('/cities').success(function(cities) {
    $scope.cities = cities;
  });
});
angular.module('app')


.controller('mainController', function($scope, $log, $http) {
  $log.log('mainController');

  $scope.cities = [];

  $http.get('/cities').success(function(cities) {
    $scope.cities = cities;
  });
})


.controller('homeController', function($scope, $log) {
  $log.log('homeController');

  $scope.pageClass = 'page-home';
})


.controller('locationController', function($scope, $log) {
  $log.log('locationController');

  $scope.pageClass = 'page-location';
})


.controller('agesController', function($scope, $log) {
  $log.log('agesController');

  $scope.pageClass = 'page-ages';
});
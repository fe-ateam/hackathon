angular.module('app')


.controller('mainController', function($scope, $log, $http, $location) {
  $log.log('mainController');

  $scope.isPageActive = function(name) {
    return $location.path().indexOf(name) > -1;
  };

  $scope.cities = [];

  $http.get('/cities').success(function(cities) {
    $scope.cities = cities;
  });
})


// Home
.controller('homeController', function($scope, $log) {
  $log.log('homeController');

  $scope.pageClass = 'page-home';
})


// Location
.controller('locationController', function($scope, $log) {
  $log.log('locationController');

  $scope.pageClass = 'page-location';
  $scope.pageTitle = 'Where do you want to retire?';
  $scope.inputFields = $scope.pages.location;
})


// Ages
.controller('agesController', function($scope, $log) {
  $log.log('agesController');

  $scope.pageClass = 'page-ages';
  $scope.inputFields = $scope.pages.ages;
})


// Housing
.controller('housingController', function($scope, $log) {
  $log.log('housingController');

  $scope.pageClass = 'page-housing';
  $scope.pageTitle = "What house do you like to live in?";
  $scope.inputFields = $scope.pages.housing;

  $scope.goBack = function() {

  };

  $scope.goNext = function() {

  };
})


// Food
.controller('foodController', function($scope, $log) {
  $log.log('foodController');

  $scope.pageClass = 'page-food';
  $scope.pageTitle = "What restaurant would you usually go?";
  $scope.inputFields = $scope.pages.food;
})


// Transportation
.controller('transportationController', function($scope, $log) {
  $log.log('transportationController');

  $scope.pageClass = 'page-transportation';
  $scope.pageTitle = "How would you like to move from point A to B?";
  $scope.inputFields = $scope.pages.transportation;
})


// Travel
.controller('travelController', function($scope, $log) {
  $log.log('travelController');

  $scope.pageClass = 'page-travel';
  $scope.pageTitle = "How often do you like to travel?";
  $scope.inputFields = $scope.pages.travel;
})


// Hobby
.controller('hobbyController', function($scope, $log) {
  $log.log('hobbyController');

  $scope.pageClass = 'page-hobby';
  $scope.pageTitle = "What hobbies would you like to have?";
  $scope.inputFields = $scope.pages.hobby;
})


// Summary
.controller('summaryController', function($scope, $log) {
  $scope.pageClass = 'page-summary';

  $scope.categories = [
    {'name': 'San Fran', 'value': 1000},
    {'name': 'San Jose', 'value': 300},
  ];

  $scope.total = function() {
    var total = 0;
    angular.forEach($scope.categories, function(category) {
      if(category.value != '')
      {
        total += parseInt(category.value);
      }
    });

    return total;
  };
});
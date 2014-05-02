angular.module('app')


.controller('mainController', function($scope, $log, $http, $location) {
  $log.log('mainController');

  $scope.isPageActive = function(name) {
    return $location.path().indexOf(name) > -1;
  };
})


// Home
.controller('homeController', function($scope, $log) {
  $log.log('homeController');

  $scope.pageClass = 'page-home';
})


// Location
.controller('locationController', function($scope, $log, $http) {
  $log.log('locationController');

  $scope.pageClass = 'page-location';
  $scope.pageTitle = 'Where do you want to retire?';
  $scope.inputFields = $scope.pages.location;

  $scope.goNext = function() {
    console.log($scope.inputFields[0].value);
  };
})


// Ages
.controller('agesController', function($scope, $log, $http) {
  $log.log('agesController');

  $scope.pageClass = 'page-ages';
  $scope.inputFields = $scope.pages.ages;

  $scope.goNext = function() {
    var curAge = $scope.inputFields[0].value
      , retAge = $scope.inputFields[1].value;

    console.log('curAge = ' + curAge + ', retAge = ' + retAge);

    // $http.post('url_to_send_ages');

  };
})


// Housing
.controller('housingController', function($scope, $log, $http) {
  $log.log('housingController');

  $scope.pageClass = 'page-housing';
  $scope.pageTitle = "What house do you like to live in?";
  $scope.inputFields = $scope.pages.housing;

  $scope.goNext = function() {
    var housing = $scope.inputFields[0].value;

    console.log('housing = ' + housing);

    // $http.post('url_to_send_housing');

  };
})


// Food
.controller('foodController', function($scope, $log, $http) {
  $log.log('foodController');

  $scope.pageClass = 'page-food';
  $scope.pageTitle = "What restaurant would you usually go?";
  $scope.inputFields = $scope.pages.food;
})


// Transportation
.controller('transportationController', function($scope, $log, $http) {
  $log.log('transportationController');

  $scope.pageClass = 'page-transportation';
  $scope.pageTitle = "How would you like to move from point A to B?";
  $scope.inputFields = $scope.pages.transportation;
})


// Travel
.controller('travelController', function($scope, $log, $http) {
  $log.log('travelController');

  $scope.pageClass = 'page-travel';
  $scope.pageTitle = "How often do you travel every year?";
  $scope.inputFields = $scope.pages.travel;
})


// Hobby
.controller('hobbyController', function($scope, $log, $http) {
  $log.log('hobbyController');

  $scope.pageClass = 'page-hobby';
  $scope.pageTitle = "What hobbies would you like to have?";
  $scope.inputFields = $scope.pages.hobby;
})


// Summary
.controller('summaryController', function($scope, $log, $http) {
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
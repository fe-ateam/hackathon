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
    var city = $scope.inputFields[0].value;
    console.log(city.name);
    // console.log($scope.pages.location[0].value.name);
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
  };
})


// Housing
.controller('housingController', function($scope, $log, $http) {
  $log.log('housingController');

  $scope.pageClass = 'page-housing';
  $scope.pageTitle = "What house do you like to live in?";
  $scope.inputFields = $scope.pages.housing;

  $scope.goNext = function() {
    var city = $scope.pages.location[0].value.name;
    var curAge = $scope.pages.ages[0].value;
    var retAge = $scope.pages.ages[1].value;
    var housing = $scope.inputFields[0].value[0];
    var url = '/housing/' + city + '/' + curAge + '/' + retAge + '/' + housing;

    console.log(url);

    $http.get(url).success(function(price) {
      console.log(price);

      $scope.saveToSummary('housing', price);
    });

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

  $scope.total = function() {
    var total = 0;
    angular.forEach($scope.summary, function(category) {
      if(category.price != '') {
        total += parseInt(category.price);
      }
    });

    return total;
  };
});
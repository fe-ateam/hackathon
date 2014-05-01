angular.module('app')


.controller('mainController', function($scope, $log, $http) {
  $log.log('mainController');

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

  $scope.question = {
    id: 'location',
    name: "Where do you want to retire?",
    type: 'text'
  };
})


// Ages
.controller('agesController', function($scope, $log) {
  $log.log('agesController');

  $scope.pageClass = 'page-ages';
})


// Housing
.controller('housingController', function($scope, $log) {
  $log.log('housingController');

  $scope.pageClass = 'page-housing';

  $scope.question = {
    id: 'housing',
    name: "What house do you like to live in?",
    type: 'radio',
    answers: [
      { id: "housing_rent_in", name: "Rent apartment in city centre", selected: true },
      { id: "housing_rent_out", name: "Rent apartment outside of centre" },
      { id: "housing_buy_in", name: "Buy house in city centre" },
      { id: "housing_buy_out", name: "Buy house outside of centre" }
    ]
  };

  $scope.goBack = function() {

  };

  $scope.goNext = function() {

  };
})


// Food
.controller('foodController', function($scope, $log) {
  $log.log('foodController');

  $scope.pageClass = 'page-food';
})


// Transportation
.controller('transportationController', function($scope, $log) {
  $log.log('transportationController');

  $scope.pageClass = 'page-transportation';
})


// Travel
.controller('travelController', function($scope, $log) {
  $log.log('travelController');

  $scope.pageClass = 'page-travel';
})


// Hobby
.controller('hobbyController', function($scope, $log) {
  $log.log('hobbyController');

  $scope.pageClass = 'page-hobby';
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
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

  $scope.question = {
    name: "Where do you want to retire?",
    type: "text"
  };
})


.controller('agesController', function($scope, $log) {
  $log.log('agesController');

  $scope.pageClass = 'page-ages';
  $scope.inputFields = [
    {
        fieldName: 'currentAge',
        fieldLabel: 'What is Your Current Age?',
        fieldValue: '55',
        fieldType: 'text',
        min: 18,
        max: 80
    },
    {
        fieldName: 'retirementAge',
        fieldLabel: 'What is Your Retirement Age?',
        fieldValue: '65',
        fieldType: 'text',
        min: 18,
        max: 80
    }
  ];
})


.controller('housingController', function($scope, $log) {
  $log.log('housingController');

  $scope.pageClass = 'page-housing';
})


.controller('foodController', function($scope, $log) {
  $log.log('foodController');

  $scope.pageClass = 'page-food';
})


.controller('transportationController', function($scope, $log) {
  $log.log('transportationController');

  $scope.pageClass = 'page-transportation';
})


.controller('travelController', function($scope, $log) {
  $log.log('travelController');

  $scope.pageClass = 'page-travel';
})


.controller('hobbyController', function($scope, $log) {
  $log.log('hobbyController');

  $scope.pageClass = 'page-hobby';
})


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
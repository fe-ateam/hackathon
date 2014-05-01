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
})

.controller('summaryController', function($scope, $log) {
  $scope.pageClass = 'page-summary';

  $scope.categories = [
    {'name': 'San Fran', 'value': 1000},
    {'name': 'San Jose', 'value': 300},
  ]
  $scope.total = function(){
    var total = 0;
    angular.forEach($scope.categories, function(category){
      if(category.value != '')
      {
        total += parseInt(category.value);
      }
    })
    return total;
};

});
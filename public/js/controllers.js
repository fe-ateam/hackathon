angular.module('app')


.controller('mainController', function($scope, $log, $http, $location) {
  $log.log('mainController');

  $scope.isPageActive = function(name) {
    return $location.path().indexOf(name) > -1;
  };

  $scope.getCommonUrlParams = function() {
    var params = {
      city: $scope.pages.location[0].value.name,
      curAge: $scope.pages.ages[0].value,
      retAge: $scope.pages.ages[1].value
    };

    $log.log(params);

    return params;
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

    var params = $scope.getCommonUrlParams();
    params.housing = $scope.pages.housing[0].value[0];
    var url = '/housing/' + params.city + '/' + params.curAge + '/' + params.retAge + '/' + params.housing;

    $log.log(url);

    $http.get(url).success(function(price) {
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

  $scope.goNext = function() {

    var params = $scope.getCommonUrlParams();
    params.food = $scope.pages.food[0].value;
    var url = '/food/' + params.city + '/' + params.curAge + '/' + params.retAge + '/' + params.food;

    $log.log(url);

    $http.get(url).success(function(price) {
      $scope.saveToSummary('food', price);
    });

  };
})


// Transportation
.controller('transportationController', function($scope, $log, $http) {
  $log.log('transportationController');

  $scope.pageClass = 'page-transportation';
  $scope.pageTitle = "How would you like to move from point A to B?";
  $scope.inputFields = $scope.pages.transportation;

  $scope.goNext = function() {

    var params = $scope.getCommonUrlParams();
    params.transportation = $scope.pages.transportation[0].value;
    var url = '/transportation/' + params.city + '/' + params.curAge + '/' + params.retAge + '/' + params.transportation;

    $log.log(url);

    $http.get(url).success(function(price) {
      $scope.saveToSummary('transportation', price);
    });

  };
})


// Travel
.controller('travelController', function($scope, $log, $http) {
  $log.log('travelController');

  $scope.pageClass = 'page-travel';
  $scope.pageTitle = "How often do you travel every year?";
  $scope.inputFields = $scope.pages.travel;

  $scope.goNext = function() {

    var params = $scope.getCommonUrlParams();
    params.travel = $scope.pages.travel[0].value;
    var url = '/travel/' + params.city + '/' + params.curAge + '/' + params.retAge + '/' + params.travel;

    $log.log(url);

    $http.get(url).success(function(price) {
      $scope.saveToSummary('travel', price);
    });

  };
})


// Hobby
.controller('hobbyController', function($scope, $log, $http) {
  $log.log('hobbyController');

  $scope.pageClass = 'page-hobby';
  $scope.pageTitle = "What hobbies would you like to have?";
  $scope.inputFields = $scope.pages.hobby;

  $scope.goNext = function() {

    var params = $scope.getCommonUrlParams();
    var hobbies = $scope.pages.hobby[0].value;

    var selectedHobbies = ['f', 'f', 'f', 'f', 'f'];
    angular.forEach(hobbies, function(hobby) {
      // Order: golf, dancing, fishing, boating, gardening
      if (hobby === 'golf') {
        selectedHobbies[0] = 't';
      }
      else if (hobby === 'dancing') {
        selectedHobbies[1] = 't';
      }
      else if (hobby === 'fishing') {
        selectedHobbies[2] = 't';
      }
      else if (hobby === 'boating') {
        selectedHobbies[3] = 't';
      }
      else if (hobby === 'gardening') {
        selectedHobbies[4] = 't';
      }
    });
    params.hobby = selectedHobbies.join('');

    var url = '/hobby/' + params.city + '/' + params.curAge + '/' + params.retAge + '/' + params.hobby;

    $log.log(url);

    // $http.get(url).success(function(price) {
    //   $scope.saveToSummary('hobby', price);
    // });

  };
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
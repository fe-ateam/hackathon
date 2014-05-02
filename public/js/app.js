angular.module('app', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])


.config(function($routeProvider) {

  $routeProvider

    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })

    .when('/location', {
      templateUrl: 'partials/location.html',
      controller: 'locationController'
    })

    .when('/ages', {
      templateUrl: 'partials/ages.html',
      controller: 'agesController'
    })

    .when('/housing', {
      templateUrl: 'partials/housing.html',
      controller: 'housingController'
    })

    .when('/food', {
      templateUrl: 'partials/food.html',
      controller: 'foodController'
    })

    .when('/transportation', {
      templateUrl: 'partials/transportation.html',
      controller: 'transportationController'
    })

    .when('/travel', {
      templateUrl: 'partials/travel.html',
      controller: 'travelController'
    })

    .when('/hobby', {
      templateUrl: 'partials/hobby.html',
      controller: 'hobbyController'
    })

    .when('/summary', {
      templateUrl: 'partials/summary.html',
      controller: 'summaryController'
    });
})


.run(function($rootScope, $log, $http) {

  $rootScope.pages = {

    // Page location
    // ---------------------------------------------------------
    location: [

      // Question - location
      {
        name: 'cityState',
        value: null,
        answers: [
        ]
      }

    ], // end of page location

    // Page ages
    // ---------------------------------------------------------
    ages: [
      // Question - current age
      {
        name: 'currentAge',
        label: 'What is your current age?',
        value: '55',
        type: 'text',
        validation: 'numbers-only',
        min: 18,
        max: 80
      },

      // Question - retirement age
      {
        name: 'retirementAge',
        label: 'What age would you like to retire at?',
        value: '65',
        type: 'text',
        validation: 'numbers-only',
        min: 18,
        max: 80
      }
    ], // end of page ages

    // Page housing
    // ---------------------------------------------------------
    housing: [

      // Question - housing
      {
        name: 'housingType',
        value: ['rentInCentre'],
        type: "radio",
        answers: [
          { name: "rentInCentre", icon: "fa fa-building-o", label: "Rent in city centre", selected: true },
          { name: "rentOutsideCentre", icon: "fa fa-home", label: "Rent outside of centre", selected: false },
          { name: "buyInCentre", icon: "fa fa-building-o", label: "Buy in city centre", selected: false },
          { name: "buyOutsideCentre", icon: "fa fa-home", label: "Buy outside of centre", selected: false }
        ]
      }
    ], // end of page housing

    // Page food
    // ----------------------------------------------------------

    food: [

      // Question - food
      {
        name: 'food',
        type: 'radio',
        value: ['midRangeRestaurant'],
        answers: [
          { name: 'cookAtHome', icon: 'glyphicon glyphicon-cutlery', label: "Cook at home", selected: true },
          { name: 'inexpensiveRestaurant', icon: 'ci ci-dollar',  label: "Inexpensive restaurant", selected: false },
          { name: 'midRangeRestaurant', icon: 'ci ci-two-dollar', label: "Mid-range restaurant", selected: false },
          { name: 'expensiveRestaurant', icon: 'ci ci-three-dollar', label: "Expensive restaurant", selected: false }
        ]
      }

    ], // end of page food

    // Page transportation
    // ----------------------------------------------------------

    transportation: [

      // Question - transportation
      {
        name: 'transportation',
        type: 'radio',
        value: ['midRangeCar'],
        answers: [
          { name: 'publicTransportation', icon: 'ci ci-bus', label: "Public transportation", selected: true },
          { name: 'midRangeCar', icon: 'ci ci-car', label: "Mid-range car", selected: false },
          { name: 'luxuryCar', icon: 'ci ci-sports-car', label: "Luxury car", selected: false }
        ]
      }

    ], // end of transportation

    // Page travel
    // ----------------------------------------------------------

    travel: [

      // Question - travel
      {
        name: 'travel',
        type: 'text',
        value: '1',
        validation: 'numbers-only',
        min: 0,
        max: 12
      }

    ], // end of travel

    // Page hobby
    // ----------------------------------------------------------

    hobby: [

      // Question - hobby
      {
        name: 'hobby',
        type: 'checkbox',
        value: ['golf', 'boating'],
        answers: [
          { name: 'golf', icon: 'ci ci-golf', label: "Golf", selected: true },
          { name: 'dancing', icon: 'glyphicon glyphicon-music', label: "Dancing", selected: false},
          { name: 'fishing', icon: 'ci ci-fishing', label: "Fishing", selected: false },
          { name: 'boating', icon: 'ci ci-boating', label: "Boating", selected: true },
          { name: 'gardening', icon: 'ci ci-gardening', label: "Gardening", selected: false }
        ]
      }
    ] // end of Page hobby

  }; // end of $rootScope.pages


  $rootScope.summary = [
    { name: 'housing', label: "Housing", price: 0 },
    { name: 'food', label: "Food", price: 0 },
    { name: 'transportation', label: "Transportation", price: 0 },
    { name: 'travel', label: "Travel", price: 0 },
    { name: 'hobby', label: "Hobby", price: 0 }
  ];


  $rootScope.saveToSummary = function(name, price) {

    angular.forEach($rootScope.summary, function(category) {
      if (category.name === name) {
        $log.log('Saving ... name = ' + category.name + ', price = ' + category.price);
        category.price = price;
        $log.log('Saved ... name = ' + category.name + ', price = ' + category.price);
      }
    });
  };


  // Populate cities dropdown
  $http.get('/cities').success(function(cities) {

    angular.forEach(cities, function(city) {
      $rootScope.pages.location[0].answers.push({
        name: city.name,
        label: city.name
      });
    });
  });

});
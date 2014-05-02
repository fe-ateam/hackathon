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


.run(function($rootScope) {

  $rootScope.pages = {

    // Page location
    // ---------------------------------------------------------
    location: [

      // Question - location
      {
        name: 'cityState',
        value: "San Jose, CA",
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
        value: "rentInCentre",
        type: "radio",
        answers: [
          { name: "rentInCentre", img: "blah", label: "Rent in city centre", selected: true },
          { name: "rentOutsideCentre", img: "blah2", label: "Rent outside of centre", selected: false },
          { name: "buyInCentre", img: "blah2", label: "Buy in city centre", selected: false },
          { name: "buyOutsideCentre", img: "blah2", label: "Buy outside of centre", selected: false }
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
        value: 'midRangeFood',
        answers: [
          { name: 'cookAtHome', img: 'blah', label: "Cook at home", selected: true },
          { name: 'inexpensiveRestaurant', img: 'blah', label: "Inexpensive restaurant", selected: false },
          { name: 'midRangeRestaurant', img: 'blah', label: "Mid-range restaurant", selected: false },
          { name: 'expensiveRestaurant', img: 'blah', label: "Expensive restaurant", selected: false }
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
        value: 'bus',
        answers: [
          { name: 'publicTransportation', img: 'blah', label: "Public transportation", selected: true },
          { name: 'midRangeCar', img: 'blah2', label: "Mid-range car", selected: false },
          { name: 'luxuryCar', img: 'blah3', label: "Luxury car", selected: false }
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
        value: ['golf', 'hiking'],
        answers: [
          { name: 'golf', img: 'blah1', label: "Golf", selected: true },
          { name: 'dancing', img: 'blah2', label: "Dancing", selected: false},
          { name: 'fishing', img: 'blah3', label: "Fishing", selected: false },
          { name: 'boating', img: 'blah3', label: "Boating", selected: true },
          { name: 'gardening', img: 'blah3', label: "Gardening", selected: false }
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

});
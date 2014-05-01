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
        name: 'location',
        label: "Where do you want to retire?",
        type: 'text'
      }

    ], // end of page location

    // Page ages
    // ---------------------------------------------------------
    ages: [
      // Question - current age
      {
        name: 'currentAge',
        label: "What is Your Current Age?",
        value: '55',
        type: 'text',
        validation: 'numbers-only',
        min: 18,
        max: 80
      },

      // Question - retirement age
      {
        name: 'retirementAge',
        label: "What is Your Retirement Age?",
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
        label: "Tell us about the type of house you would like to own.",
        value: "midRangeHome",
        type: "radio",
        answers: [{
          name: "midRangeHome",
          img: "blah",
          label: "Mid Range Home"
        },
        {
          name: "luxury",
          img: "blah2",
          label: "Luxury Home"
        }]
      }
    ], // end of page housing

    // Page food
    // ----------------------------------------------------------

    food: [

      // Question - food
      {
        name: 'food',
        label: "What restaurant do you like to go?",
        value: 'midRangeFood',
        answers: [{
          name: 'midRangeFood',
          img: 'blah',
          label: "Mid range restaurant"
        }
        ]
      }

    ] // end of page food

  }; // end of $rootScope.pages

});
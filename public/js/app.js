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
        value: "blah2",
        answers: [
          { name: "blah", img: "blah", label: "San Jose, CA" },
          { name: "blah2", img: "blah2", label: "San Francisco, CA" }
        ]
      }

    ], // end of page location

    // Page ages
    // ---------------------------------------------------------
    ages: [
      // Question - current age
      {
        name: 'currentAge',
        value: '55',
        type: 'text',
        validation: 'numbers-only',
        min: 18,
        max: 80
      },

      // Question - retirement age
      {
        name: 'retirementAge',
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
        value: "midRangeHome",
        type: "radio",
        answers: [
          { name: "midRangeHome", img: "blah", label: "Mid Range Home" },
          { name: "luxuryHome", img: "blah2", label: "Luxury Home" }
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
          { name: 'midRangeFood', img: 'blah', label: "Mid range restaurant" },
          { name: 'luxuryFood', img: 'blah', label: "Luxury restaurant" }
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
          { name: 'bus', img: 'blah', label: "Public bus" },
          { name: 'car', img: 'blah2', label: "Car" },
          { name: 'luxuryCar', img: 'blah3', label: "Luxury car" }
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
        value: '',
        answers: [
          { name: 'golf', img: 'blah1', label: "Golf" },
          { name: 'gettingDrunck', img: 'blah2', label: "Getting drunck"},
          { name: 'hiking', img: 'blah3', label: "Hiking" }
        ]
      }

    ] // end of Page hobby

  }; // end of $rootScope.pages

});
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
    })

    .when('/learn', {
      templateUrl: 'partials/learn.html',
      controller: 'learnController'
    });
})


.run(function($rootScope, $log, $http) {

  $rootScope.pageColors = ['#5f9ae8', '#f77d7b', '#ab94ce', '#f7a559', '#76c976'];

  $rootScope.pages = {

    // Page location
    // ---------------------------------------------------------
    location: [

      // Question - location
      {
        name: 'cityState',
        value: { name:'San Francisco, CA', label: 'San Francisco, CA'},
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
          { name: "rentInCentre", icon: {css:"fa fa-building-o", img: ''}, label: "Rent in city center", selected: true },
          { name: "rentOutsideCentre", icon: {css:"fa fa-home", img: ''}, label: "Rent outside of center", selected: false },
          { name: "buyInCentre", icon: {css:"fa fa-building-o", img: ''}, label: "Buy in city center", selected: false },
          { name: "buyOutsideCentre", icon: {css:"fa fa-home", img: ''}, label: "Buy outside of center", selected: false }
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
          { name: 'cookAtHome', icon: {css: 'glyphicon glyphicon-cutlery', img: ''}, label: "Cook at home", selected: true },
          { name: 'inexpensiveRestaurant', icon: {css:'ci ci-dollar', img: 'img/icons/inexpensive-SM.png'},  label: "Inexpensive restaurant", selected: false },
          { name: 'midRangeRestaurant', icon: {css:'ci ci-two-dollar', img: 'img/icons/slightlyExpensive-SM.png'}, label: "Mid-range restaurant", selected: false },
          { name: 'expensiveRestaurant', icon: {css:'ci ci-three-dollar', img: 'img/icons/expensive-SM.png'}, label: "Expensive restaurant", selected: false }
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
          { name: 'publicTransportation', icon: {css: 'ci ci-bus', img: 'img/icons/transportation-SM.png'}, label: "Public transportation", selected: true },
          { name: 'midRangeCar', icon: {css:'ci ci-car', img: 'img/icons/car-SM.png'}, label: "Mid-range car", selected: false },
          { name: 'luxuryCar', icon: {css:'ci ci-sports-car', img: 'img/icons/sports-car-SM.png'}, label: "Luxury car", selected: false }
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
          { name: 'golf', icon: {css:'ci ci-golf', img: 'img/icons/golf-SM.png'}, label: "Golf", selected: false },
          { name: 'dancing', icon: {css:'glyphicon glyphicon-music', img: ''}, label: "Dancing", selected: false},
          { name: 'fishing', icon: {css:'ci ci-fishing', img: 'img/icons/fishing-SM.png'}, label: "Fishing", selected: false },
          { name: 'boating', icon: {css:'ci ci-boating', img: 'img/icons/boating-SM.png'}, label: "Boating", selected: false },
          { name: 'gardening', icon: {css:'ci ci-gardening', img: 'img/icons/gardening-SM.png'}, label: "Gardening", selected: false }
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
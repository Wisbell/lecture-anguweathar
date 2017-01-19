// Created a Module

  // must have at least empty array to create a module
// angular.module('anguweather', ['ngRoute']) // can chain


// angular.module('anguweather') // This does not create a module


angular
  .module('anguweather', ['ngRoute'])
// Create a Route
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        controller: 'RootCtrl',
        templateUrl: '/partials/root.html'
      })
  })
  .controller('RootCtrl', function(){
    console.log("I am a RootCtrl")
  })

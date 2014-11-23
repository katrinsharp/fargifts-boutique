'use strict';

/**
 * @ngdoc overview
 * @name fargiftsApp
 * @description
 * # fargiftsApp
 *
 * Main module of the application.
 */
angular
  .module('fargiftsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngBackstretch',
    'ngCountdown'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      //.when('/about', {
      //  templateUrl: 'views/about.html',
      //  controller: 'AboutCtrl'
      //})
      .otherwise({
        redirectTo: '/'
      });
  });

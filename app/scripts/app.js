'use strict';

/**
 * @ngdoc overview
 * @name timelineApp
 * @description
 * # timelineApp
 *
 * Main module of the application.
 */
angular
  .module('timelineApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'googlechart',
    'gantt', 'gantt.table', 'gantt.movable', 'gantt.tooltips','gantt.progress'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

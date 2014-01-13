'use strict';
angular.module('meanApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('main');

    $stateProvider
      .state('main', {
        url: '/main',
        controller: 'MainCtrl',
        templateUrl: 'partials/main.html'
       })
      .state('main.about', {
        url: '/about',
        templateUrl: 'partials/about.html'
       })
      .state('main.home', {
        url: '/'
       })
      .state('main.messages', {
        url: '/messages',
        templateUrl: 'partials/message.html',
        controller: 'MessageCtrl'
       });

    $locationProvider.html5Mode(true);
  });

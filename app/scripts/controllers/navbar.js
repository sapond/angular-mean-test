'use strict';

angular.module('meanApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': 'home'
    },
    {
      'title': 'About',
      'link': 'about'
    },
    {
      'title': 'Messages',
      'link': 'messages'
    }];

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

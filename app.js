'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home'  // Newly added home module
])
.config(['$routeProvider', function($routeProvider) {
    // Routes will be here
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
}]);

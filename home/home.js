'use strict';

angular.module('myApp.home', ['ngRoute', 'firebase'])
// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

// Home controller
.controller('HomeCtrl', ['$scope', '$firebaseSimpleLogin', function($scope, $firebaseSimpleLogin) {
  $scope.SignIn = function(event) {
    event.preventDefault(); // To prevent from refresh
    var username = $scope.user.email;
    var password = $scope.user.password;

    loginObj.$login('password', {
      email: username,
      password: password
    })
    .then (function(user) {
      // Success callback
      console.log('Authentication successful');
      alert('Successful login')
    }, function(error) {
      // Failure callback
      console.log('Authentication failure');
      console.log(error)
      alert('Failed login--please try again');
    })
  };

  var firebaseObj = new Firebase("https://blinding-inferno-3021.firebaseio.com")
  var loginObj = $firebaseSimpleLogin(firebaseObj);
}]);

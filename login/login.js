'use strict';

angular.module('myApp.login', ['ngRoute', 'ngCookies'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginCtrl'
        });
    }])

.controller('LoginCtrl', function($scope, $location) {
   $scope.StartTest = function() {
      $location.path('/qr');
   };
})

'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.login',
  'myApp.home',
  'myApp.qr'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]).controller('myAppCtrl', function($scope, $rootScope, $cookies, $location) {
   $rootScope.showreturnbtn = false;
   $rootScope.showlogoutbtn = false;
   if ($cookies.get('KidAuth') == 'true') $rootScope.showreturnbtn = true;
   if ($cookies.get('MSisAuth') == 'true') $rootScope.showlogoutbtn = true;
   $scope.logout = function() {
      $cookies.remove('MSisAuth');
      $cookies.remove('KidAuth');
      $location.path('/login');
      $rootScope.showlogoutbtn = false;
      $rootScope.showreturnbtn = false;
   };
   $scope.back = function() {
      $cookies.remove('KidAuth');
      $location.path('/qr');
      $rootScope.showreturnbtn = false;
   }
});

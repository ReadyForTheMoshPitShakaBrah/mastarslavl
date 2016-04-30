angular.module('App', [
   'ngRoute',
   'qrScanner',
   'App.qr'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/qr'});
}]).controller('AppCtrl', function($scope) {
});

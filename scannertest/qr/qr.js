angular.module('App.qr', [
   'qrScanner'
])
angular.module('App.qr').config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/qr', {
    templateUrl: 'qr/qr.html',
    controller: 'qrCtrl'
  });
}]);
angular.module('App.qr').controller('qrCrtl', ['$scope', function($scope) {
    $scope.onSuccess = function(data) {
        console.log(data);
    };
    $scope.onError = function(error) {
        console.log(error);
    };
    $scope.onVideoError = function(error) {
        console.log(error);
    };
}]);

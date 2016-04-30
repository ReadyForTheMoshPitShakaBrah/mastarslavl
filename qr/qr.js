'use strict';

angular.module('myApp.qr', ['qrScanner', 'ngRoute'])

.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/qr', {
            templateUrl: 'qr/qr.html',
            controller: 'QrCtrl'
        });
    }])
    .controller('QrCtrl', function($scope, $http, $location, $cookies) {
        $scope.onSuccess = function() {
            var audio = new Audio('qr/audio/beep.mp3');
            audio.play();
            $http({
                    url: '/api/restricted',
                    method: 'GET'
                })
                .success(function(data, status, headers, config) {
                    $cookies.put('KidAuth', 'true');
                    $location.path('/home');
                })
                .error(function(data, status, headers, config) {
                    $cookies.put('KidAuth', 'false');
                    alert('Cookies failed');
                });
        };
        $scope.onError = function(error) {
            console.log(error);
        };
        $scope.onVideoError = function(error) {
            console.log(error);
        };
    })

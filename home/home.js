'use strict';

angular.module('myApp.home', ['ngRoute', 'ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $rootScope, $cookies, $location) {
   $scope.ApplyAnswer = false;
   $scope.check = function (data) {
      $scope.myChoose = data;
      $scope.ApplyAnswer = true;
   }
   $scope.questions = [
      {
         question: 'Может ли водитель проехать прямо, развернуться, сбить на хуй дауна с палкой и остаться при этом безнаказанным?',
         answer: 'Крышечка хуй',
         option1: 'Кому какое дело',
         option2: 'Тай тарарай тай тай',
         option3: 'Зажигалочка Айоооо',
         option4: 'Крышечка хуй',
         url: 'images/IXP5OP_E-OE.jpg'
      },
      {
         question: 'Квадратный корень из 4',
         answer: 'Мне индифферентно',
         option1: '2',
         option2: '3',
         option3: '4',
         option4: 'Мне индифферентно',
         url: 'images/Qwzr2loBiuM.jpg'
      },
      {
         question: 'Виктор?',
         answer: 'Buktop',
         option1: 'Виктор',
         option2: 'Buktop',
         option3: 'Я Виктор',
         option4: 'Виктор я',
         url: 'images/rEMGP_k-q7Q.jpg'
      }
   ];
   $scope.showresult = false;
   $scope.currentquestionnumber = 1;
   $scope.currentquestion = $scope.questions[$scope.currentquestionnumber-1];
   $scope.questionscount = $scope.questions.length;
   $scope.correctanswers = 0;
   $scope.result = 'alert-warning';
   $scope.showalert = function() {
         if ($scope.correctanswers == $scope.questions.length) $scope.result = 'alert-success'
         else if ($scope.correctanswers == 0) $scope.result = 'alert-danger'
         else $scope.result = 'alert-warning';
         $scope.showresult = true;
   }
   $scope.NextQuestion = function(response) {
      if (response == $scope.currentquestion.answer) {
         $scope.correctanswers++;
         $scope.ApplyAnswer = false;
         if ($scope.currentquestionnumber != $scope.questions.length) {
            $scope.currentquestionnumber++;
            $scope.currentquestion = $scope.questions[$scope.currentquestionnumber-1];
         }
         else $scope.showalert();
      }
      else {
         $scope.ApplyAnswer = false;
         if ($scope.currentquestionnumber != $scope.questions.length) {
            $scope.currentquestionnumber++;
            $scope.currentquestion = $scope.questions[$scope.currentquestionnumber-1];
         }
         else $scope.showalert();
      };
   };
});

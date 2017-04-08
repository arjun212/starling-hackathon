var angular = require ('angular');
var request = require ('request');

var app = angular.module('app', []);

app.controller('appController', function appController($scope) {
  request.get('http://localhost:8000/api/random', function (error, response, body) {
    $scope.text = body;
    $scope.$apply();
  });
});


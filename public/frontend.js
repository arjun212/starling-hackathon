var angular = require ('angular');
var request = require ('request');

var app = angular.module('app', []);

app.controller('appController', function appController($scope) {
//    request.get('http://localhost:8000/api/random', function (error, response, body) {
//        $scope.text = body;
//        $scope.$apply();
//    }

    $scope.transactions = [
        {
          date: '8th April',
          merchant: 'Sainsbury',
          receipts: "False",
          transactionid: "1",
          value: "2.99"
        },
        {
          date: '8th April',
          merchant: 'Waitrose',
          receipts: "True",
          transactionid: "2",
          value: "12.99"
        },
        {
          date: '7th April',
          merchant: 'Tesco',
          receipts: "False",
          transactionid: "3",
          value: "17.99"
        },
    ];
});


var angular = require ('angular');

var app = angular.module('app', []);

app.controller('appController', function appController($scope, $http) {
//    request.get('http://localhost:8000/api/random', function (error, response, body) {
//        $scope.text = body;
//        $scope.$apply();
//    }

      $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false,
        oneAtATime: true
      };

    $http.get('http://mas-starling-hackathon-rest.herokuapp.com/api/getAllTransactions')
    .then(function(response) {
        $scope.transactions = response.data;
    });

    $scope.items = [
        {
          transactionid: '5df5d3df-e9d6-4543-9b98-c475bd4f8c9f',
          name: 'Spinach',
          value: '15.45'
        },
        {
          transactionid: '5df5d3df-e9d6-4543-9b98-c475bd4f8c9f',
          name: 'Tropicana Orange Juice',
          value: '5.45'
        },
        {
          transactionid: '5df5d3df-e9d6-4543-9b98-c475bd4f8c9f',
          name: 'Bananas',
          value: '3.45'
        },
        {
          transactionid: 'fb3951f7-6961-496b-a4d5-158cc079ae70',
          name: 'Bananas',
          value: '3.75'
        }
    ];

});


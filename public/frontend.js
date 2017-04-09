var angular = require ('angular');
var socket = require('socket.io-client')('http://mas-starling-rest.herokuapp.com');



var app = angular.module('app', []);

app.controller('appController', function appController($scope, $http) {
      $scope.transactions = [] ;
      $scope.items = [] ;
      $scope.updated = "false"; // Doesn't currently work

      socket.on('connect', function(){
        console.log( "connected successfully" ) ;

      } ) ;

      
      socket.on('message', function(data){
        console.log( "data is ", data ) ;

        $scope.transactions.push( data ) ;

        if ( data.receipts ){
          $http.get('http://mas-starling-rest.herokuapp.com/api/getProductsForTx/' + data.id)
          .then(function(response) {
            console.log(response.data);

            $scope.items = $scope.items.concat(response.data) ;
          });
        }
        $scope.updated = "true";
        $scope.$apply() ;

      } ) ;
      

      socket.on('disconnect', function(){
        console.log( "disconnected successfully" ) ;

      } ) ;

    $http.get('http://mas-starling-rest.herokuapp.com/api/getAllTransactions')
    .then(function(response) {
        $scope.transactions = response.data;
    });

    $http.get('http://mas-starling-rest.herokuapp.com/api/getAllProducts')
    .then(function(response) {
      console.log(response.data);
        $scope.items = $scope.items.concat(response.data);
    });
});

app.controller('analyticsController', function analyticsController($scope, $http) {
    $http.get('http://mas-starling-rest.herokuapp.com/api/getSumPriceOfProds')
    .then(function(response) {
      console.log(response.data);
        $scope.totalspend = response.data;
    });
});
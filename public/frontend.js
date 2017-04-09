var angular = require ('angular');
var socket = require('socket.io-client')('http://mas-starling-rest.herokuapp.com');



var app = angular.module('app', []);

app.controller('appController', function appController($scope, $http) {
//    request.get('http://localhost:8000/api/random', function (error, response, body) {
//        $scope.text = body;
//        $scope.$apply();
//    }

      $scope.transactions = [] ;

      socket.on('connect', function(){
        console.log( "connected successfully" ) ;

      } ) ;

      
      socket.on('message', function(data){
        console.log( "data is ", data ) ;

        $scope.transactions.push( data ) ;
        $scope.$apply() ;
      } ) ;
      

      socket.on('disconnect', function(){
        console.log( "disconnected successfully" ) ;

      } ) ;


      $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false,
        oneAtATime: true
      };

    $http.get('http://mas-starling-rest.herokuapp.com/api/getAllTransactions')
    .then(function(response) {
        $scope.transactions = response.data;
    });

    $http.get('http://mas-starling-rest.herokuapp.com/api/getAllProducts')
    .then(function(response) {
      console.log(response.data);
        $scope.items = response.data;
    });


});


app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
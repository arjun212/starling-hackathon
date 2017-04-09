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
        console.log($scope.totalspend);
        console.log($scope.totalspend[0]);


    var banana1 = liquidFillGaugeDefaultSettings();;
    banana1.circleColor = "#efdb40";
    banana1.textColor = "#efdb40";
    banana1.waveColor = "#efdb40";
    banana1.waveTextColor = "#a39211";

    var banana2 = liquidFillGaugeDefaultSettings();;
    banana2.circleColor = "#efdb40";
    banana2.textColor = "#efdb40";
    banana2.waveColor = "#efdb40";
    banana2.waveTextColor = "#a39211";
    banana2.displayPercent = false;
    banana2.maxValue = 50;

    var spinach1 = liquidFillGaugeDefaultSettings();;
    spinach1.circleColor = "#AAAA39";
    spinach1.textColor = "#555500";
    spinach1.waveColor = "#AAAA39";
    spinach1.waveTextColor = "#555500";

    var spinach2 = liquidFillGaugeDefaultSettings();;
    spinach2.circleColor = "#AAAA39";
    spinach2.textColor = "#555500";
    spinach2.waveColor = "#AAAA39";
    spinach2.waveTextColor = "#555500";
    spinach2.displayPercent = false;
    spinach2.maxValue = 50;

    var budweiser1 = liquidFillGaugeDefaultSettings();;
    budweiser1.circleColor = "#911182";
    budweiser1.textColor = "#911182";
    budweiser1.waveColor = "#911182";
    budweiser1.waveTextColor = "#600656";

    var budweiser2 = liquidFillGaugeDefaultSettings();;
    budweiser2.circleColor = "#911182";
    budweiser2.textColor = "#911182";
    budweiser2.waveColor = "#911182";
    budweiser2.waveTextColor = "#d34ac4";
    budweiser2.waveTextColor = "#d34ac4";
    budweiser2.displayPercent = false;
    budweiser2.maxValue = 50;

    $scope.banana = {} ;
    $scope.spinach = {} ;
    $scope.budweiser = {} ;

    for (i = 0; i < $scope.totalspend.length; ++i)
    {
        if ($scope.totalspend[i].product === "bananas")
        {
            $scope.banana = $scope.totalspend[i] ;
        }
        else if ($scope.totalspend[i].product === "spinach")
        {
            $scope.spinach =  $scope.totalspend[i] ;
        }
        else if ($scope.totalspend[i].product === "budweiser")
        {
            $scope.budweiser = $scope.totalspend[i] ;
        }
    }

    var gauge1 = loadLiquidFillGauge("fillgauge1", Math.floor($scope.banana.price), banana2);
    var gauge2 = loadLiquidFillGauge("fillgauge2", Math.floor($scope.spinach.price), spinach2);
    var gauge3 = loadLiquidFillGauge("fillgauge3", Math.floor($scope.budweiser.price), budweiser2);

    $('#percentage').on('click', function (event) {
      var gauge1 = loadLiquidFillGauge("fillgauge1", Math.floor($scope.banana.percent), banana1, true);
      var gauge2 = loadLiquidFillGauge("fillgauge2", Math.floor($scope.spinach.percent), spinach1, true);
      var gauge3 = loadLiquidFillGauge("fillgauge3", Math.floor($scope.budweiser.percent), budweiser1, true);
    })

    $('#pound').on('click', function (event) {
      var gauge1 = loadLiquidFillGauge("fillgauge1", Math.floor($scope.banana.price), banana2, true);
      var gauge2 = loadLiquidFillGauge("fillgauge2", Math.floor($scope.spinach.price), spinach2, true);
      var gauge3 = loadLiquidFillGauge("fillgauge3", Math.floor($scope.budweiser.price), budweiser2, true);
    })






    });

});
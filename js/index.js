angular.module('my-amazon',['carrello', 'ngRoute'])
.controller('mainController',mainController)
.config(function($routeProvider){
    $routeProvider.when('/prodotti',{
        templateUrl : 'componenti/prodotti.html'
    });
    
    $routeProvider.otherwise({
       redirectTo : "/prodotti" 
    });
});

function mainController($scope,$http){

var promise = $http.get('http://127.0.0.1:3000/prodotti')
promise.then(function(response){
    $scope.productArray = response.data;
});
    
promise.catch(function(error){
    //gestione errori
});
    
promise.finally(function(){
    //logiche da fare comunque
});

//element array
$scope.productArray = [ ];
       
}       

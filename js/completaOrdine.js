angular.module('my-amazon')
.config(function($routeProvider){
  $routeProvider.when('/completaOrdine',{
     templateUrl : 'componenti/completaOrdine.html',
     controller  : 'completaOrdineController'
      
  });  
})

.controller('completaOrdineController',function($scope,$http,carrelloService,$location){
   $scope.inviaOrdine = function(){
       var ordine = angular.copy($scope.ordine);
       ordine.righeOrdine = carrelloService.getDatiCarrello();
       $http.post('http://127.0.0.1:3000/ordini',ordine)
       .then(function(response){
           //carrelloService.svuotaCarrello();
           $location.path('/prodotti')
       })
       .catch(function(){
           //gestione errore
       })
   }
});
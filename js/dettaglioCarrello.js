angular.module('my-amazon')
.config(function($routeProvider){
  $routeProvider.when('/dettaglio-carrello',{
     templateUrl : 'componenti/dettaglioCarrello.html',
     controller  : 'dettaglioCarrelloController'
      
  });  
})

.controller('dettaglioCarrelloController',function($scope,carrelloService){
    $scope.dati = carrelloService.getDatiCarrello();
    $scope.totQuantita = carrelloService.getTotQuantita();
    $scope.totPrezzo = carrelloService.getTotPrezzo();
});
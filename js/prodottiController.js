angular.module('my-amazon')
.controller('prodottiController',prodottiController);

function prodottiController($scope,carrelloService){

    var categoriaSelezionata;

    $scope.selezionaCategoria = function(cat){
        categoriaSelezionata = cat;
    }
    $scope.filtraProdotti = function(prod){
        return angular.isUndefined(categoriaSelezionata) || prod.categoria == categoriaSelezionata;
    }

    $scope.aggiungi = function(prod){
        carrelloService.aggiungiAlCarello(prod,1);
    }
    
}
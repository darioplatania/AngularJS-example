angular.module('carrello',[])
/*factory è un singleton perchè quell'oggetto sarà creato una sola volta direttamente da angular e non sarà modificabile da nessuno. Questo concetto è uguale alla classe private static per implementare un singleton in java
*/
.factory('carrelloService',function($log){
    //costruttore dell'oggetto servizio
    
    var datiCarrello =[];
    var totQuantita = 0;
    var totPrezzo = 0;
    
    var servizio = {
        
        getDatiCarrello : function(){
            return angular.copy(datiCarrello);
        },
        
        getTotQuantita : function(){
          return totQuantita; 
        },
        
        getTotPrezzo : function(){
          return totPrezzo; 
        },
        
       
        
        aggiungiAlCarello : function(prodotto,quantita){
            for( var i=0;i<datiCarrello.length;i++){
                var trovato = false;
                if(datiCarrello[i].id == prodotto.id){
                    trovato = true;
                    datiCarrello[i].quantita+=quantita;
                    break;
                }
            }
            if(!trovato){
                datiCarrello.push({
                    id:prodotto.id,
                    nome:prodotto.nome, 
                    prezzo:prodotto.prezzo, 
                    prezzo:prodotto.prezzo, 
                    quantita:quantita
                })
            }
            totQuantita+=quantita;
            totPrezzo+=prodotto.prezzo * quantita;
            $log.log(datiCarrello,totQuantita,totPrezzo);
        }
    };
    
    return servizio;
})
//funzione dell'oggetto modulo restituito da factory, cioè il module 'carrello'
.directive('indicatoreCarrello',function(carrelloService){
    return {
        //configurazione della direttiva e mi specifica come usarla
        restrict : 'E', //direttiva che sarà chiamata con tag <indicatore-carrello>
        templateUrl :'carrello/carrello.html',
        controller : function($scope){
            //questo controller è differente dalla direttiva angular ng-controller poichè caricherà in automatico carrello.html e si occuperà da solo di assegnarli il corrispettivo controller
            
            //nuova funzione che richiama quella esistente nel servizio
            $scope.totQuantita = function(){
                return carrelloService.getTotQuantita();
            }
            
            //reference alla funzione esistente nel servizio
            $scope.totPrezzo = carrelloService.getTotPrezzo;
            
        }
    };
});


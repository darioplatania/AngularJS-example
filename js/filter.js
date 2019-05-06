/*
la funzione module se ha due elementi come nel file index.js è un costruttore, altrimenti in questo caso richiama soltanto il modulo definito prima
*/
angular.module('my-amazon')
.filter(
    'DistinctValue', //nome del pipe
    constDistinctValue //costruttore
);

/**
* Costruisce la funzione del pipe
*/
function constDistinctValue(){
    //qui va inserita l'eventuale logica di costruzione
    return function(elenco,nomeProprieta){
        //prodotti finisce dentro elenco
        //categoria finisce dentro nomeProprieta
        //eg elenco | valoriDistinti : 'nomeProprietà'
        if(angular.isArray(elenco) && angular.isString(nomeProprieta)){
            var result = [];
            for(var i=0; i<elenco.length;i++){
                var valore = elenco[i][nomeProprieta];
                if(!angular.isUndefined(valore) && result.indexOf(valore)<0){
                    result.push(valore);
                }
            }
            return result;
        }else{
            return elenco;
        }
    }
}
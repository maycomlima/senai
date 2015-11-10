/**
 * Created by Maycom on 09/11/2015.
 */
angular.module('projetosan')
    .filter('maiusculo', maiusculo)
    .filter('minusculo', minusculo);

function maiusculo(){
    return function (input){
        if (input && typeof input === 'string'){
            return input.toUpperCase();
        }
        return input;
    }
}

function minusculo(){
    return function (input){
        if (input && typeof input === 'string'){
            return input.toLowerCase();
        }
        return input;
    }
}
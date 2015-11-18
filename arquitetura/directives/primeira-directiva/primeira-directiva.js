(function () {
    'use strict';

    angular.module('projetosan')
        .directive('snPrimeiraDirectiva', snPrimeiraDirectiva);


    /*@ngInject*/
    function snPrimeiraDirectiva(){
        return {
            restrict:'E',
            template:'<b>Olá, essa é minha primeira directiva</b>'
        };
    }
})();
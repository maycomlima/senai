/**
 * Created by maycom on 18/11/2015.
 */
(function () {
    'use strict';

    angular
        .module('projetosan')
        .directive('smCrud', smCrud);

    function smCrud(){
        var directive = {
            restrict:'E',
            transclude:true,
            templateUrl:'arquitetura/directives/crud/crud.html',
            scope:{
                titulo:'@'
            },
            link:link
        };

        return directive;

        function link(scope, element, attrs){

        }
    }
})();
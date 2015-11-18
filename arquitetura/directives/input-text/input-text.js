(function(){
    'use strict';

    angular.module('projetosan')
        .directive('snInputText', snInputText);

    function snInputText(){
        var directive = {
            restrict: 'E',
            templateUrl:'arquitetura/directives/input-text/input-text.html',
            scope:{
                label:'@',
                ngModel:'=',
                ngBlur:'&',
                ngRequired:'&',
                colspan:'@'
            },
            link: link
        };

        return directive;

        function link($scope, element, attrs){
            $scope.id = $scope.$id;

            iniciar();

            function iniciar(){
                definirColspan();
            }

            function definirColspan(){
                if(!$scope.colspan) {
                    $scope.colspan = '4';
                }

                $scope.myClass = 'col-sm-' + $scope.colspan;
            }
        }
    }
})();
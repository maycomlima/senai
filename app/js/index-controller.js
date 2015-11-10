/**
 * Created by Maycom on 03/11/2015.
 */

angular.module('projetosan',[]);

angular.module('projetosan').controller('IndexController', IndexController);

function IndexController($scope){

    $scope.nome = 'Maycom';
    $scope.teste = true;

    $scope.click = function(){
        $scope.teste = false;
        $scope.nome = 'projetosan';
    }

}
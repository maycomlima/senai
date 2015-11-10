/**
 * Created by Aluno on 04/11/2015.
 */
angular.module('projetosan',[]);

angular.module('projetosan')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope){
    $scope.nome = '';
    $scope.styleDiv = {};

    iniciar();

    function iniciar(){
        $scope.$watch('nome', escutaNome);
    }

    function escutaNome(newValue, oldValue){
            if(newValue === oldValue){
                return;
            }

        if(newValue === 'Maria'){
            $scope.styleDiv.backgroundColor = 'red';
            $scope.myClass = 'vermelho';
            $scope.myClass2 = 'borda';
        }

        else if(newValue === 'Joao'){
            $scope.styleDiv.backgroundColor = 'blue';
            $scope.myClass = 'azul';

        }

        else{
            $scope.styleDiv.backgroundColor = '#FFF';
        }

    }

}
/**
 * Created by Aluno on 13/11/2015.
 */
angular.module('projetosan')
    .controller('CadastroPessoaController', CadastroPessoaController);

function CadastroPessoaController($scope, $stateParams){
    $scope.nome = 'teste oclazy';

    //alert($stateParams.id);


    //$scope.$emit('eventoTeste',{nome:'Jullierme'});
}

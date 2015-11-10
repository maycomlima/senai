/**
 * Created by Maycom on 06/11/2015.
 */
angular.module('projetosan',['ngMessages','ui.growl']);

angular.module('projetosan')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope','$growl'];

function IndexController($scope,$growl){

    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;

    function salvar(){

        if($scope.myForm.$invalid === true){
            $growl.box('Observe', 'Verifique os campos inválidos',{
                class: 'danger',
                timeout: 3000
            }).open();
            return;
        }

        $scope.listaDePessoas.push($scope.entidade);
        limpar();

        $growl.box('Observe', 'Registro salvo com sucesso',{
            class: 'success',
            timeout: 8000
        }).open();

        return;
    }

    function limpar(){
        $scope.entidade = {};
        $scope.myForm.$setPristine();
    }







}
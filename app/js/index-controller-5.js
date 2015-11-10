/**
 * Created by Maycom on 09/11/2015.
 */
angular.module('projetosan',['ngMessages','ui.growl']);

angular.module('projetosan')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope','AlertService','$filter'];

function IndexController($scope, AlertService, $filter){

    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;

    function salvar(){
        if($scope.myForm.$invalid === true){
            AlertService.showAlert('Observe','Verifique os campos inválidos',7000);
            AlertService.showAlert('Observe','Verifique os campos inválidos');
            return;
        }

        //FORMATANDO A DATA E COLOCANDO NO OBJETO
        $scope.entidade.nascimentoFormatado= $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');
        $scope.listaDePessoas.push($scope.entidade);
        $scope.dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        limpar();

        AlertService.showOk('Sucesso','Registro adicionado com sucesso');

        return;
    }

    function limpar(){
        $scope.entidade = {};
        $scope.myForm.$setPristine();
    }
}
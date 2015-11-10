/**
 * Created by Maycom on 10/11/2015.
 */
angular.module('projetosan', ['ui.growl', 'ui.grid']);

angular.module('projetosan')
    .controller('IndexController', IndexController);

function IndexController($scope, AlertService) {

    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.limpar = limpar;
    $scope.salvar = salvar;

    $scope.gridStyle = {};
    $scope.gridStyle.width = '100%';
    $scope.gridStyle.height = '200px';


    $scope.gridOptions = {
        data: 'listaDePessoas',
        columnDefs: [
            {name: 'Pessoa', field: 'nome', width: 150},
            {name: 'Email', field: 'email', width: 250}
        ],
        enableRowSelection:true,
        enableColumnMenu:false
    };

    function salvar() {
        $scope.listaDePessoas.push($scope.entidade);
        limpar();

        AlertService.showOk('Ok', 'Registro salvo com sucesso');
    }

    function limpar() {
        $scope.entidade = {};
    }
}
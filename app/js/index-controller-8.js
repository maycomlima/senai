/**
 * Created by Aluno on 12/11/2015.
 */
angular.module('projetosan', ['ui.growl', 'ui.grid', 'ngMaterial']);

angular.module('projetosan')
    .controller('IndexController', IndexController);

function IndexController($scope, AlertService) {

    var indiceEntidadeEditar = -1;

    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.limpar = limpar;
    $scope.salvar = salvar;

    $scope.gridStyle = {};
    $scope.gridStyle.width = '100%';
    $scope.gridStyle.height = '200px';

    $scope.editarItemGrid = editarItemGrid;
    $scope.excluirItemGrid = excluirItemGrid;
    $scope.getRowStyle = getRowStyle;

    $scope.gridOptions = {

        data: 'listaDePessoas',
        columnDefs:[
            {name: 'Pessoa', field:'nome',width: 150},
            {name: 'Cor', field:'cor',width: 250},
            {name: '', field:'opcoes',width: 60,cellTemplate:'app/templates/cell-template-btn-opcoes.html'},
        ],
        enableColumnMenus:false,
        rowTemplate:'app/templates/row-template.html'
    };



    function getRowStyle(registro){
        var rowStyle = {};

        if(registro.cor)
            rowStyle.backgroundColor = registro.cor;

        return rowStyle;
    }

    function excluirItemGrid(index){
        $scope.listaDePessoas.splice(index,1);

        //alert(row);
    }

    function editarItemGrid(index){
        $scope.entidade = angular.copy($scope.listaDePessoas[index]);
        indiceEntidadeEditar = index;
        //alert(row);
    }

    function salvar() {
        if(indiceEntidadeEditar === -1){
            $scope.listaDePessoas.push($scope.entidade);
        }else{
            $scope.listaDePessoas[indiceEntidadeEditar] = $scope.entidade;
        }

        limpar();

        AlertService.showOk('Ok', 'Registro salvo com sucesso');
    }

    function limpar() {
        indiceEntidadeEditar = -1;

        $scope.entidade = {};
    }
}
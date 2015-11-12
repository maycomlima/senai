angular.module('projetosan', [
    'ui.growl',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ngMaterial'
]);

angular.module('projetosan')
    .controller('IndexController', IndexController);

function IndexController($scope, AlertService){
    $scope.listaDePessoas = [];
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.gridItemClick = gridItemClick;
    $scope.excluirItemGrid = excluirItemGrid;
    $scope.getRowStyle = getRowStyle;

    $scope.gridStyle = {};
    $scope.gridStyle.width = '100%';
    $scope.gridStyle.height = '200px';

    $scope.gridOptions = {
        data: 'listaDePessoas',
        columnDefs: [
            { name: 'Pessoa', field:'nome', width: 150, cellTemplate: 'app/templates/cell-template.html'},
            { name: 'E-mail', field:'email', minWidth: 250, cellTemplate: 'app/templates/cell-template.html'},
            { name: '', field:'excluir', width: 50, cellTemplate: 'app/templates/cell-template-btn-excluir.html'}
        ],
        enableRowSelection: true,
        enableColumnMenus: false,
        rowTemplate: 'app/templates/row-template.html'
    };

    function gridItemClick(row, col, $index){
        var teste = row;
    }

    function getRowStyle(registro){
        var rowStyle = {};

        if (registro.cor)
            rowStyle.backgroundColor = registro.cor;

        return rowStyle;
    }


    function excluirItemGrid(row){
        alert(row);
    }

    function salvar(){
        $scope.listaDePessoas.push($scope.entidade);
        limpar();

        AlertService.showOk('Ok','Registro salvo com sucesso!');
    }

    function limpar(){
        $scope.entidade = {};
    }
}
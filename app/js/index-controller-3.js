/**
 * Created by Aluno on 04/11/2015.
 */
angular.module('projetosan',[]);

angular.module('projetosan')
    .controller('IndexController', IndexController);

IndexController.$inject = ['$scope'];

function IndexController($scope){

    $scope.carros = [
        {nome:'Gol', cor:'Vermelho'},
        {nome:'Palio', cor:'Azul'}
    ];

    $scope.adicionarCarro = adicionarCarro;

    function adicionarCarro(){
        var obj = {};
        obj.nome = 'Carro' + $scope.carros.length;
        obj.cor = 'Cor' + $scope.carros.length;

        $scope.carros.push(obj);

    }









}
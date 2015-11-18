angular.module('projetosan', [
    'ui.growl',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ngMaterial',
    'ui.router',
    'ui.lazyLoad'
]).config(config);

config.$inject = ['$stateProvider','$urlRouterProvider'];

var myApp =

function config($stateProvider, $urlRouterProvider){
    var home = {
        url:'/',
        templateUrl:'app/views/home.html'
    };
    var produto = {
        url:'/produto',
        templateUrl:'app/views/produto/cadastro-produto.html'
    };
    var produtoPesquisa = {
        url:'/pesquisa',
        templateUrl:'app/views/produto/pesquisa-produto.html'
    };
    //Uma forma diferente  usando abstrata
    var pessoa = {
        abstract:true,
        url:'/pessoa',
        template:'<ui-view/>'
    };
    var cadastroPessoa = {
        url:'/cadastro',
        templateUrl:'app/views/pessoa/cadastro-pessoa.html'
    };
    var pesquisaPessoa ={
        url:'/pesquisa',
        templateUrl:'app/views/pessoa/pesquisa-pessoa.html'
    };

    $stateProvider
        .state('home', home)
        .state('produto', produto)
        .state('produto.pesquisa', produtoPesquisa)
        .state('pessoa', pessoa)
        .state('pessoa.cadastro', cadastroPessoa)
        .state('pessoa.pesquisa', pesquisaPessoa);

    //"urlRouterProvider" serve para enviar para uma rota default, quando um caminho não encontrado é aplicado.
    $urlRouterProvider.otherwise("/produto");
}

angular.module('projetosan')
    .controller('IndexController', IndexController);

function IndexController($scope, AlertService) {

}

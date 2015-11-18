(function(){
    'use strict';

    angular.module('projetosan', [
        'ui.growl',
        'ui.grid',
        'ui.grid.resizeColumns',
        'ngMaterial',
        'ui.router',
        'oc.lazyLoad'
    ]).config(config);


    /*@ngInject*/
    function config($stateProvider, $urlRouterProvider){
        var home = {
            url: '/',
            templateUrl: 'app/views/home.html'
        };
        var produto = {
            url: '/produto',
            templateUrl: 'app/views/produto/cadastro-produto.html'
        };
        var produtoPesquisa = {
            url: '/pesquisa',
            templateUrl: 'app/views/produto/pesquisa-produto.html'
        };

        var pessoa = {
            abstract: true,
            url: '/pessoa',
            template: '<ui-view/>'
        };

        var cadastroPessoa = {
            url: '/cadastro/:id',
            templateUrl: 'app/views/pessoa/cadastro-pessoa.html',
            resolve: {
                deps: function ($ocLazyLoad) {
                    return $ocLazyLoad
                        .load('app/views/pessoa/cadastro-pessoa-controller.js');
                }
            }
        };

        var pesquisaPessoa = {
            url: '/pesquisa',
            templateUrl: 'app/views/pessoa/pesquisa-pessoa.html'
        };

        $stateProvider
            .state('home', home)
            .state('produto', produto)
            .state('produto.pesquisa', produtoPesquisa)
            .state('pessoa', pessoa)
            .state('pessoa.cadastro', cadastroPessoa)
            .state('pessoa.pesquisa', pesquisaPessoa);

        $urlRouterProvider.otherwise("/");
    }
})();
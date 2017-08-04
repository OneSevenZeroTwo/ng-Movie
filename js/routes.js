;
// 添加路由写明页面的哪个页面的第几级路由===================================
(function() {
    var routes = angular.module('routes', []);
    routes.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
        // home 一层路由============================
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'template/home.html'
        })

        // footer的三个路由切换 二层路由==========================
        .state('home.movie', {
            url: '/movie',
            templateUrl: 'template/movie.html'
        }).state('home.cinema', {
            url: '/cinema',
            templateUrl: 'template/cinema.html'
        }).state('home.mine', {
            url: '/mine',
            templateUrl: 'template/mine.html'
        })

        // movie的两个路由切换 三层路由==================================
        .state('home.movie.nowin', {
            url: '/nowin',
            templateUrl: 'template/nowin.html'
        }).state('home.movie.willin', {
            url: '/willin',
            templateUrl: 'template/willin.html'
        })

        
        $urlRouterProvider.when('','/home/movie/nowin');
    }]);
})();

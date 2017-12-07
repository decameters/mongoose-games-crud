var app = angular.module('GameApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/game.html',
        controller: 'GameController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});

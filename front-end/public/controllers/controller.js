var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
    .state('login', {
        url: "/login",
        templateUrl: 'templates/login.html',
        controller:"loginCtrl"
    })
    .state("home",{
        url:"/home",
        templateUrl : "templates/home.html"
    })

    .state("signUp", {
        url: "/signUp",
        templateUrl : "templates/sign-up.html",
        controller: "SignUpController"
    })
});


var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
    .state('login', {
        url: "/login",
        templateUrl: 'templates/login.html',
        controller:"AppCtrl"
    })
    .state("home",{
        url:"/home",
        templateUrl : "templates/home.html"
    })
});

app.controller('AppCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    console.log("Hello World from controller");

    $scope.message = "Hello World";
    $scope.email = "";
    $scope.password = "";

    $scope.submit = function(){
        console.log($scope.email);
        console.log($scope.password);
        $http({
            method: 'POST',
            url: 'http://localhost:8080/login',
            data: {
                "email":$scope.email,
                "password": $scope.password
            }
        }).then(function(response){
            console.log(response);
            $state.go("home");
        });
    }
    
}]);

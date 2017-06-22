var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
    
    .state('login', {
        url: "/login",
        templateUrl: 'templates/login.html',
        controller:"loginCtrl"
    })
    .state("signUp", {
        url: "/signUp",
        templateUrl : "templates/sign-up.html",
        controller: "SignUpController"
    })
    .state("home",{
        url:"/home",
        templateUrl : "templates/home.html",
        controller: "homeCtrl"
    })
    .state("addNewBuilding",{
        url:"/addNewBuilding",
        templateUrl : "templates/add-new-building.html",
        controller: "newBuildingController"
    }).state("editBuilding",{
        url:"/editBuilding",
        params: {
            _id:null,
            name: null,
            year: null,
            style: null,
            description: null,
            history: null,
            tipology: null
        },
        templateUrl : "templates/add-new-building.html",
        controller: "editBuildingController"
    })
    .state("building",{
        url:"/building",
        params: {
            _id:null,
            name: null,
            year: null,
            style: null,
            description: null,
            history: null,
            tipology: null
        },
        templateUrl : "templates/building.html",
        controller: "buildingCtrl"
    })
});

app.controller('AppCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.message = "Hello World";
    $scope.email = "";
    $scope.password = "";

    $scope.submit = function(){
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


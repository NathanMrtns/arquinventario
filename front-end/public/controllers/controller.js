var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

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
    .state('addNewComplaint', {
        url: "/addNewComplaint",
        templateUrl: 'templates/add-new-complaint.html',
        controller:"addComplaintCtrl"
    })
});

app.controller('MenuCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    
    $scope.addPatrimony = function(){
        $state.go("addNewBuilding");
    }
    
    $scope.login = function(){
        $state.go("login");
    }
    
}]);


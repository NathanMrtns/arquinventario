var app = angular.module('app');

app.controller('loginCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.email    = "";
    $scope.password = "";

    $scope.submit = function(){
        $http({
            method: 'POST',
            url: 'http://localhost:8080/login',
            data: {
                "email":$scope.email,
                "password": $scope.password
            }
        }).then(function success(response){
            if(response.status == 200){
                $state.go("home");
            } else {
                alert('usuario invalido');
            }
        }, function error(response){
            console.log(response.status);
        });
    }

}]);


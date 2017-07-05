var app = angular.module('app');

app.controller('loginCtrl', ['serverURL', '$scope', '$http', '$state', function(serverURL, $scope, $http, $state) {
    $scope.email    = "";
    $scope.password = "";

    $scope.submit = function(){
        $http({
            method: 'POST',
            url: serverURL.value+'/login',
            data: {
                "email":$scope.email,
                "password": $scope.password
            }
        }).then(function success(response){
            if(response.status == 200){
                $state.go("home");
            } else {
                alert('Usuário inválido');
            }
        }, function error(response){
            console.log(response.status);
        });
    }

}]);


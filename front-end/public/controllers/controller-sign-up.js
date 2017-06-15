var app = angular.module('app');

app.controller('signUpCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
   
   $scope.nome="";
   $scope.email="";
   $scope.senha="";
   $scope.senha-repetida="";
   $scope.error = "";
   
   $scope.submit = function(){
        
        if ($scope.senha == $scope.senha-repetida){
                $scope.error = "";
		$http({
		    method: 'POST',
		    url: '/',
		    data: {
		        "name":$scope.nome,
		        "email":$scope.email,
		        "password":$scope.senha
		    }
		}).then(function(response){
		    
		});
        }else{
            $scope.error = "As senhas não são iguais";
        	//mostrar uma mensagem de erro
        }
   }
   
   $scope.goLogin = function(){
    	$state.go("login");
    }
    
    
}]);


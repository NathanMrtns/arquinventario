var app = angular.module('app');

app.controller('SignUpController', function($scope, $http, $state){
	$scope.senhaRepetida = "";
	$scope.senha ="";
	$scope.nome = "";
	$scope.email = "";
	$scope.submit = function(){
		if($scope.senha != $scope.senhaRepetida){
			$scope.error = "As senhas devem ser as mesmas!";
		}else{
			$scope.error = "";
			$http({
				method: 'POST',
				url: 'http://localhost:8080/',
				data: {name: $scope.nome, email: $scope.email, senha: $scope.senha}
			
			}).then(function(result){
				if(result.status == 201){
					localStorage.setItem('token', result.data.token );
					//$state.go('home');
				}else{
					$scope.error = result.data;
				}
			});
		
		}
	}
});

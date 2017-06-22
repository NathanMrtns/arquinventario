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
			console.log($scope.senha + " " + $scope.nome + " " + $scope.email);
			$http({
				method: 'POST',
				url: 'http://localhost:8080/user',
				data: {name: $scope.nome, email: $scope.email, password: $scope.senha}
			}).then(function(result){
				console.log(result);
				if(result.status == 200){
					//localStorage.setItem('token', result.data.token );
					$state.go('home');
				}else{
					$scope.error = result.data;
				}
			});
		
		}
	}
});

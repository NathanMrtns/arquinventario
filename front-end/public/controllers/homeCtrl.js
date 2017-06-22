var app = angular.module('app');

app.controller('homeCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.patrimonies = "";

	getAllPatrimonies = function() {
		console.log("TEST1");
		$http({
			method: 'GET',
			url: 'http://localhost:8080/patrimony',
		}).then(function(response){
			$scope.patrimonies = response.data;
			console.log($scope.patrimonies);
		});
	}

	getAllPatrimonies();

	$scope.goToAddBuildingPage = function() {
		$state.go("addNewBuilding");
	}

	$scope.goToBuildingPage = function() {
		$state.go("building");
	}

	$scope.test = function() {
		console.log("TEST");
	}

}]);

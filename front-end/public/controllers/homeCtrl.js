var app = angular.module('app');

app.controller('homeCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.patrimonies = "";

	getAllPatrimonies = function() {
		console.log("TEST1");
		$http({
			method: 'GET',
			url: 'http://localhost:8080/patrimony',
			/*
			data: {
				"name":$scope.name,
				"date": $scope.date,
				"style": $scope.style,
				"history": $scope.history,
				"description": $scope.description,
				"tipology": $scope.tipology,
				"photos": $scope.photos
			}
			*/
		}).then(function(response){
			$scope.patrimonies = response.data;
			console.log($scope.patrimonies);
		});

	}

	getAllPatrimonies();

	$scope.goToAddBuildingPage = function() {
		$state.go("addNewBuilding");
	}

}]);

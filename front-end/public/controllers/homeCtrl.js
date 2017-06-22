var app = angular.module('app');

app.controller('homeCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
	$scope.patrimonies = "";

	getAllPatrimonies = function() {
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

	$scope.goToBuildingPage = function(patrimony) {
		var name = patrimony.name;
		var year = patrimony.year;
		var style = patrimony.style;
		var history = patrimony.history;
		var description = patrimony.description;
		var tipology = patrimony.tipology;

		$state.go("building", {name:name, year:year, style:style, history:history, 
			                   description:description, tipology:tipology});
	}
}]);

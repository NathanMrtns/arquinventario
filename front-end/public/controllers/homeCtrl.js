var app = angular.module('app');

app.controller('homeCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
	$scope.patrimonies = "";

	getAllPatrimonies = function() {
		$http({
			method: 'GET',
			url: 'http://localhost:8080/patrimony',
		}).then(function(response){
			$scope.patrimonies = response.data;
		});
	}

	getAllPatrimonies();

	$scope.goToAddBuildingPage = function() {
		$state.go("addNewBuilding");
	}

	$scope.goToBuildingPage = function(patrimony) {
		var patrimony_id = patrimony._id;
		var name = patrimony.name;
		var year = patrimony.year;
		var style = patrimony.style;
		var history = patrimony.history;
		var description = patrimony.description;
		var tipology = patrimony.tipology;

		// {pat_id:patrimony_id, name:name, year:year, style:style, history:history, 
		// 	                   description:description, tipology:tipology}
		$state.go("building", patrimony);
	}
}]);

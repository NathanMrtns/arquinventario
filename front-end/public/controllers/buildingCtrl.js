var app = angular.module('app');

app.controller('buildingCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.name = $state.params.name;
	$scope.year = $state.params.year;
	$scope.style = $state.params.style;
	$scope.history = $state.params.history;
	$scope.description = $state.params.description;
	$scope.tipology = $state.params.tipology;

	$scope.goToHomePage = function() {
		$state.go("home");
	}

	$scope.test = function() {
		console.log($state.params.year);
	}

}]);

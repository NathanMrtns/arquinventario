var app = angular.module('app');

app.controller('buildingCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.goToHomePage = function() {
		$state.go("home");
	}

	$scope.test = function() {
		console.log($state.params.year);
	}

}]);

var app = angular.module('app');

app.controller('homeCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.goToAddBuildingPage = function() {
		$state.go("addNewBuilding");
	}

}]);

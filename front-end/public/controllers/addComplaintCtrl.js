var app = angular.module('app');

app.controller('addComplaintCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.goToHomePage = function() {
		$state.go("home");
	}

}]);

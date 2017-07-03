var app = angular.module('app');

app.controller('addComplaintCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.title = "";
	$scope.address = "";
	$scope.date = "";
	$scope.description = "";

	$scope.submit = function(){
		$http({
			method: 'POST',
			url: 'http://localhost:8080/report',
			data: {
				"title": $scope.title,
				"address": $scope.address,
				"date": $scope.date,
				"description": $scope.description
			}
		}).then(function(response) {
			$state.go("home");
		})
	}
	$scope.goToHomePage = function() {
		$state.go("home");
	}

}]);

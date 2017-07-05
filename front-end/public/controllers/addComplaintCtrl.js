var app = angular.module('app');

app.controller('addComplaintCtrl', ['serverURL', '$scope', '$http', '$state', function(serverURL, $scope, $http, $state) {

	$scope.local = "";
	$scope.date = "";
	$scope.description = "";

	$scope.submit = function(){
		$http({
			method: 'POST',
			url: serverURL.value + '/report',
			data: {
				"local": $scope.local,
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

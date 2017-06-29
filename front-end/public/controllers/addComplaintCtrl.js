var app = angular.module('app');

app.controller('addComplaintCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.local = "";
	$scope.date = "";
	$scope.photos = "";
	$scope.description = "";

	$scope.submit = function(){
		data = {
			"local": $scope.local,
			"date": $scope.date,
			"photos": $scope.photos,
			"description": $scope.description
		}

		$http({
			method: 'POST',
			url: 'http://localhost:8080/report',
			data: {
				"local": $scope.local,
				"date": $scope.date,
				"photos": $scope.photos,
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

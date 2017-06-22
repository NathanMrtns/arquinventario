var app = angular.module('app');

app.controller('newBuildingController', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.name = "";
	$scope.year = "";
	$scope.style = "";
	$scope.history = "";
	$scope.description = "";
	$scope.tipology = "";
	$scope.photos = "";

	$scope.submit = function(){
		data =  {
				"name":$scope.name,
				"year": $scope.year,
				"style": $scope.style,
				"history": $scope.history,
				"description": $scope.description,
				"tipology": $scope.tipology,
				"photos": $scope.photos
			}
		
		$http({
			method: 'POST',
			url: 'http://localhost:8080/patrimony',
			data: {
				"name":$scope.name,
				"year": $scope.year,
				"style": $scope.style,
				"history": $scope.history,
				"description": $scope.description,
				"tipology": $scope.tipology,
				"photos": $scope.photos
			}
		}).then(function(response){
			$state.go("home");
		});
	}

	$scope.goToHomePage = function() {
		$state.go("home");
	}

	$scope.test = function() {
		$state.go("TEST");
	}

}]);

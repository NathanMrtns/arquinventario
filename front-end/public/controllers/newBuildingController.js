var app = angular.module('app', ['ui.router']);

app.controller('newBuildingController', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.name = "";
	$scope.date = "";
	$scope.style = "";
	$scope.history = "";
	$scope.description = "";
	$scope.tipology = "";
	$scope.photos = "";

	$scope.submit = function(){
		console.log($scope.name);
		console.log($scope.date);
		console.log($scope.style);
		console.log($scope.history);
		console.log($scope.description);
		console.log($scope.tipology);
		console.log($scope.photos);
		$http({
			method: 'POST',
			url: 'http://localhost:8080/login',
			data: {
				"name":$scope.name,
				"date": $scope.date,
				"style": $scope.style,
				"history": $scope.history,
				"description": $scope.description,
				"tipology": $scope.tipology,
				"photos": $scope.photos
			}
		}).then(function(response){
			//console.log(response);
			//$state.go("home");
		});
	}

}]);

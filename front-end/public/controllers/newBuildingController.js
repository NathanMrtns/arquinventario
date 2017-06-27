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
				"tipology": $scope.tipology
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
				"tipology": $scope.tipology
			}
		}).then(function(response){
			$state.go("home");
		});
	}

	$scope.goToHomePage = function() {
		$state.go("home");
	}

}]);

app.controller('editBuildingController', ['$scope', '$http', '$state', function($scope, $http, $state) {
	
	var patrimony = $state.params;

	$scope.name = $state.params.name;
	$scope.year = $state.params.year;
	$scope.style = $state.params.style;
	$scope.history = $state.params.history;
	$scope.description = $state.params.description;
	$scope.tipology = $state.params.tipology;
	
	$scope.submit = function(){
		data =  {
				"name":$scope.name,
				"year": $scope.year,
				"style": $scope.style,
				"history": $scope.history,
				"description": $scope.description,
				"tipology": $scope.tipology
			}
		
		$http({
			method: 'PUT',
			url: 'http://localhost:8080/patrimony/edit/'+patrimony._id,
			data: {
				"name":$scope.name,
				"year": $scope.year,
				"style": $scope.style,
				"history": $scope.history,
				"description": $scope.description,
				"tipology": $scope.tipology
			}
		}).then(function(response){
			$state.go("home");
		});
	}

	$scope.goToHomePage = function() {
		$state.go("home");
	}

}])
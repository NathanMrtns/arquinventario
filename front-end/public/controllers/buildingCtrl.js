var app = angular.module('app');

app.controller('buildingCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {

	var patrimony = $state.params;
	$scope.name = $state.params.name;
	$scope.year = $state.params.year;
	$scope.style = $state.params.style;
	$scope.history = $state.params.history;
	$scope.description = $state.params.description;
	$scope.tipology = $state.params.tipology;

	$scope.goToHomePage = function() {
		$state.go("home");
	}

	$scope.goToEditPage = function() {
		$state.go("editBuilding", patrimony);
	}

	$scope.delete = function(){
		console.log(patrimony);
		$http({
			method: 'DELETE',
			url: 'http://localhost:8080/patrimony/'+patrimony._id,
			data: {
				"name":$scope.name,
				"year": $scope.year,
				"style": $scope.style,
				"history": $scope.history,
				"description": $scope.description,
				"tipology": $scope.tipology
			}
		}).then(function success(response){
            if(response.status == 200){
                $state.go("home");
            } else {
                alert('Houve um erro!');
            }
        }, function error(response){
            console.log(response.status);
        });
	}

}]);

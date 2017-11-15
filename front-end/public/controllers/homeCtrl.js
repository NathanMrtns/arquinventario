var app = angular.module('app');

app.controller('homeCtrl', ['serverURL', '$scope', '$http', '$state', function(serverURL, $scope, $http, $state) {
	type = "name";

	$scope.currentPage = 0;
	$scope.pageSize = 3;

	$scope.isName = 1;

	$scope.patrimonies = [];
	$scope.searchValue = "";

	getAllPatrimonies = function() {
		$http({
			method: 'GET',
			url: serverURL.value+'/patrimony',
		}).then(function(response){
			$scope.patrimonies = response.data;
		});
	}

	getAllPatrimonies();

	$scope.checkName = function() {
		type = "name";
	}

	$scope.checkAddress = function() {
		type = "address";
	}
	
	$scope.checkTipology = function() {
		type = "tipology";
	}
	
	$scope.checkYear = function() {
		type = "year";
	}
	
	$scope.checkStyle = function() {
		type = "style";
	}

	$scope.getPatrimonies = function(){
		//return $filter("filter")($scope.patrimonies, $scope.searchValue);
		var arr = [];
		if($scope.searchValue == "") {
			arr = $scope.patrimonies;
		} else {
			for (var ea in $scope.patrimonies) {
				if ($scope.patrimonies[ea].indexOf($scope.searchValue) > -1) {
					arr.push($scope.patrimonies[ea]);
				}
			}
		}
		return arr;
	}

	$scope.search = function(){
		if($scope.searchValue != ""){
			$http({
				method: 'GET',
				url: serverURL.value + '/patrimony/'+type+'/'+$scope.searchValue,
			}).then(function(result){
				if(result.status == 200){
					if (result.data.length == 0)
					{
						$scope.isName = 1;
						//type = "name";
						$scope.patrimonies = [];
						$scope.error = "Nenhuma construção foi encontrada.";
					}
					else
					{
						$scope.isSearch = 1;
						//$scope.searchValue = "";
						$scope.error = "";
						$scope.patrimonies = result.data;
					}
				}else{
				}
			});
		}
	}

	$scope.cleanSearch = function() {
		getAllPatrimonies();
	}

	$scope.goToAddBuildingPage = function() {
		$state.go("addNewBuilding");
	}

	$scope.goToBuildingPage = function(patrimony) {
		var patrimony_id = patrimony._id;
		var name = patrimony.name;
		var year = patrimony.year;
		var style = patrimony.style;
		var history = patrimony.history;
		var description = patrimony.description;
		var tipology = patrimony.tipology;
		$state.go("building", patrimony);
	}

	$scope.numberOfPages = function() {
		console.log($scope.getPatrimonies().length)
		return Math.ceil($scope.getPatrimonies().length/$scope.pageSize);
	}
}]);

app.filter("startFrom", function() {
	return function(input, start) {
		start = +start;
		return input.slice(start);
	}
})

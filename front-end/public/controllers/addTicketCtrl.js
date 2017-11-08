var app = angular.module('app');

app.controller('addTicketCtrl', ['serverURL', '$scope', '$http', '$state', 'Files', function(serverURL, $scope, $http, $state, Files) {
	$scope.title = "";
	$scope.address = "";
	$scope.description = "";
	$scope.history = "";
	$scope.style = "";
	$scope.year = "";
	$scope.tipology = "";
	$scope.status = "pending"; //accepted, pending and refused

	$scope.urgencyLevels = ["Baixo", "Médio", "Alto"];

	$scope.styles = ["Arte Deco", "Contemporâneo", "Eclético", "Protomoderno", "Moderno"];
	$scope.types = ["Comercial Misto", "Institucional", "Religioso", "Residencial"];

	$scope.submit = function(file) {
		var imagePath;
		if (file != undefined && $scope.title.replace(/ /g,'')+file.name != $state.params.imagePath){
			imagePath = $scope.title.replace(/ /g,'')+file.name
		} else {
			imagePath = $state.params.imagePath;
		}
		$http({
			method: 'POST',
			url: serverURL.value + '/ticket',
			data: {
				"title": $scope.title,
				"description": $scope.description,
				"address": $scope.address,
				"status":  $scope.status,
				"year": $scope.year,
				"style": $scope.style,
				"history": $scope.history,
				"tipology": $scope.tipology,
				"imagePath" : imagePath
			}
		}).then(function(response){
			if (Files != undefined){
				Files.upload(file, imagePath).then(function (data) {
					console.log('Uploaded successfully');
				}).catch(function(){
					console.log('Upload failed');
				});
				$state.go("home");
			}
		});
	}

	$scope.goToHomePage = function() {
		$state.go("home");
	}
}]);

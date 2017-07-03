var app = angular.module('app');

app.controller('complaintsPageCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
	$scope.complaints = "";

	getAllComplaints = function() {
		$http({
			method: 'GET',
			url: 'http://localhost:8080/report',
		}).then(function(response){
			$scope.complaints = response.data;
		});
	}

	getAllComplaints();
}]);
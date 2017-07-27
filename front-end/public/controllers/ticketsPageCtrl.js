var app = angular.module('app');

app.controller('ticketsPageCtrl', ['$scope', '$http', '$state', function($scope, $http, $state) {
	$scope.tickets = "";

	getAllTickets = function() {
		$http({
			method: 'GET',
			url: 'http://localhost:8080/ticket'
		}).then(function(response){
			$scope.tickets = response.data;
		}) 
	}

	getAllTickets();
}]);
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

	goToComplaintPage = function(complaint) {
		var complaint_id = complaint._id;
		var title = complaint.title;
		var description = complaint.description;
		var address = complaint.address;

		console.log("test!");

		$state.go("complaint", complaint);
	}
}]);
var app = angular.module('app');

app.controller('complaintCtrl', ['serverURL', '$scope', '$http', '$state', function(serverURL, $scope, $http, $state) {
	var complaint = $state.params;
	$scope.title = $state.params.title;
	$scope.description = $state.params.description;
	$scope.address = $state.params.address;

	$scope.goToComplaintsPage = function() {
		$state.go("complaintsPage");
	}

	$scope.deleteC = function() {
		$http({
			method: 'DELETE',
			url: serverURL.value + '/complaint/'+complaint._id
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

app.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Tem certeza?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction)
                        }
                    });
                }
            };
    }])
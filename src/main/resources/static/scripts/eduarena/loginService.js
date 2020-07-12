/**
 *
 * loginService
 *
 */

angular
    .module('eduarena')
    .service('loginService', loginService)

function loginService($http) {
	this.login = function($scope, $http) {
		//return $http.get("api/logintables.json");
		return $http.get("/eduArena/check?username=" + $scope.username + "&password=" + $scope.password);
	}

}		
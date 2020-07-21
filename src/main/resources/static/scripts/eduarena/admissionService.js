/**
 *
 * admissionService
 *
 */

angular
    .module('eduarena')
    .service('admissionService', admissionService)

function admissionService($http) {
	this.registerUser = function($scope, $http) {
		return $http.get("/eduArena/registerUser");
	}

}		
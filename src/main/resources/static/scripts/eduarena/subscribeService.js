/**
 *
 * subscribeService
 *
 */

angular
    .module('eduarena')
    .service('subscribeService', subscribeService)

function subscribeService($http) {
	this.subscribe = function($scope, $http) {
		return $http.get("/eduArena/subscriber");
	}

}		
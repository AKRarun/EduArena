/**
 *
 * subscriptionCtrl
 *
 */

angular
    .module('eduarena')
    .controller('subscriptionCtrl', subscriptionCtrl)  

function subscriptionCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore, $timeout, subscribeService) {
	
	$scope.userRole = $cookieStore.get('userRole');
	$scope.userApproved = $cookieStore.get('userApproved');
	$scope.userPackage = $cookieStore.get('userPackage');
	$scope.userSubscribed = $cookieStore.get('userSubscribed');
	
	 $scope.subscribeForm = function(pack) {
		 $timeout(function () {
	            // Simulate some service
//			 alert("pack:"+pack);
	     
		        	// Show notification
		        	sweetAlert.swal({
		        		title: "Thank you for your interest!",
		        		text: "We will verify and send you the confirmation mail!",
		        		type: "success"
		        	});
		 }, 500)

	 }
	 
	 $scope.subscribeList = "";
	 
	 $scope.subscribeData = function(loginForm) {

		 subscribeService.subscribe($scope, $http).then(
				function success(response){
					console.log(response.data)
 	  	    			$scope.subscribeList = response.data;
 		    	},
		    	function error(response){
		    		$scope.error = "No Subscriber / Error at server Side!";
		    	});
	    	
	    }
	
	 
	 $scope.runApprove = function (i) {
		 // start loading
		 $scope['approve'+i] = true;
		 
		 $timeout(function () {
			 // Simulate some service
			 $scope['approve'+i] = false;
		 }, 500)
	 };
	 
	 $scope.runRevoke = function (i) {
		 // start loading
		 $scope['revoke'+i] = true;
		 
		 $timeout(function () {
			 // Simulate some service
			 $scope['revoke'+i] = false;
		 }, 500)
	 };
	 
	 $scope.runReject= function (i) {
	        // start loading
	        $scope['reject'+i] = true;

	        $timeout(function () {
	            // Simulate some service
	            $scope['reject'+i] = false;
	        }, 500)
    };

};


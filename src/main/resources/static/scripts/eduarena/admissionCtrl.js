/**
 *
 * admissionCtrl
 *
 */

angular
    .module('eduarena')
    .controller('admissionCtrl', admissionCtrl)  

function admissionCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore, $timeout, admissionService) {
	
	$rootScope.userRole = $cookieStore.get('userRole');
	
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
		 }, 800)

	 }
	 
	 $scope.registeredList = "";
	 
	 $scope.registeredData = function(loginForm) {

		 admissionService.registerUser($scope, $http).then(
				function success(response){
 	  	    			$scope.registeredList = response.data;
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


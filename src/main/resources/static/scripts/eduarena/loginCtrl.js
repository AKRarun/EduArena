/**
 *
 * loginCtrl
 *
 */

angular
    .module('eduarena')
    .controller('loginCtrl', loginCtrl)  

function loginCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, loginService, $cookieStore) {

	try{
		$rootScope.userRole = $cookieStore.get('userRole');
	}catch(e){console.log("Get UserRole Exception::"+e);}

    $scope.validateMe = function(loginForm) {

    	if(loginForm.username.$valid && loginForm.password.$valid){

    	loginService.login($scope, $http).then(
			function success(response){
				console.log("Response:"+response.data.access);
  	    		if(response.data.access == "valid"){
  	    			$rootScope.userRole = response.data.type;
  	    			$cookieStore.put('user',$scope.username);
  	    			$cookieStore.put('userRole',$rootScope.userRole);
//  	    			$cookieStore.put('authenticated',true);
//  	    			$http.defaults.headers.common['X-Auth-Token'] = $scope.username.token;
//  	    			$state.transitionTo('dashboard');
  	    			
  	    			console.log("Response success - redirect me");
  	    			
	    			$state.go('dashboard');
	    		}else{
	    			$scope.error = "Incorrect username/password !";
				}
	    	},
	    	function error(response){
	    		$scope.error = "Incorrect username/password !";
	    	});
    	
    	}else{
    		$scope.error = "Username/Password Missing!";
    	}
    	
    }
    
    $scope.hideError = function() {
    	$scope.error = "";
    }
    
    $scope.logMeOut = function() {
//    	delete $rootScope.userRole;
//        delete $http.defaults.headers.common['X-Auth-Token'];
//        $cookieStore.remove('authenticated');
        $cookieStore.remove('user');
        $cookieStore.remove('userRole');
    	$state.transitionTo('home');
    }
    	
};


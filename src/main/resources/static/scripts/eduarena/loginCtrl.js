/**
 *
 * loginCtrl
 *
 */

angular
    .module('eduarena')
    .controller('loginCtrl', loginCtrl)  

function loginCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, loginService, $cookieStore, $cookies) {

	try{
		
		$rootScope.userRole = $cookieStore.get('userRole');
		$rootScope.userId = $cookieStore.get('userId');
		$rootScope.nickName = $cookieStore.get('nickName');
		$rootScope.vaildUser = $cookieStore.get('vaildUser');
		$rootScope.userPackage = $cookieStore.get('userPackage');
		$rootScope.userSchoolId = $cookieStore.get('userSchoolId');
		$rootScope.userDepartment = $cookieStore.get('userDepartment');
		$rootScope.userApproved = $cookieStore.get('userApproved');
		$rootScope.userPublic = $cookieStore.get('userPublic');
		$rootScope.userSubscribed = $cookieStore.get('userSubscribed');
		
		if(!$rootScope.vaildUser){
			$state.transitionTo('home');
		}
	
	}catch(e){
		console.log("Get UserRole Exception::"+e);
	}

    $scope.validateMe = function(loginForm) {

    	if(loginForm.username.$valid && loginForm.password.$valid){

    	loginService.login($scope, $http).then(
			function success(response){
				if(response.data.access == "valid"){
					$rootScope.userRole = response.data.role;
  	    			$rootScope.userId = response.data.userid;
  	    			
  	    			console.log("response.data.issubscribed::"+response.data.issubscribed);
  	    			$cookieStore.put('nickName',response.data.shortname);
  	    			$cookieStore.put('userId',response.data.userid);
  	    			$cookieStore.put('userRole',response.data.role);
  	    			$cookieStore.put('vaildUser',true);
  	    			$cookieStore.put('userPackage',response.data.packageid);
  	    			$cookieStore.put('userSchoolId',response.data.schoolid);
  	    			$cookieStore.put('userDepartment',response.data.department);
  	    			$cookieStore.put('userApproved',response.data.isApproved);
  	    			$cookieStore.put('userPublic',response.data.ispublic);
  	    			$cookieStore.put('userSubscribed',response.data.issubscribed);

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
    	$cookieStore.remove('nickName');
    	$cookieStore.remove('userId');
    	$cookieStore.remove('userRole');
    	$cookieStore.remove('vaildUser');
    	$cookieStore.remove('userPackage');
    	$cookieStore.remove('userSchoolId');
    	$cookieStore.remove('userDepartment');
    	$cookieStore.remove('userApproved');
    	$cookieStore.remove('userPublic');
    	$cookieStore.remove('userSubscribed');

        $state.transitionTo('home');
    }
    	
};


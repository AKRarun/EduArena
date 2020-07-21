/**
 *
 * subjectCtrl
 *
 */

angular
    .module('eduarena')
    .controller('homeCtrl', homeCtrl)  

function homeCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore, $timeout) {
	
	$scope.mode = {};
	$scope.modeList = [
		{ name: 'Private',   id: 1 },
		{ name: 'Public',    id: 2 }
		];
	
	$scope.modeId = 0;
	
	$scope.getMode = function () {
		
		$scope.modeId = $scope.mode.selected.id;
		console.log("$scope.modeId ::"+$scope.modeId );
		$timeout(function () {
			// Simulate some service
		}, 500)
		
	}
	 $scope.school = {};
	 $scope.schoolList = [
	        { name: 'Adam School',      id: 1 },
	        { name: 'Amalie School',    id: 2 },
	        { name: 'Wladimir School',  id: 3 },
	        { name: 'Estefania School', id: 4 },
	        { name: 'Nicole School',    id: 5 },
	        { name: 'Adrian School',    id: 6 }
	    ];
	 
	 $scope.schoolId = 0;

	 $scope.getSchool = function () {

		 $scope.schoolId = $scope.school.selected.id;
		 console.log("$scope.schoolId ::"+$scope.schoolId );
		 $timeout(function () {
	            // Simulate some service
	        }, 500)
	        
	 }

	 $scope.classes = {};
	 $scope.classesList = [
		 { name: 'Class I',     id: 1   },
		 { name: 'Class II',    id: 2   },
		 { name: 'Class III',   id: 3   },
		 { name: 'Class IV', 	id: 4   },
		 { name: 'Class V',    	id: 5   },
		 { name: 'Class VI',    id: 6   },
		 { name: 'Class VII',   id: 7   },
		 { name: 'Class VIII',  id: 8   },
		 { name: 'Class IX',    id: 9   },
		 { name: 'Class X',     id: 10  },
		 { name: 'Class XI',    id: 11  },
		 { name: 'Class XII',   id: 12  }
	    ];
	 
	 $scope.classId = 0;

	 $scope.getClasses = function () {

		 $scope.classId = $scope.classes.selected.id;
		 console.log("$scope.classId ::"+$scope.classId );
		 $timeout(function () {
	            // Simulate some service
	        }, 500)
	        
	 }

	 $scope.signupForm = function() {
		 $timeout(function () {
	            // Simulate some service
	     
		        if ($scope.registerForm.$valid) {
		            // Submit as normal
		        	console.log("signupForm valid");
		        
		        	
		        	// Show notification
		        	sweetAlert.swal({
		        		title: "Thank you for your interest!",
		        		text: "We will verify and send you the confirmation mail!",
		        		type: "success"
		        	});
		
		        } else {
		            $scope.registerForm.submitted = true;
		        }
		 }, 800)

	 }
	 
};


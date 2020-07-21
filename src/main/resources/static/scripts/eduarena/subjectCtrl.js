/**
 *
 * subjectCtrl
 *
 */

angular
    .module('eduarena')
    .controller('subjectCtrl', subjectCtrl)  

function subjectCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore, $timeout) {
	
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

	 $scope.getClass = function () {

		 $scope.schoolId = $scope.school.selected.id;
		 $scope.lowerSch = "";
		 $scope.middleSch = "";
		 $scope.highSch = "";
		 
		 $timeout(function () {
	            // Simulate some service
	            $scope.lowerSch = [ {name: 'Class I'}, {name: 'Class II'}, {name: 'Class III'}, {name: 'Class IV'}, {name: 'Class V'} ];
	            $scope.middleSch = [ {name: 'Class VI'}, {name: 'Class VII'}, {name: 'Class VIII'} ];
	            $scope.highSch = [ {name: 'Class IX'}, {name: 'Class X'}, {name: 'Class XI'}, {name: 'Class XII'} ];
	        }, 500)
	        
	 }
	 
	$scope.runLoading = function (i) {
        // start loading
        $scope['loading'+i] = true;
        $scope.Subject = ""; 

        $timeout(function () {
            // Simulate some service
            $scope['loading'+i] = false;
            $scope.Subject = getSubjectList($scope.schoolId,i); 
        }, 500)
    };

    getSubjectList = function (schoolId, ClassId) {
		SubjectClass = [
			  { 
				    name: 'Maths',
				    content: [
					      {
					        title: 'Pre-Number Concepts',
					        topics: [
					          { title: 'Tall And Short' },
					          { title: 'Long And Short' },
					          { title: 'Big And Small' }
					        ]
					      },
					      {
					    	  title: 'Numbers Up To 20',
					    	  topics: [
					    		  { title: 'Number 1 - 9' },
					    		  { title: 'Zero' },
					    		  { title: 'Ten' },
					    		  { title: 'Numbers 11 - 20' },
					    		  { title: 'Between,Before And After' }
					    		  ]
					      },
						 {
					        title: 'Addition 1 - 10',
					        topics: [
					          { title: 'Addition - Concept' },
					          { title: 'Adding 1 - Digit Numbers' },
					          { title: 'Addition On The Number Line' }
					        ]
					      }
					    ]
				  },
				  { 
				    name: 'Science',
				    content: [
					      {
					        title: 'About Me',
					        topics: [
					          { title: 'About Me' }
					        ]
					      },
					      {
					    	  title: 'My Body',
					    	  topics: [
					    		  { title: 'My Body' }
					    		  ]
					      },
					      {
					    	  title: 'My Body Helps Me',
					    	  topics: [
					    		  { title: 'My Body Helps Me' }
					    		  ]
					      },
						 {
					        title: 'My Body Needs Care',
					        topics: [
					          { title: 'Keeping Clean' },
					          { title: 'Keeping Healthy' }
					        ]
					      }
					    ]
				  },
				  { 
				    name: 'English',
				    content: [
					      {
					        title: 'Building Blocks Of Language',
					        topics: [
					          { title: 'Basic Units Of A Sentence' },
					          { title: 'Basic Sentence Types' }
					        ]
					      },
						 {
					        title: 'Nouns',
					        topics: [
					          { title: 'Common Nouns' },
					          { title: 'Proper Nouns' }
					        ]
					      }
					    ]
				  }
				];
		 
		return SubjectClass;
	
    }


};


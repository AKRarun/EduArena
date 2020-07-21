/**
 *
 * subjectCtrl
 *
 */

angular
    .module('eduarena')
    .controller('campusCtrl', campusCtrl)  

function campusCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore, $timeout) {
	

	$scope.userRole = $cookieStore.get('userRole');
	$scope.userSchoolId = $cookieStore.get('userSchoolId');
	
	 $scope.school = {};
	 $scope.schoolList = [
	        { name: 'Adam School',      id: 1, chairman: 'Mr. General John Mathew', principal: 'Mr. Aravind Arumugam', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'   },
	        { name: 'Amalie School',    id: 2, chairman: 'Mr. John Mathew', principal: 'Mrs. Folra', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    },
	        { name: 'Wladimir School',  id: 3, chairman: 'Mr. Mathew', principal: 'Mr. Arvind', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    },
	        { name: 'Estefania School', id: 4, chairman: 'Mr. Subash', principal: 'Mr. Velmurugan', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    },
	        { name: 'Nicole School',    id: 5, chairman: 'Mr. Venugopal', principal: 'Mr. Subramanian', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    },
	        { name: 'Adrian School',    id: 6, chairman: 'Mr. Kala Sundaram', principal: 'Mr. Vigneshwara', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    }
	    ];
	 
	 $scope.schoolId = 0;

	 $scope.getSchoolDetail = function () {

		 $scope.schoolId = $scope.school.selected.id;
		 $timeout(function () {
	            // Simulate some service
	        }, 500)
	        
	 }
	 
	 if($scope.userRole!='Admin' || $scope.userRole!='SuperAdmin'){
		 $scope.school.selected = $scope.schoolList[$scope.userSchoolId-1];
	 }
	 
};


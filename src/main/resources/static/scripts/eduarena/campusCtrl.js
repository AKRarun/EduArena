/**
 *
 * subjectCtrl
 *
 */

angular
    .module('eduarena')
    .controller('campusCtrl', campusCtrl)  

function campusCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore, $timeout) {
	
	 $scope.school = {};
	 $scope.schoolList = [
	        { name: 'Adam Public School',      id: 1, chairman: 'Mr. General John Mathew', principal: 'Mr. Aravind Arumugam', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'   },
	        { name: 'Amalie Public School',    id: 2, chairman: 'Mr. John Mathew', principal: 'Mrs. Folra', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    },
	        { name: 'Wladimir Public School',  id: 3, chairman: 'Mr. Mathew', principal: 'Mr. Arvind', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    },
	        { name: 'Estefania Public School', id: 4, chairman: 'Mr. Subash', principal: 'Mr. Velmurugan', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    },
	        { name: 'Nicole Public School',    id: 5, chairman: 'Mr. Venugopal', principal: 'Mr. Subramanian', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    },
	        { name: 'Adrian Public School',    id: 6, chairman: 'Mr. Kala Sundaram', principal: 'Mr. Vigneshwara', phone: '416-706-0173' , goal: 'Our goal is to support and nurture the children’s and our own natural desire to be life-long learners. We are committed to the families we serve, providing support and encouragement.', vision: 'Our Vision is a community where all children feel loved, respected and encouraged to develop to their fullest potential', mission: 'Our Mission is to provide high quality education and childcare in a safe, respectful and inclusive environment that builds a foundation for life-long learning'    }
	    ];
	 
	 $scope.schoolId = 0;

	 $scope.getClass = function () {

		 $scope.schoolId = $scope.school.selected.id;
		 console.log("$scope.schoolId ::"+$scope.schoolId );
		 $timeout(function () {
	            // Simulate some service
	        }, 500)
	        
	 }
	 
};


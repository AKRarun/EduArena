/**
 *
 * cmsCtrl
 *
 */

angular
    .module('eduarena')
    .controller('cmsCtrl', cmsCtrl)  

function cmsCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore) {
	
	$rootScope.userPackage = $cookieStore.get('userPackage');
	$rootScope.userSchoolId = $cookieStore.get('userSchoolId');
	$rootScope.userDepartment = $cookieStore.get('userDepartment');
	$rootScope.userSubscribed = $cookieStore.get('userSubscribed');
	
	schoolId =  $rootScope.userSchoolId;
	PackageId = $rootScope.userPackage;
	isSubscribed = $rootScope.userSubscribed;
	
	sciencePackage = (isSubscribed == '1' ? ((PackageId == '1' || PackageId == '3')? true : false ) : false);
	mathsPackage = (isSubscribed == '1' ? ((PackageId == '1' || PackageId == '2')? true : false ) : false);
	englishPackage = (isSubscribed == '1' ? ((PackageId == '1' || PackageId == '2' || PackageId == '3')? true : false ) : false);
	
	 $scope.getCmsList = function () {
			$scope.cmsPackage = [
				{ 
					name: 'General',
					content: [
						{src:'https://www.youtube.com/embed/8LM-degerdo', title:'7 Types of Plastics', tag:'General', type:'youtube'},
						{src:'https://www.youtube.com/embed/u513UvBKnlU', title:'Hidden Plastics', tag:'General', type:'youtube'},
						{src:'https://www.youtube.com/embed/2HQaeclES8U', title:'The Plastic we eat', tag:'General', type:'youtube'},
						{src:'https://www.youtube.com/embed/gvW-w0cHBB0', title:'Waste not, Want not', tag:'General', type:'youtube'},
						{src:'https://www.youtube.com/embed/68iBPAI7zMk', title:'Sea of plastic', tag:'General', type:'youtube'},
						{src:'https://www.youtube.com/embed/6GHTo4YAugo', title:'BioCellection Technology for Recycling Plastic', tag:'General', type:'youtube'},
						{src:'https://www.youtube.com/embed/uWf-ftw0Bbo', title:'Circular Economy', tag:'General', type:'youtube'}
						],
						contentFlag : true
				},
				{ 
					name: 'Science',
					content: [
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'}
						],
						contentFlag : sciencePackage
				},
				{ 
					name: 'English',
					content: [
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'}
						],
						contentFlag : englishPackage
				},
				{ 
				    name: 'Maths',
				    content: [
				    	{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
						{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'}
						],
					contentFlag : mathsPackage
				}
			];
			
			$scope.cmsPackageList = $scope.cmsPackage;
			$scope.toLoad = true;
			
	    }
	
};


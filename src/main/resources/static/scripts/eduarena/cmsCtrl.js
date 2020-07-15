/**
 *
 * cmsCtrl
 *
 */

angular
    .module('eduarena')
    .controller('cmsCtrl', cmsCtrl)  

function cmsCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore) {
	
	$scope.contentsGeneral = [
		{src:'https://www.youtube.com/embed/8LM-degerdo', title:'7 Types of Plastics', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/u513UvBKnlU', title:'Hidden Plastics', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/2HQaeclES8U', title:'The Plastic we eat', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/gvW-w0cHBB0', title:'Waste not, Want not', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/68iBPAI7zMk', title:'Sea of plastic', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/6GHTo4YAugo', title:'BioCellection Technology for Recycling Plastic', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/uWf-ftw0Bbo', title:'Circular Economy', tag:'General', type:'youtube'}
	];
	
	$scope.contentsPhysics = [
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'}
	];
	
	$scope.contentsChemistry = [
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'}
	];
	
	$scope.contentsEnglish = [
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'}
	];
	
	$scope.contentsMaths = [
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'},
		{src:'http://localhost:9000/eduArena/videos/ABC-Song.mp4', title:'ABC-Song', tag:'Pre-School', type:'mp4'}
	 ];
    	
};


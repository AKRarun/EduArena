/**
 *
 * subscriptionCtrl
 *
 */

angular
    .module('eduarena')
    .controller('subscriptionCtrl', subscriptionCtrl)  

function subscriptionCtrl($rootScope, $scope, $http, $state, $stateParams, sweetAlert, notify, $cookieStore, $timeout) {
	
	$scope.contentsGeneral = [
		{src:'https://www.youtube.com/embed/8LM-degerdo', title:'7 Types of Plastics', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/u513UvBKnlU', title:'Hidden Plastics', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/2HQaeclES8U', title:'The Plastic we eat', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/gvW-w0cHBB0', title:'Waste not, Want not', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/68iBPAI7zMk', title:'Sea of plastic', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/6GHTo4YAugo', title:'BioCellection Technology for Recycling Plastic', tag:'General', type:'youtube'},
		{src:'https://www.youtube.com/embed/uWf-ftw0Bbo', title:'Circular Economy', tag:'General', type:'youtube'}
	];
	

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
	 
	
};


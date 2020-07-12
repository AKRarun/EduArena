/**
 * HOMER - Responsive Admin Theme
 * version 1.8
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    // Set default state
    $urlRouterProvider.otherwise("/home");
    $stateProvider

	    // Login page
	    .state('home', {
	    	url: "/home",
	    	templateUrl: "views/home.html",
	    	data: {
	    		pageTitle: 'Home',
	    		pageDesc: 'The basic functionality of Home',
	    		specialClass: 'landing-page'
	    	},
	    	controller: 'loginCtrl',
	    	authenticate: true
	    })
    	// Logout - pointed to home state
	    .state('logout', {
//	        url: "/home",
	        templateUrl: "views/home.html",
	        controller: 'loginCtrl',
	        data: {
	            pageTitle: 'Home',
	            specialClass: 'landing-page'
	        },
	        authenticate: false
	    })
	    // Dashboard - Main page
	    .state('dashboard', {
	    	url: "/dashboard",
	    	templateUrl: "views/dashboard.html",
	    	controller: 'loginCtrl',
	    	data: {
	    		pageTitle: 'Dashboard',
	    		pageDesc: 'The basic functionality of Dashboard'
	    	}
	    })
	    .state('campus', {
	    	url: "/campus",
	    	templateUrl: "views/campus.html",
	    	data: {
	    		pageTitle: 'Campus',
	    		pageDesc: 'The basic functionality of Campus'
	    	}
	    })
	    .state('admission', {
	    	url: "/admission",
	    	templateUrl: "views/admission.html",
	    	data: {
	    		pageTitle: 'Admission',
	    		pageDesc: 'The basic functionality of Admission'
	    	}
	    })
	    .state('academic', {
	    	abstract: true,
	    	url: "/academic",
	    	templateUrl: "views/common/content.html",
	    	data: {
	    		pageTitle: 'Academic',
	    		pageDesc: 'The basic functionality of Academic'
	    	}
	    })
	    .state('academic.class', {
	    	url: "/class",
	    	templateUrl: "views/academic/class.html",
	    	data: {
	    		pageTitle: 'Class',
	    		pageDesc: 'The basic functionality of Class'
	    	}
	    })
	    .state('academic.subject', {
	    	url: "/subject",
	    	templateUrl: "views/academic/subject.html",
	    	data: {
	    		pageTitle: 'Subject',
	    		pageDesc: 'The basic functionality of Subject'
	    	}
	    }) 
	    /*
	    .state('class', {
	    	url: "/class",
	    	templateUrl: "views/academic/class.html",
	    	data: {
	    		pageTitle: 'Class',
	    		pageDesc: 'The basic functionality of Class'
	    	}
	    })
	    .state('subject', {
	    	url: "/subject",
	    	templateUrl: "views/academic/subject.html",
	    	data: {
	    		pageTitle: 'Subject',
	    		pageDesc: 'The basic functionality of Subject'
	    	}
	    })
	    */
	    .state('staff', {
	    	url: "/staff",
	    	templateUrl: "views/staff.html",
	    	data: {
	    		pageTitle: 'Staff',
	    		pageDesc: 'The basic functionality of Staff'
	    	}
	    })
	    .state('student', {
	    	url: "/student",
	    	templateUrl: "views/student.html",
	    	data: {
	    		pageTitle: 'Student',
	    		pageDesc: 'The basic functionality of Student'
	    	}
	    })
        .state('page', {
            url: "/page",
            templateUrl: "views/page.html",
            data: {
                pageTitle: 'page',
                pageDesc: 'The basic functionality of Test Page'
            }
        })
}

angular
    .module('eduarena')
    .config(configState)
    .run(function($rootScope, $state, editableOptions) {
        $rootScope.$state = $state;
        editableOptions.theme = 'bs3';
    });
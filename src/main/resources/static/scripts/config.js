/**
 * HOMER - Responsive Admin Theme
 * version 1.8
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider, $sceProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);
    
    $sceProvider.enabled(false);

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
	    	authenticate: false
	    })
    	// Logout - pointed to home state
	    .state('logout', {
//	        url: "/home",
	        templateUrl: "views/home.html",
//	        controller: 'loginCtrl',
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
	    	},
	    	authenticate: true
	    })
	    .state('campus', {
	    	url: "/campus",
	    	templateUrl: "views/campus.html",
	    	data: {
	    		pageTitle: 'Campus',
	    		pageDesc: 'The basic functionality of Campus'
	        },
	        authenticate: true
	    })
	    .state('admission', {
	    	url: "/admission",
	    	templateUrl: "views/admission.html",
	    	data: {
	    		pageTitle: 'Admission',
	    		pageDesc: 'The basic functionality of Admission'
	        },
	        authenticate: true
	    })
	    .state('academic', {
	    	abstract: true,
	    	url: "/academic",
	    	templateUrl: "views/common/content.html",
	    	data: {
	    		pageTitle: 'Academic',
	    		pageDesc: 'The basic functionality of Academic'
	        },
	        authenticate: true
	    })
	    .state('class', {
	    	url: "/class",
	    	templateUrl: "views/academic/class.html",
	    	data: {
	    		pageTitle: 'Class',
	    		pageDesc: 'The basic functionality of Class'
	        },
	        authenticate: true
	    })
	    .state('subject', {
	    	url: "/subject",
	    	templateUrl: "views/academic/subject.html",
	    	data: {
	    		pageTitle: 'Subject',
	    		pageDesc: 'The basic functionality of Subject'
	    	},
	    	authenticate: true
	    }) 
	    .state('grade', {
	    	url: "/grade",
	    	templateUrl: "views/academic/grade.html",
	    	data: {
	    		pageTitle: 'Grade',
	    		pageDesc: 'The basic functionality of Grade'
	        },
	        authenticate: true
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
	        },
	        authenticate: true
	    })
	    .state('student', {
	    	url: "/student",
	    	templateUrl: "views/student.html",
	    	data: {
	    		pageTitle: 'Student',
	    		pageDesc: 'The basic functionality of Student'
	        },
	        authenticate: true
	    })
	    .state('cms', {
	    	url: "/cms",
	    	templateUrl: "views/cms.html",
	    	data: {
	    		pageTitle: 'CMS',
	    		pageDesc: 'The basic functionality of CMS Page'
	        },
	    	controller: 'cmsCtrl',
    		authenticate: true
	    })
        .state('page', {
            url: "/page",
            templateUrl: "views/page.html",
            data: {
                pageTitle: 'page',
                pageDesc: 'The basic functionality of Test Page'
	        },
	        authenticate: true
        })
}

angular
    .module('eduarena')
    .config(configState)
    .run(function($rootScope, $state, editableOptions) {
        $rootScope.$state = $state;
        editableOptions.theme = 'bs3';
    });
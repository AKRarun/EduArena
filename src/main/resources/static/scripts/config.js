/**
 * EduArena - Responsive Theme
 * version 1.8
 *
 */

function configState($stateProvider, $urlRouterProvider, $compileProvider, $sceProvider) {

    // Optimize load start with remove binding information inside the DOM element
    $compileProvider.debugInfoEnabled(true);

    //Allow to view Youtube
    $sceProvider.enabled(false);
    
    // Set default state
    $urlRouterProvider.otherwise("/dashboard");
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
	    	controller: 'homeCtrl'
	    })

        // Dashboard - Main page
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {
                pageTitle: 'Dashboard'
            },
	        controller: 'dashboardCtrl'
        })

        //Campus
	    .state('campus', {
	    	url: "/campus",
	    	templateUrl: "views/campus.html",
	    	data: {
	    		pageTitle: 'Campus',
	    		pageDesc: 'The basic functionality of Campus'
	        }
	    })

	    //Admission
	    .state('admission', {
	    	url: "/admission",
	    	templateUrl: "views/admission.html",
	    	data: {
	    		pageTitle: 'Admission',
	    		pageDesc: 'The basic functionality of Admission'
	        }
	    })

        //Staff
        .state('staff', {
	    	url: "/staff",
	    	templateUrl: "views/staff.html",
	    	data: {
	    		pageTitle: 'Staff',
	    		pageDesc: 'The basic functionality of Staff'
	        }
	    })
	    
	    //Student
	    .state('student', {
	    	url: "/student",
	    	templateUrl: "views/student.html",
	    	data: {
	    		pageTitle: 'Student',
	    		pageDesc: 'The basic functionality of Student'
	        }
	    })
	    
	    //CMS
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
	    
	    //Subscription
	    .state('subscription', {
	    	url: "/subscription",
	    	templateUrl: "views/subscription.html",
	    	data: {
	    		pageTitle: 'Subscription',
	    		pageDesc: 'The basic functionality of subscription Page'
	        },
	    	controller: 'subscriptionCtrl',
    		authenticate: true
	    })

        // Academic
        .state('academic', {
            abstract: false,
            url: "/academic",
            templateUrl: "views/common/content.html",
            data: {
                pageTitle: 'Academic'
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
	    .state('academic.grade', {
	    	url: "/grade",
	    	templateUrl: "views/academic/grade.html",
	    	data: {
	    		pageTitle: 'Grade',
	    		pageDesc: 'The basic functionality of Grade'
	    	}
	    })

        // Landing page
        .state('landing', {
            url: "/landing_page",
            templateUrl: "views/landing_page.html",
            data: {
                pageTitle: 'Landing page',
                specialClass: 'landing-page'
            }
        })

	    // Analytics
        .state('analytics', {
            url: "/analytics",
            templateUrl: "views/analytics.html",
            data: {
                pageTitle: 'Analytics'
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


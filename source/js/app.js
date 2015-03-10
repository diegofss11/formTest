(function(){
	'use strict';

	angular.module('formTest', ['ui.bootstrap', 'ngRoute', 'ngMessages'])
    .constant("formConstants", {
        'CHECKBOX': 'checkbox',
        'INPUT': 'input',
        'SELECT': 'select',
        'DATE': 'date'
    })
    .config( function($routeProvider) {
        $routeProvider.
            when('/', {
                template: '<div class="main-content" first-screen><div>'
            }).
            when('/secondScreen', {
                template: '<div class="main-content" second-screen><div>'
            }).
            otherwise({
                redirectTo: '/'
            });
        });
})();
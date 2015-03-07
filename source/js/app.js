(function(){
	'use strict';

	angular.module('formTest', ['ui.bootstrap', 'ngRoute', 'ngMessages']);

    angular.module('formTest')
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
            }
        );
})();
(function(){
	'use strict';

	angular.module('formTest', ['ui.bootstrap', 'ngRoute', 'ngMessages']);

    angular.module('formTest')
        .config( function($routeProvider) {
            $routeProvider.
                when('/first-screen', {
                    template: '<div class="main-content" first-screen><div>'
                }).
                when('/second-screen', {
                    template: '<div class="main-content" second-screen><div>'
                }).
                otherwise({
                    redirectTo: '/'
                });
            }
        );
})();
'use strict';

angular.module('app')
	.directive('testDirective', function($templateCache){
		return {
			restrict: 'EA',
			templateUrl: '/source/partials/TestTemplate.html'						
		};
	});
  





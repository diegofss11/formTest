'use strict';

angular.module('app')
	.directive('testDirective', function(){
		return {
			restrict: 'EA',
			templateUrl: '/source/partials/TestTemplate.html'						
		};
	});
  





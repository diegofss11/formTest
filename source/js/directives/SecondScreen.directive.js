(function() {
	'use strict';

	/**
	 * [SecondScreen directive] Responsible to include secondScreen template
	 *
	 * <example>
	 *     <div second-screen></div>
	 * </example>
	 */

	angular.module('formTest')
		.directive('secondScreen', function(){
			return {
				restrict: 'EA',
				controller: 'secondScreenCtrl',
				controllerAs: 'vmSecondScreen',
				templateUrl: 'source/partials/SecondScreen.tpl.html'
			};
		});
})();
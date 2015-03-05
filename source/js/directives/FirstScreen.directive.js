(function() {
	'use strict';

	/**
	 * [FirstScreen directive] Responsible to include firstScreen template
	 *
	 * <example>
	 *     <div first-screen></div>
	 * </example>
	 */

	angular.module('formTest')
		.directive('firstScreen', function(){
			return {
				restrict: 'EA',
				controller: 'firstScreenCtrl',
				controllerAs: 'vmFirstScreen',
				templateUrl: '/source/partials/FirstScreen.tpl.html'
			};
		});
})();
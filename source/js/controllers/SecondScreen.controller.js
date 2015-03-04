(function() {
	'use strict';

	/**
	 * [SecondScreenController responsible for mocking up data]
	 *
	 */
	function SecondScreenController() {
		var _self = this;

		_self.tabs = [
			{ title: 'Product information', isDisabled: false },
			{ title: 'Description', isDisabled: true },
			{ title: 'Attributes', isDisabled: true },
			{ title: 'Inventory', isDisabled: true },
			{ title: 'Marketplaces', isDisabled: true }
		];

	}


	angular.module('formTest')
		.controller('secondScreenCtrl', SecondScreenController);
})();
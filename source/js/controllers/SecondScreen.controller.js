(function() {
	'use strict';

	/**
	 * [SecondScreenController responsible for mocking up data]
	 *
	 */
	function SecondScreenController(formService) {
		var _self = this;

		//Mocking tabs
		_self.tabs = [
			{ title: 'Product information', isDisabled: false },
			{ title: 'Description', isDisabled: true },
			{ title: 'Attributes', isDisabled: true },
			{ title: 'Inventory', isDisabled: true },
			{ title: 'Marketplaces', isDisabled: true }
		];

		(function() {
			_self.templatesFields = formService.formItems;
		})();
	}

	SecondScreenController.$inhect = ['formService'];

	angular.module('formTest')
		.controller('secondScreenCtrl', SecondScreenController);
})();
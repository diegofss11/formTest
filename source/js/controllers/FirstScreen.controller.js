(function() {
	'use strict';

	/**
	 * [FirstScreenController responsible for mocking up data]
	 *
	 */
	function FirstScreenController() {
		var _self = this;


		//Private - get all the items given a category
		function _getAllItemsByCategory(category) {
			for (var i = 0; i < _self.templateFields.length; i++) {
				var templateField = _self.templateFields[i];

				if(templateField.category === category) {
					return templateField.items;
				}
			}
		}

		//Public - select all category given
		_self.selectAll = function(isSelectAll, category) {
			var items = _getAllItemsByCategory(category);

			items.map(function(item) {
				item.value = isSelectAll;
			});
		};

		//dynamic data
		_self.templateFields = [{
			isOpen: true,
			category: 1,
			title: 'Basic listing information',
			items: [{
				label: 'Ship From Country',
				value: true
			},
			{
				label: 'Ship From Zip Code',
				value: true
			},
			{
				label: 'Ship From Location',
				value: true
			},
			{
				label: 'Shipping Profile ID',
				value: false
			}]
		},
		{
			isOpen: false,
			category: 2,
			title: 'Shipping options',
			items: [{
				label: 'Shipping Rate',
				value: true
			},
			{
				label: 'Check for free shipping on first offered ship service',
				value: false
			},
			{
				label: 'Check to apply domesic flat shipping discount profile',
				value: false
			},
			{
				label: 'Check to apply domestic promotional shipping rule',
				value: false
			},
			{
				label: 'Domestic - Exclude Ship To Location',
				value: true
			},
			{
				label: 'International Shipping Rate Type',
				value: false
			},
			{
				label: 'Check to apply international flat shipping discount profile',
				value: false
			},
			{
				label: 'Check to apply international promotional shipping rule',
				value: false
			},
			{
				label: 'Global Shipping',
				value: false
			}]
		}];

	}

	angular.module('formTest')
		.controller('firstScreenCtrl', FirstScreenController);
})();
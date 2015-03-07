(function() {
	'use strict';

	/**
	 * [FormService to loads/persists form in a singleton state]
	 *
	 */
	function FormService() {
		var _self = this,
			_templateFields = [{
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

		_self.addFormItem = function(item) {
			_self.formItems = item;
		};

		_self.getTemplateFields = function() {
			return _templateFields;
		};
	}

	angular.module('formTest')
		.service('formService', FormService);
})();
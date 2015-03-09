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
					id: 'listingInformation1',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-8'
				},
				{
					label: 'Ship From Zip Code',
					id: 'listingInformation2',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-8'
				},
				{
					label: 'Ship From Location',
					id: 'listingInformation3',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-8'
				},
				{
					label: 'Shipping Profile ID',
					id: 'listingInformation4',
					value: false,
					type: 'select',
					className: 'col-sm-4'
				}]
			},
			{
				isOpen: false,
				category: 2,
				title: 'Shipping options',
				items: [{
					label: 'Shipping Rate',
					id: 'shippingOption1',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-8'
				},
				{
					label: 'Check for free shipping on first offered ship service',
					id: 'shippingOption2',
					value: false,
				},
				{
					label: 'Check to apply domesic flat shipping discount profile',
					id: 'shippingOption3',
					value: false,
					type: 'input',
					className: 'col-sm-8'
				},
				{
					label: 'Check to apply domestic promotional shipping rule',
					id: 'shippingOption4',
					value: false,
					type: 'input',
					className: 'col-sm-8'
				},
				{
					label: 'Domestic - Exclude Ship To Location',
					id: 'shippingOption5',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-8'
				},
				{
					label: 'International Shipping Rate Type',
					id: 'shippingOption6',
					value: false,
					type: 'input',
					className: 'col-sm-8'
				},
				{
					label: 'Check to apply international flat shipping discount profile',
					id: 'shippingOption7',
					value: false,
					type: 'select',
					className: 'col-sm-4'
				},
				{
					label: 'Check to apply international promotional shipping rule',
					id: 'shippingOption8',
					value: false,
					type: 'select',
					className: 'col-sm-4'
				},
				{
					label: 'Global Shipping',
					id: 'shippingOption9',
					value: false,
					type: 'select',
					className: 'col-sm-4'
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
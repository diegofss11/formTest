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
					idItem: 'listingInformation1',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-7',
					minLength: 18
				},
				{
					label: 'Ship From Zip Code',
					idItem: 'listingInformation2',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-7'
				},
				{
					label: 'Ship From Location',
					idItem: 'listingInformation3',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-7'
				},
				{
					label: 'Shipping Profile ID',
					idItem: 'listingInformation4',
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
					idItem: 'shippingOption1',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-7'
				},
				{
					label: 'Check for free shipping on first offered ship service',
					idItem: 'shippingOption2',
					value: false,
					type: 'date',
					className: 'col-sm-3'
				},
				{
					label: 'Check to apply domesic flat shipping discount profile',
					idItem: 'shippingOption3',
					value: false,
					type: 'input',
					className: 'col-sm-7'
				},
				{
					label: 'Check to apply domestic promotional shipping rule',
					idItem: 'shippingOption4',
					value: false,
					type: 'input',
					className: 'col-sm-7'
				},
				{
					label: 'Domestic - Exclude Ship To Location',
					idItem: 'shippingOption5',
					value: true,
					isRequired: true,
					type: 'input',
					className: 'col-sm-7'
				},
				{
					label: 'International Shipping Rate Type',
					idItem: 'shippingOption6',
					value: false,
					type: 'input',
					className: 'col-sm-7'
				},
				{
					label: 'Check to apply international flat shipping discount profile',
					idItem: 'shippingOption7',
					value: false,
					type: 'select',
					className: 'col-sm-4'
				},
				{
					label: 'Check to apply international promotional shipping rule',
					idItem: 'shippingOption8',
					value: false,
					type: 'select',
					className: 'col-sm-4'
				},
				{
					label: 'Global Shipping',
					idItem: 'shippingOption9',
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
(function() {
	'use strict';

	/**
	 * [FirstScreenController responsible for mocking up data]
	 *
	 */
	function FirstScreenController() {
		var _self = this;

		//dynamic data
		_self.templateFields = [{
			isOpen: true,
			title: 'BASIC LISTING INFORMATION',
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
			title: 'SHIPPING OPTIONS',
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
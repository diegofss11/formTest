(function() {
	'use strict';

	/**
	 * [FirstScreenController responsible for mocking up data]
	 *
	 */
	function FirstScreenController($location, filterFilter, formService) {
		var _self = this;

		_self.templateFields = formService.getTemplateFields();

		//Private - get all the items given a category
		function _getAllItemsByCategory(category) {
			for (var i = 0; i < _self.templateFields.length; i++) {
				var templateField = _self.templateFields[i];

				if(templateField.category === category) {
					return templateField.items;
				}
			}
		}

		//Private - get all selected values
		function _getSelectedItems() {
			var items = [];

			for (var i = 0; i < _self.templateFields.length; i++) {
				var templateField = _self.templateFields[i];

				items = items.concat(_getAllItemsByCategory(templateField.category));
			}

			return filterFilter(items, { value:true });
		}

		//Public - select all category given
		_self.selectAll = function(isSelectAll, category) {
			var items = _getAllItemsByCategory(category);

			items.map(function(item) {
				item.value = isSelectAll;
			});
		};

		_self.goToSecondScreen = function() {
			/*USING REAL SERVICE - better approach would be using promise based
			formService.addTemplateField(templateFields).then(function() {
				$location.path('#/second-screen'); //change routing
			});
			*/

			//USING MOCK SERVICE - NON-PROMISE BASED SOLUTION
			var selectedItems = _getSelectedItems();
			formService.addFormItem(selectedItems);

			$location.path('/secondScreen'); //change routing
		};
	}

	FirstScreenController.$inject = ['$location', 'filterFilter', 'formService'];

	angular.module('formTest')
		.controller('firstScreenCtrl', FirstScreenController);
})();
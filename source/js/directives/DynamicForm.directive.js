(function() {
	'use strict';

	/**
	 * [Form directive] Responsible to manage the dynamic form
	 *
	 * <div dynamic-form="field" element-wrapper-class="columnSizeForElementWrapper"
	 * 		label-class="columnSizeForLabel" input-wrapper-class="columnSizeForInput">
	 * </div>
	 */

	function DynamicForm($compile, formConstants) {
		return {
				restrict: 'EA',
				scope: {
					field: '=dynamicForm',
					elementWrapperClass: '@',
					labelClass: '@',
					inputWrapperClass: '@'
				},
				templateUrl: '/source/partials/DynamicForm.tpl.html',
				link: function(scope, element, attrs) {
					var inputDiv = angular.element(element.find('div')[1]),
						fieldId = scope.field.id,
						type = scope.field.type,
						formName = 'productInfoForm',
						templateElement, templateSpan;

					if (type === formConstants.INPUT) {
						templateElement = "<input name='" + fieldId + "' ng-model='product["+ fieldId +"]' type='text' class='form-control' ng-required='" + scope.field.isRequired + "' >";
					} else if(type === formConstants.SELECT) {
						templateElement = "<select class=form-control ng-model='product["+ fieldId +"]'><option selected>Select...</option></select>";
					}

					inputDiv.prepend($compile(templateElement)(scope));

					//templateSpan = "<span class='glyphicon error-message' ng-class='productInfoForm["+ fieldId +"].$invalid ? 'glyphicon-exclamation-sign' : 'glyphicon-ok'></span>";
					//debugger;

					//inputDiv.append($compile(templateSpan)(scope));
				}
			};
	}

	DynamicForm.$inject = ['$compile', 'formConstants'];

	angular.module('formTest')
		.directive('dynamicForm', DynamicForm);
})();
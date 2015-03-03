(function() {
	'use strict';

	/**
	 * [HighlightFilter responsible for highlighting the terms found]
	 *
	 */
	function HighlightFilter($sce) {
		return function(text, term) {
			if (term) {
				text = text.replace(new RegExp('(' + term + ')', 'gi'), '<span class="highlight">$1</span>');
			}

			return $sce.trustAsHtml(text);
		};
	}

	HighlightFilter.$inject = ['$sce'];

	angular.module('formTest')
		.filter('highlight', HighlightFilter);
})();
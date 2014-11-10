'use sctrict';

/**
 * @ngdoc decorator
 * @name Exception
 * @id app.exception
 * @description Module for exceptionHandler decorator
 */

angular.module('app.exception', [])
    .config(function($provide) {
    	
    	$provide.decorator('$exceptionHandler', ['$log', '$delegate',
			function($log, $delegate) {
				return function(exception, cause) {
			  		$log.debug('Default exception handler.');
			  		$delegate(exception, cause);
				};
      		}
    	]);
    });
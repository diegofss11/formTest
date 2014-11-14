'use strict';


angular.module('app',['app.modules', 'app.exception']);
'use strict';

/**
 * @ngdoc controller
 * @name testController
 * @id testController
 * @description This is a test controller
 */

angular.module('app')
	.controller('testController', ['service', function(service){
		
	}]);
  

'use sctrict';

/**
 * @ngdoc decorator
 * @name Exception
 * @id app.exception
 * @description Module for exceptionHandler decorator
 */

angular.module('app.exception', [])
    .config(['$provide', function($provide) {
    	
    	$provide.decorator('$exceptionHandler', ['$log', '$delegate',
			function($log, $delegate) {
				return function(exception, cause) {
			  		$log.debug('Default exception handler.');
			  		$delegate(exception, cause);
				};
      		}
    	]);
    }]);
'use strict';

/**
 * @ngdoc directive
 * @name testDirective
 * @id testDirective
 * @description This is a test directive
 * ###How to use this directive
 * <div test-directive></div>
 */

angular.module('app')
	.directive('testDirective', function(){
		return {
			restrict: 'EA',
			templateUrl: '/source/partials/TestTemplate.html'						
		};
	});
  





'use strict';

/**
 * @ngdoc service
 * @name testService
 * @id testService
 * @description This is a test service
 */


angular.module('app')
	.service('testService', function(){
		
	});
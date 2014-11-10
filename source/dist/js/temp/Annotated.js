'use strict';


angular.module('app',['app.modules']);

'use strict';


angular.module('app')
	.controller('TestController', function(){

	});
  

'use strict';

angular.module('app')
	.directive('testDirective', function(){
		return {
			restrict: 'EA',
			templateUrl: '/source/partials/TestTemplate.html'						
		};
	});
  





'use strict';

angular.module('app')
	.service('TestService', function(){
		
	});
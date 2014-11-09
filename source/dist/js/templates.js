angular.module('templates-main', ['../source/partials/TestTemplate.html']);

angular.module("../source/partials/TestTemplate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../source/partials/TestTemplate.html",
    "{{ 1 + 1 }}");
}]);

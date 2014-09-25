/*!
* FitText.js 1.0 AngularJS version
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
* Angularized by Niklas Rasmusson http://rasmusson.net
*
* Date: Fri Oct 18 2013 10:51:50 GMT+0200 (CEST)
*/
angular.module('fitText', [])
.directive('fitText', ['$window', function ($window) {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      var settings = {
        'minFontSize' : attrs.minFontSize || -1/0,
        'maxFontSize' : attrs.maxFontSize || 1/0,
        'compressor'  : attrs.compressor || 1
      };

      var resizer = function () {
        elem.css('fontSize', Math.max(Math.min(elem[0].clientWidth / (parseFloat(settings.compressor)*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px');
      };

      // Call once to set.
      resizer();

      angular.element($window).bind('resize', function () {
        scope.$apply(function () {
          resizer();
        });
      });
    }
  };
}]);

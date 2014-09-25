'use strict';

/* -----
| See: http://pineconellc.github.io/angular-foundation/
|
| Embeded (non-bower) libs:
| - https://github.com/niklas-r/FitText.js
*/

var audio;
angular.element(document).ready(function() {
	audio = document.getElementById("valkyrie");
	// audio.volume = 0.025;
})

var app = angular.module("app", ['mm.foundation','fitText']);

app.controller('mainController', function($scope,$interval,DataService,CurrentTimeService) {
	// Load data from service
    var DataPromise = DataService.getData($scope.topicName);

    // Wait for the data to arrive
    DataPromise.then(function(data) {
    	// Calculate the statistical analytics
    	$scope.data = data;

		angular.forEach($scope.data.rulers, function(ruler) {
			ruler.tenure = ruler.to - ruler.from;
			ruler.kps = ruler.kills / (ruler.tenure * 365 * 24 * 60 * 60);
		});
    });

	// Update killcount per second
	var delay = 1000; // 1 sec
	$scope.timeElapsed = 0;
	$scope.combinedKillCount = 0;

	$interval(function() {
		// if(audio.volume < 1) {
		// 	audio.volume += 0.005;
		// }
		$scope.combinedKillCount = 0;
		$scope.timeElapsed++;
		// The meat of it.
		angular.forEach($scope.data.rulers, function(ruler) {
			ruler.killCount = ruler.kps * $scope.timeElapsed;
			ruler.scalps = new Array(Math.floor(ruler.killCount));
			$scope.combinedKillCount += ruler.killCount;
		})
    }, delay);
})

.filter('underscore', function() {
	return function(input) {
	  input = input || '';
	  return input.replace(" ","_").toLowerCase();
	};
})

app.factory('CurrentTimeService', function(){
	return { 
		get: function() {
			return new Date();
		}
	}; 
});

app.factory('DataService', function($http, $q) {

    var getData = function(request) {
        var deferred = $q.defer();

		$http.get('js/data.json')
		.success(function(data) {
            deferred.resolve(data);
		})
		.error(function(data) {
			deferred.resolve("Oops, couldn't find the data. Try again :)");
		});

        return deferred.promise;
    };
    return { getData: getData };
});
'use strict';

/* -----
| See: http://pineconellc.github.io/angular-foundation/
*/

var app = angular.module("app", ['mm.foundation']);

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
		$scope.combinedKillCount = 0;
		$scope.timeElapsed++;
		// The meat of it.
		angular.forEach($scope.data.rulers, function(ruler) {
			ruler.killCount = ruler.kps * $scope.timeElapsed;
			$scope.combinedKillCount += ruler.killCount;
		})
    }, delay);
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
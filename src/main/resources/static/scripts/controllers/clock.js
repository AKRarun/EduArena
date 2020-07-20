/**
 *
 * clockCtrl
 *
 */

angular
    .module('eduarena')
    .controller('clockCtrl', clockCtrl)

function clockCtrl($scope, $timeout) {
//	$scope.tickInterval = 1000 //ms
    $scope.tickInterval = 300 //ms

    var tick = function() {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
}
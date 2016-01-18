angular.module("LedsSimulatorApp", [])
.controller("LedsController", ["$scope", function($scope) {
  var set = [[1,0,0], [0,1,0], [0,1,0], [0,0,1]]
  $scope.sets = [set]
  $scope.isLedOn = function(set, row, col) {
    var state = $scope.sets[set][row][col]
    return state == 1 ? "led-on" : "led-off"
  }
  $scope.toggleLed = function(set, row, col) {
    var state = $scope.sets[set][row][col]
    $scope.sets[set][row][col] = state == 1 ? 0 : 1
  }
  
}])

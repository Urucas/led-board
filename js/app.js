angular.module("LedsSimulatorApp", [])
.controller("LedsController", ["$scope", function($scope) {
  $scope.setsCant = 1
  $scope.rowsCant = 4
  $scope.colsCant = 3
  $scope.createSet = function(rows, cols) {
    var set = [];
    var row = []
    for(i=0;i<rows;i++) {
      var col = []
      for(j=0;j<cols; j++) {
        col.push(0)
      }
      row.push(col)
    }
    set.push(row)
    return set
  }

  $scope.sets = $scope.createSet($scope.rowsCant, $scope.colsCant)
  $scope.isLedOn = function(set, row, col) {
    var state = $scope.sets[set][row][col]
    return state == 1 ? "led-on" : "led-off"
  }
  $scope.toggleLed = function(set, row, col) {
    var state = $scope.sets[set][row][col]
    $scope.sets[set][row][col] = state == 1 ? 0 : 1
  }

  $scope.updateBoard = function() {
    $scope.sets = $scope.createSet($scope.rowsCant, $scope.colsCant)
  }
  
}])

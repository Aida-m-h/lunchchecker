(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.input = "";
    $scope.splitInput = "";
    $scope.messageText = "";

    $scope.check = function () {
      $scope.splitInput = $scope.input.split(",");

      if ($scope.input === "") {
        $scope.messageText = "Please enter data first";
        return $scope.messageText;
      } else if ($scope.splitInput.length <= 3) {
        $scope.messageText = "Enjoy!";
        return $scope.messageText;
      } else {
        $scope.messageText = "Too much!";
        return $scope.messageText;
      }
    };
  }
})();

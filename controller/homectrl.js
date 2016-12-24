angular.module('mainApp').controller('homeCtrl', function ($scope,$location, $stateParams, $state,$auth,$filter) {
 $scope.isAuth = function() {
   console.log("autentication")
      return $auth.isAuthenticated();

    };
    $scope.name="dabba";
     $scope.today = new Date();


$state.go('home.dashboard');
  });

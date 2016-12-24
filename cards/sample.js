
var app = angular.module('MyApp', [])
app.controller('MyController', function ($scope, $filter) {
    var date = new Date();

    $scope.ddMMMMyyyy = $filter('date')(new Date(),'dd, MMMM yyyy');

});
  //  $scope.name="prashant";

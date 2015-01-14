'use strict';

/**
 * @ngdoc function
 * @name fargiftsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fargiftsApp
 */
angular.module('fargiftsApp')
.controller('MainCtrl', ['$scope', function($scope) {
  	//$scope.awesomeThings = [
  	//	'HTML5 Boilerplate',
  	//	'AngularJS',
  	//	'Karma'
	//];
  $scope.result = {error: '', success: '', kind: ''};
	$scope.myFirebaseRef = new Firebase("https://fargifts.firebaseio.com/signups");
  	$scope.submitSignup = function(kind) {
    	$scope.myFirebaseRef.child(kind).push({
		  	email: $scope.$eval("email_"+kind),
		  	time: '' + new Date(),
        kind: kind
		  }, function(error) {
        if(error) {
          $scope.$apply(function () {
            console.log(error);
            $scope.result = {error: 'It didn\'t work. Please try again!', success: '', kind: kind};
          });
        } else {
          $scope.$apply(function () {
            $scope.result = {error: '', success: 'Thanks! Talk to you soon!', kind: kind};
          });
        }
      });
  	};
}]);

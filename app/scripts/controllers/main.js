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
	$scope.myFirebaseRef = new Firebase("https://fargifts.firebaseio.com/signups");
  	$scope.submitSignup = function() {
    	$scope.myFirebaseRef.push({
		  	email: $scope.email,
		  	time: '' + new Date(),
		});
  	};
}]);

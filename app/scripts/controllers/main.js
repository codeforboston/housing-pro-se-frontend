'use strict';

/**
 * @ngdoc function
 * @name housingProSeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the housingProSeApp
 */
angular.module('housingProSeApp')
  .controller('MainCtrl', function ($scope, API_URL, $http) {
  	$scope.tests = API_URL;
  	var data = {"_source": false, "size": 0, "aggs": {"2": {"terms": "ExecutionIssued", "size": 5}}}
  	$http.post(API_URL, data)
  	.then(function(response) {
  		$scope.test = response;

  	});
  });

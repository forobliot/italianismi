/*global $:false */
'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
.controller('FormCtrl', function ($rootScope, $scope, $location, $routeParams, $http) {
	$scope.submitText = $rootScope.languageMap.formSubmit[$rootScope.languageSel];

	$scope.name = "";
	$scope.email = "";
	$scope.term = $routeParams.term || "";
	$scope.language = "";
	$scope.text = "";

	$scope.submitted = false;
	$scope.isValid = true;

	$('input').bind('keyup', function() { $scope.$digest(); });
	
	function checkValid() {
		return $('#textinput').val().trim() && $('#email').val().trim() && $('#NuovaParola').val().trim() && $('#Lingua').val().trim() && $('#Significato').val().trim();
	};
	
	$scope.submit = function() {
		if ($scope.submitText === $rootScope.languageMap.formSubmit[$rootScope.languageSel] && checkValid()) {
			$scope.isValid = true;
			$scope.submitText = $rootScope.languageMap.formWait[$rootScope.languageSel];
			$scope.submitted = true;
			var data = {
				name: $('#textinput').val(),
				email: $('#email').val(),
				term: $('#NuovaParola').val(),
				language: $('#Lingua').val(),
				text: $('#Significato').val(),
			};
			$http({
				method: 'POST',
				url: 'http://localhost/itaconnect/CollectData.aspx',
				data: $.param(data),
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
				})
			.success(function() {
				$location.path('confirm/' + encodeURIComponent($scope.name) + '/' + encodeURIComponent($scope.term) + '/' + encodeURIComponent($scope.language))
			})
			.finally( function() {
				$scope.submitText = $rootScope.languageMap.formSubmit[$rootScope.languageSel];
			});
		}
		else {
			$scope.isValid = false;
		}
	};
	
	$scope.cancel = function() {
		$scope.name = '';
		$scope.email = '';
		$scope.term = '';
		$scope.language = '';
		$scope.text = '';
	};
	  
});

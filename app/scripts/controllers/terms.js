/*global $:false */
'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:TermsCtrl
 * @description
 * # TermsCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('TermsCtrl', function ($scope, $routeParams, engine) {
	  $scope.canShow = false;
	  function wait() {
		  if (!engine.languages || !engine.languages.length || !engine.terms || !engine.terms.length) {
    		  console.log ('waiting terms');
			  setTimeout(wait, 10);
		  }
		  else {
			$scope.language = $routeParams.language;
			$scope.search = $routeParams.search;
			$scope.terms = engine.getFilteredTerms($scope.language, $scope.search);
			
			$scope.languageName = engine.getLanguageName($scope.language);

			$scope.startWith = function(actual, expected) {
				var lowerStr = (actual + '').toLowerCase();
				return lowerStr.indexOf(expected.toLowerCase()) === 0;
			};
			
			$scope.canShow = true;
		  }
	  };
	  
	  $('body').unbind('keyup');
	  $('body').bind('keyup', function() {  if (!$scope.search) { $scope.search = {}; } $scope.search.termIta = $('#search').val().toString(); $scope.$digest(); } );
	  
	  wait();
  });

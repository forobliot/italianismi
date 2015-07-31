'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:CardCtrl
 * @description
 * # CardCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
  .controller('CardCtrl', function ($scope, $routeParams, $window, engine) {
	$scope.language = $routeParams.language;
  	$scope.search = $routeParams.search;

  	$scope.terms = engine.getFilteredTerms($scope.language, $scope.search);

	$window.count = $scope.terms.length;

  	angular.forEach($scope.terms, function(term, index) {
		if ($scope.language) {
			angular.forEach(term.languages, function(language, index) {
				if (language.name == $scope.language) {
					term.languageIndex = index;
				}
			});
		}
  		if (term.termIta === $routeParams.term) {
  			$scope.index = index;
			$window.index = index;
  		}
  	});
	
	$scope.changeLanguage = function(dir, term) {
		var newIndex = term.languageIndex + dir;
		if (newIndex >= term.languages.length) {
			newIndex = 0;
		}
		if (newIndex < 0) {
			newIndex = term.languages.length - 1;
		}
		term.languageIndex = newIndex;
	}
  });

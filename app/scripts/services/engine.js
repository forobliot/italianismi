'use strict';

/**
 * @ngdoc service
 * @name italianismiApp.engine
 * @description
 * # engine
 * Service in the italianismiApp.
 */
angular.module('italianismiApp')
  .service('engine', function ($http, $filter) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var that = this;

    this.termsPromise = $http.get('/json/terms.json').success(function(data) {
    	that.terms = data;
    });

    this.languagesPromise = $http.get('/json/languages.json').success(function(data) {
    	that.languages = data;
    });

    this.getFilteredTerms = function(language, search) {
    	return $filter('filter')(this.terms, function(value) {
    		var found = false;

    		if (language) {
	    		angular.forEach(value.languages, function(_language) {
	    			if (_language.name === language) {
	    				found = true;
	    			}
	    		});
	    	}
	    	else
	    	{
    			found = true;
	    	}

	    	if (found) {
	    		if (search) {
	    			found = value.termIta.indexOf(search) >= 0;
	    		}
	    	}

    		return found;
    	});
    };	
	
	this.getTerm = function(termStr) {
		var retTerm = null;
		angular.forEach(this.terms, function(term) {
			if (term.termIta === termStr) {
				retTerm = term;
			}
		});
		return retTerm;
	};

  });

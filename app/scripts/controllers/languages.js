'use strict';

/**
 * @ngdoc function
 * @name italianismiApp.controller:LanguagesCtrl
 * @description
 * # LanguagesCtrl
 * Controller of the italianismiApp
 */
angular.module('italianismiApp')
	.controller('LanguagesCtrl', function ($scope, $routeParams, engine) {
		$scope.languages = engine.languages;
		$scope.search = $routeParams.search;

		if ($routeParams.term) {
			$scope.term = engine.getTerm($routeParams.term);
		}
		
		$scope.hasLanguage = function(language) {
			if ($scope.term) {
				var found = false;
				angular.forEach($scope.term.languages, function(l) {
					if (l.name === language) {
						found = true;
					}
				});
				return found;
			}
			else {
				return false;
			}
		};
		
		var areas = [ {	'id': 'IT',	'showAsSelected': true } ];
		
		if ($scope.term) {
			// try to build areas
			angular.forEach($scope.term.languages, function(language) {
				var l = null;
				angular.forEach($scope.languages, function(lItem) {
					if (lItem.name === language.name) {
						l = lItem;
					}
				});
				if (l && l.countries) {
					for (var i = 0; i < l.countries.length; i++) {
						areas.push({ 'id': l.countries[i], 'showAsSelected': true });
					}
				}
			});
		}
		
		console.log(areas);
		
		var initMap = function() {
			// http://www.amcharts.com/visited_countries/ qui trovi l'esempio per la selezione dei paesi semplice
			// http://www.amcharts.com/demos/map-with-curved-lines/
			var map = AmCharts.makeChart('mapdiv',{
				type: 'map',
				theme: 'dark',
				//pathToImages : "http://cdn.amcharts.com/lib/3/images/",
				panEventsEnabled : true,
				backgroundColor : '#fff',
				backgroundAlpha : 0,
				dragMap: false,
				zoomControl: {
					panControlEnabled : false,
					zoomControlEnabled : false
				},
				dataProvider : {
					map : 'worldHigh',
					getAreasFromMap : true,
					lines: [{
						latitudes: [45.4636, 50.4422],
						longitudes: [9.1881, 30.5367]
					}, {
						latitudes: [45.4636, 46.9480],
						longitudes: [9.1881, 7.4481]
					}, {
						latitudes: [45.4636, 59.3328],
						longitudes: [9.1881, 18.0645]
					}, {
						latitudes: [45.4636, 40.4167],
						longitudes: [9.1881, -3.7033]
					}, {
						latitudes: [45.4636, 46.0514],
						longitudes: [9.1881, 14.5060]
					}, {
						latitudes: [45.4636, 48.2116],
						longitudes: [9.1881, 17.1547]
					}, {
						latitudes: [45.4636, 44.8048],
						longitudes: [9.1881, 20.4781]
					}, {
						latitudes: [45.4636, 55.7558],
						longitudes: [9.1881, 37.6176]
					}, {
						latitudes: [45.4636, 38.7072],
						longitudes: [9.1881, -9.1355]
					}, {
						latitudes: [45.4636, 54.6896],
						longitudes: [9.1881, 25.2799]
					}, {
						latitudes: [45.4636, 64.1353],
						longitudes: [9.1881, -21.8952]
					}, {
						latitudes: [45.4636, 40.4300],
						longitudes: [9.1881, -74.0000]
					}],
					areas : areas
				},
				areasSettings : {
					  autoZoom : false,
					  color : '#c3c3c2',
					  colorSolid : '#db1933',
					  selectedColor : '#db1933',
					  outlineColor : '#f4f4f3',
					  rollOverOutlineColor : '#f4f4f3',
					  balloonText: ''
				},
				linesSettings: {
					arc: -0.7, // this makes lines curved. Use value from -1 to 1
					arrow: 'end',
					color: '#CC0000',
					alpha: 0.4,
					arrowAlpha: 1,
					arrowSize: 4
				}
			});
		};
		
		setTimeout(initMap, 100);
	});
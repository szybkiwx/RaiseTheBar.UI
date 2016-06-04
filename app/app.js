'use strict';

// Declare app level module which depends on views, and components
angular.module('RaiseTheBar', [
  'ngRoute',
  'RaiseTheBar.places',
  'RaiseTheBar.places.places-factory',
  'restangular'
]).
config(['$locationProvider', '$routeProvider', 'RestangularProvider', function($locationProvider, $routeProvider, RestangularProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/places'});
  RestangularProvider.setBaseUrl('http://localhost:32056/');
 }]);

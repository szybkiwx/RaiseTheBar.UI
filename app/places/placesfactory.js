'use strict';

angular.module('RaiseTheBar.places.places-factory', [])

.factory('placesfactory', ['Restangular', function(Restangular) {
  var service = Restangular.all("bars");
  return service;
}]);

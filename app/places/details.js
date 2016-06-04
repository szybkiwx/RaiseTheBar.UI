'use strict';

angular.module('RaiseTheBar.places.details', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/placedetails/:id', {
    templateUrl: 'places/details.html',
    controller: 'DetailsCtrl'
  });
}])

.controller('DetailsCtrl',  ['$scope', '$routeParams', 'placesfactory', function($scope, $routeParams, placesfactory) {
    placesfactory.get($routeParams.id).then(function(result) {
      alert(result.ID)
    });

}]);

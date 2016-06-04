'use strict';

angular.module('RaiseTheBar.places', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/places', {
    templateUrl: 'places/places.html',
    controller: 'PlacesCtrl'
  });
}])

.controller('PlacesCtrl',  ['$scope', 'placesfactory', function($scope, placesfactory) {
    var lat = 50.061713;
    var lon = 19.937338;
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(lat, lon),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    placesfactory.getList().then(function(results) {
        $scope.places = results;
        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        $scope.markers = _.map(results, function(placeInfo) {
          var marker = new google.maps.Marker({
              map: $scope.map,
              position: new google.maps.LatLng(placeInfo.Value.Location.Lat, placeInfo.Value.Location.Lon),
              title: placeInfo.Value.Name
          });
          marker.content = '<div class="infoWindowContent">' + placeInfo.Value.Address + '</div>';

          google.maps.event.addListener(marker, 'click', function(){
              infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
              infoWindow.open($scope.map, marker);
          });
          return marker;
        });
    });


    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }


}]);

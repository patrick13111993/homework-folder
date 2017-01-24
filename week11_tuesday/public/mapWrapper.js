var MapWrapper = function (container, coords, zoom) {
  var container = container;
  this.googleMap = new google.maps.Map(container, {
    center: coords, 
    zoom: zoom
  });
}

MapWrapper.prototype = {
  addMarker: function (coords) {
    var infowindow = new google.maps.InfoWindow({
      content: "oi welcome to straya mate"
    });
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    });
    marker.addListener('click', function() {
      infowindow.open(this.googleMap, marker);
    }.bind(this));
  },
  addClickEvent: function () {
    google.maps.event.addListener(this.googleMap, "click", function(event) {
      var latLong = {lat: event.latLng.lat(), lng: event.latLng.lng()};
      this.addMarker(latLong);
      console.log(event.latLng.lng());
      console.log(event.latLng.lat());
    }.bind(this));
  },
  setCenter: function (coords) {
    this.googleMap.setCenter(coords);
  }
}
App = Ember.Application.create({
  rootElement: "#main"
});
App.deferReadiness();

App.Router.map(function(){
  this.resource("places", function(){
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo("places");
  }
});

App.PlacesController = Ember.ArrayController.extend({
  zoom: 4,
  center: L.latLng(40.714, -74.000),
  content: [
    { location: L.latLng(40.714, -74.000) },
    { location: L.latLng(45.714, -73.000) },
    { location: L.latLng(43.714, -72.000) }
  ]
});

App.MarkerCollectionLayer = EmberLeaflet.MarkerCollectionLayer.extend({
  contentBinding: "controller"
});

App.GoogleMapLayer = EmberLeaflet.Layer.extend({
  _newLayer: function() {
    return new L.Google('ROADMAP');
  }
});

App.MapView = EmberLeaflet.MapView.extend({
  childLayers: [
    App.GoogleMapLayer,
    App.MarkerCollectionLayer
  ]
});
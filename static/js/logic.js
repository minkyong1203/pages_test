var newYorkCoords = [40.73, -74.0059];
var mapZoomLevel = 12;

var myMap = L.map("map-id", {
  center: newYorkCoords,
  zoom: mapZoomLevel
});

// Create the createMap function.
function createMap (bikeStations) {}

  // Create the tile layer that will be the background of our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


  // Create a baseMaps object to hold the lightmap layer.
var baseMaps = {
  "street map": streemap
}; 

  // Create an overlayMaps object to hold the bikeStations layer.
overlayMaps = {
  "Bike Stations": bikeStations
};

  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.
function createMarkers (response) {}
  // Pull the "stations" property from response.data.
  var stations = response.data.stations;
  // Initialize an array to hold the bike markers.
  var bikeMarkers = [];
  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.
  // for (i=0; i < stations.length; i++) {
  //   var marker = stations[i];
  //   L.marker()
  // }
    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(data => (data) {
});
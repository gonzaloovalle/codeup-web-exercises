"use strict"

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
    center: [-98.4911, 29.4243], // starting position [lng, lat]
    zoom: 10 // starting zoom
});

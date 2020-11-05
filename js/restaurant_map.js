mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
    center: [-98.5347, 29.5567], // starting position [lng, lat]
    zoom: 10 // starting zoom
});


var markerOptions = {
    color: "#FF0000",
};


// geocode("3330 Culebra Rd, San Antonio, TX 78228", mapboxToken).then(function(result) {
//     console.log(result);
//     map.setZoom(10);
//
//     var marker = new mapboxgl.Marker(markerOptions)
//         .setLngLat(result)
//         .addTo(map)
//         .setPopup(new mapboxgl.Popup().setHTML("<p>La Sorrentina</p>"));
//
// });
//
// geocode("700 E Sonterra Blvd #1117, San Antonio, TX 78258", mapboxToken).then(function(result) {
//     console.log(result);
//     map.setZoom(10);
//
//     var marker = new mapboxgl.Marker(markerOptions)
//         .setLngLat(result)
//         .addTo(map)
//         .setPopup(new mapboxgl.Popup().setHTML("<p>Smashin Crab</p>"));
//
// });
//
// geocode("4230 McCullough Ave #2, San Antonio, TX 78212", mapboxToken).then(function(result) {
//     console.log(result);
//     map.setZoom(10);
//
//     var marker = new mapboxgl.Marker(markerOptions)
//         .setLngLat(result)
//         .addTo(map)
//         .setPopup(new mapboxgl.Popup().setHTML("<p>Pho Kim Long</p>"));
//
// });



var restArray = [
    {
        address: "3330 Culebra Rd, San Antonio, TX 78228",
        popupHTML: "<p>La Sorrentina\n</p>"
    },
    {
        address: "700 E Sonterra Blvd #1117, San Antonio, TX 78258",
        popupHTML: "<p>Smashin Crab\n</p>"
    },
    {
        address: "4230 McCullough Ave #2, San Antonio, TX 78212",
        popupHTML: "<p>Pho Kim Long\n</p>"
    }
]

restArray.forEach(function (rest) {
    console.log(rest);
    geocode(rest.address, mapboxToken).then(function(coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(rest.popupHTML);

        var marker = new mapboxgl.Marker(markerOptions)
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map);
    });
});
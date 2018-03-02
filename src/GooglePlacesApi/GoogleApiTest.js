var map;
var infowindow;
var pyrmont = {lat: 44.938, lng: -93.171};

var service = new google.maps.places.PlacesService(document.createElement('div'));
service.nearbySearch({
    location: pyrmont,
    radius: 500,
    type: ['store']
}, callback);


function initMap() {
    var pyrmont = {lat: 44.938, lng: -93.171};

           map = new google.maps.Map(document.getElementById('map'), {
               center: pyrmont,
               zoom: 15
           });

           infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch({
        location: pyrmont,
        radius: 500,
        type: ['store']
    }, callback);
}

function callback(results, status) {
    var solution = [];
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
            //document.write(results[i]);
            //alert(results[i].name + " " + results[i].types + " " + results[i].rating);
            solution[i] = [results[i].name + " " + results[i].types + " " + results[i].rating];
        }
        alert(String(solution));
        console.log(solution)
    }
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });
}
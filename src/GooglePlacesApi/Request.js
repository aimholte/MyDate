var service;

function initialize(latitude, longittude, radiusNum, typeArray) {
    var location = new google.maps.LatLng(latitude, longittude);

    var request = {
        location: location,
        radius: radiusNum,
        types: typeArray
    };

    var service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, callback);


}

function createRequest(googleLocation, radiusString, typeArray) {
    var request = {
        location: googleLocation,
        radius: radiusString,
        types: typeArray
    };

    return request;
}

function callback(results, status) {
    var solution = [];
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            //createMarker(results[i]);
            //document.write(results[i]);
            //alert(results[i].name + " " + results[i].types + " " + results[i].rating);
            solution[i] = [results[i]];
            console.log(results[i].name)
        }
        alert(String(solution));

    }
}




var request = {
    location: new google.maps.LatLng(52.48, -1.89),
    radius: '500',
    types: ['store']
};

var container = document.getElementById('results');

var service = new google.maps.places.PlacesService(container);
service.nearbySearch(request, callback);

function callback(results, status) {

    if (status == google.maps.places.PlacesServiceStatus.OK) {

        for (var i = 0; i < results.length; i++) {

            container.innerHTML += results[i].name + '<br />';
        }
    }
}
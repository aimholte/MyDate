
     src="JsonJavaTest.js";
     src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk&libraries=places&callback=initMap";


     name="viewport";
     content="initial-scale=1.0, user-scalable=no";

                // This example requires the Places library. Include the libraries=places
                // parameter when you first load the API. For example:
                // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

                let map;
                let infowindow;


     function initMap() {

         let pyrmont = {lat: 41.263, lng: -95.998};
                    map = new google.maps.Map(document.getElementById('map'), {
                    center: pyrmont,
                    zoom: 15
                    });

                    infowindow = new google.maps.InfoWindow();
                    let service = new google.maps.places.PlacesService(map);
                    service.nearbySearch({
                    location: pyrmont,
                    radius: 1000,
                    //type: ['resturaunt']
                    }, callback);
                }

                function callback(results, status) {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (let i = 0; i < results.length; i++) {
                        let place=(results[i]);
                        let plee=new placeplace(place.name, place.types);
                        plee.alerter()

                     }
            }

//
//        function createMarker(place) {
//
//            let plee=new placeplace(place.name);
//            plee.alerter()
//
//            var placeLoc = place.geometry.location;
//            var marker = new google.maps.Marker({
//                map: map,
//                position: place.geometry.location
//            });
//
//            google.maps.event.addListener(marker, 'click', function() {
//                infowindow.setContent(place.name);
//                infowindow.open(map, this);

            }


     // id="map";


class Place{
    constructor(location, name, types, openNow, priceLevel, rating, reviews, url, vicinity, website) {
        this.location = location;
        this.name = name;
        this.types = types;
        this.openNow = openNow;
        this.priceLevel = priceLevel;
        this.rating = rating;
        this.reviews = reviews;
        this.url = url;
        this.vicinity = vicinity;
        this.website = website;
    }
}

function getLocation() {
    return this.location;
}

function getName() {
    return this.name;
}

function get getTypes() {
    return this.types;
}

function getOpenNow() {
    return this.openNow;
}

function getPriceLevel() {
    return this.priceLevel;
}

function getRating() {
    return this.rating;
}

function getReviews() {
    return this.reviews;
}

function getUrl() {
    return this.url;
}

function getVicinity() {
    return this.vicinity;
}

function getWebsite() {
    return this.website;
}

placeTest = new Place([-321.1, 19.2], "A cool place", ["dope_place", "cool_place"], true, 1, 5.0, [], "coolplace.com",
    "this place is close!", "coolplace.com");


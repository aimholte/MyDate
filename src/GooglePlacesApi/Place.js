

class Place{
    constructor(location, name, types, openNow, priceLevel, rating, reviews, url, vicinity, website) {
        this._types = types;
        this._openNow = openNow;
        this._priceLevel = priceLevel;
        this._rating = rating;
        this._reviews = reviews;
        this._url = url;
        this._vicinity = vicinity;
        this._website = website;
        this._location = location;
        this._name = name;
    }


    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get types() {
        return this._types;
    }

    set types(value) {
        this._types = value;
    }

    get openNow() {
        return this._openNow;
    }

    set openNow(value) {
        this._openNow = value;
    }

    get priceLevel() {
        return this._priceLevel;
    }

    set priceLevel(value) {
        this._priceLevel = value;
    }

    get rating() {
        return this._rating;
    }

    set rating(value) {
        this._rating = value;
    }

    get reviews() {
        return this._reviews;
    }

    set reviews(value) {
        this._reviews = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get vicinity() {
        return this._vicinity;
    }

    set vicinity(value) {
        this._vicinity = value;
    }

    get website() {
        return this._website;
    }

    set website(value) {
        this._website = value;
    }
}

var placeTest = new Place([-44.111, 44.22],"A Cool Place", ["restaurant", "hip_place"], true, 5, 5,
    ["This place is cool", "Cool this place is", "I head this place was cool", "I went there and it was cool",
        "This is a test"], "www.thecoolestplaceever.com", "This place is closeby!", "A really cool URL");



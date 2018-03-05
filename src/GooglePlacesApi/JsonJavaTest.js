
class placeplace{
    constructor( name, types){
        this.name=name;
        this.types =types;
    }

    alerter(){
        alert("Name: " + this.name + "\n" + "Types: "+ this.types);
    }

    toArray(array){
        array.push(this);
    }
}
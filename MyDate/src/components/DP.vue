<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id ="DatePicker">

    <!--Header-->
    <br>





    <!--<div class="columns">-->
    <!--Active-->
    <form action = "" method="post">
      <div class="row">
        <div class="column container  left">
          <h1>Date Categories</h1>
          <ul>

          <li>
            <div class="iconPadding">
              <input name="selector"  type="radio" id = "active" value="Active" v-model="category" v-on:click="setActive"/>
              <img class="icon" src="https://png.icons8.com/metro/1600/running-rabbit.png"/>
              <label for="active" class="writing">
                Active
              </label>
            </div>
            <div class="check"></div>
          </li>

            <li>
              <div class="iconPadding">
                <!--City-->
                <input name="selector" type="radio" id="city" value="City" v-model="category" v-on:click="setCity"/>
                <img class="icon" src="https://png.icons8.com/metro/1600/building.png"/>
                <label for="city" class="writing" >City
                </label>
              </div>
              <div class="check"></div>
              <div class="inside"></div>
            </li>

            <li>
              <div class="iconPadding">
                <!--SomethingNew-->

                <input name="selector" id="somethingNew" type="radio" value="Something New" v-model="category" v-on:click="setSomethingNew"/>
                <img class="icon" src="http://cdn.onlinewebfonts.com/svg/img_453906.png"/>

                <label for="somethingNew" class="writing">Something New
                </label>
              </div>
              <div class="check"></div>
              <div class="inside"></div>
            </li>

            <li>
              <div class="iconPadding">
                <!--Vintage-->
                <input id="vintage" type="radio" value="Vintage" v-model="category" v-on:click="setVintage">
                <img class="icon" src="https://image.flaticon.com/icons/png/512/57/57894.png"/>

                <label  for="vintage" class="writing">Vintage
                </label>
              </div>
              <div class="check"></div>
              <div class="inside"></div>
            </li>



          </ul>
        </div>
        <!--<span class="selection">You've Selected:</span>-->
        <!--<p class="centerup writing">Category: {{category}}</p>-->
        <!--<p class="centerup writing">Minimum Amount {{minAmount}}</p>-->
        <!--<p class="centerup writing">Maximum Amount: {{maxAmount}}</p>-->
        <!--<p class=" centerup writing">Maximum Distance: {{miles}} miles</p>-->




        <!--Spits out what categories you've selected-->




        <div class="column  borderLeft right">
          <!--<div class="centerdown">-->

          <!--</div>-->
          <br>
          <br>
          <br>

          <h1 class="centerTex centerHelp ">Select A Price</h1><br>
          <label class="centerup biggerFont centerHelp "> Max Spend:</label> <br>
          <select  class="centerup custom-select centerHelp center" v-model="maxAmount" v-on:click="setMaxBudget(); setMinimum()">
            <option class="centerup"  v-for="num in numbers">{{num}}</option>
          </select>
          <div>
            <br>

            <label class="centerup centerHelp biggerFont">Min Spend:</label><br>
            <select class="centerup centerHelp custom-select" v-model="minAmount" v-on:click="setMinBudget">
              <option class="centerup" v-for="num in minnumbers">{{num}}</option>
            </select>
          </div>

        </div>



        <div class=" column borderLeft  middle">
          <br>
          <br>
          <br>
          <!--Location Box-->

          <h1 class="centerdown"> Enter A Location To Search </h1>
          <input class="centerdown locationBar" type="text" id="txtPlaces" ref="autocomplete" placeholder="Enter a location" v-on:form.submit.prevent="setPosition"/>
          <br>
          <p class="center biggerFont">
            Or
          </p>
          <br>
          <button class="currentLocation" v-on:click.prevent="useCurrentLocation"> <b>Use Your Current Location</b></button>
          <br>
          <br>
          <div class="selectDistance">
            <h1>Miles Willing to Travel:</h1>
            <input type="range" min="1" max="30" value="15" class="slider" id="myRange" v-model="miles">
            <span class="centerup"><b>{{miles}} miles</b></span>
          </div>
          <br>
          <div>

          </div>


        </div>

      </div>
    </form>

    <datepage :categorytypes="categorytypes" :maxBudget="maxBudget"  :minBudget="minBudget" :latitude="latitude" :longitude="longitude" :radius="radius"></datepage>
  </div>
</template>

<script>


  import {bus} from "../main"
  import Datepage from "./DatePage.vue";
  import lodash from 'lodash';
  export default {
    components: {Datepage},
    name: "d-p",

    // Holds data for the dp page to access
    data(){
      return{
        props:{
          title:{
            type: String
          }
        },
        categories:"",
        category:"",

        types: ["Active", "City", "Vintage", "SomethingNew"],
        numbers: ["$", "$$", "$$$", "$$$$", "$$$$$"],
        minnumbers: ['$', '$$', '$$$'],
        desireAmount: "$",
        maxAmount:"$$$$",
        minAmount: "$",
        categorytypes: [],
        budget: 0,
        maxBudget: 4,
        minBudget: 0,
        latitude: 0,
        longitude: 0,
        miles: 15,
        radius: 24150
      }

    },
    methods: {

      setMinimum: _.debounce(function() {
        this.minnumbers = this.numbers.slice(0,this.maxBudget);
      },500),

      setMaxBudget: function() {
        this.maxBudget = this.maxAmount.length-1;
      },

      setMinBudget: function() {
        this.minBudget = this.minAmount.length-1;
      },

      setVintage: _.debounce(function() {
        this.categorytypes = ['shopping_mall','bar','movie_theater','bowling_alley', 'restaurant', 'cafe'];
        console.log(this.categorytypes);
      },0),

      setActive: _.debounce(function() {
        this.categorytypes = ['night_club', 'zoo', 'park', 'amusement_park', 'gym', 'restaurant', 'cafe'];
      },0),

      setSomethingNew: _.debounce(function() {
        this.categorytypes = ['spa', 'aquarium', 'bakery', 'book_store' , 'restaurant', 'cafe'];
      },0),

      setCity: _.debounce(function() {
        this.categorytypes = ['art_gallery', 'museum', 'casino', 'stadium', 'restaurant', 'cafe'];
      },0),

      setBudget: _.debounce(function() {
        this.budget = this.desireAmount.length-1;
      },0),

      useCurrentLocation: function() {
        alert('By pressing this button, you are giving permission for MyDate to use your current location to' +
          ' locate the best possible dates near you!');
        navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(this.latitude);
          console.log(this.longitude);
        });
      },

      setLocation: function () {
        navigator.geolocation.getCurrentPosition(position => {
          console.log(position.coords.latitude);
        });
      }

    },
    mounted() {
      this.autocomplete = new google.maps.places.Autocomplete(
        (this.$refs.autocomplete),
        {types: ['geocode']}
      );
      this.autocomplete.addListener('place_changed', () => {
        let place = this.autocomplete.getPlace();
        let ac = place.address_components;
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        let city = ac[2]["short_name"];

        console.log(`The user picked ${city} with the coordinates ${this.latitude}, ${this.longitude}`);
        alert(`You are now searching for dates in ${city}!`)
      });
    },


  }
</script>
<style>
  #DatePicker{
    color: #4F4E4C ;
    /*background: #4F4E4C ;*/
  /*background: radial-gradient(circle, #fd5e53,#4F4E4C 300px);*/
   /*background: radial-gradient(circle closest-side,#fd5e53,#4F4E4C);*/
    background: whitesmoke;
    zoom: 85%;
    font-family: mpact, Charcoal, sans-serif;
  }
  #checkboxes input{
    display: inline-block;
    margin-left: 10px;
  }
  #checkboxes label{
    display: inline-block ;
  }
</style>

<style >
  #DatePicker.centerTex{
    text-align: center;
  }

  #DatePicker{
    text-align: left;
  }

  #DatePicker h3{
    position: relative;
  }
  #DatePicker h2{
    position:static;
    top: 70px;
  }
  #DatePicker .NavUl{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  #DatePicker .Navli{
    display: inline-block;
    margin: 0 10px;
  }

  #DatePicker .columns {
    columns: 3;
    column-width: 200px;
    column-gap: 40px;
    height: 400px;
    font-size: 13px;
  }
  #DatePicker .column{
    float: left;
    padding: 10px;
    column-gap: 50px;
  }
  #DatePicker .left {
    width: 450px;
    height: 550px;
  }
  #DatePicker .right{
    width: 450px;
    height: 550px;
  }
  #DatePicker .middle{
    width: 450px;
    height: 550px;
  }
  #DatePicker .row{
    content: "";
    display: table;
    clear: both;
  }
  #DatePicker .icon{
    width: 75px;
    height: 75px;
  }
  #DatePicker .selection{
    font-size: 20px;
    font-weight: bold;
  }
  #DatePicker .writing{
    font-size: 24px;
    font-weight: bold;
  }
  #DatePicker ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  #DatePicker li{
    display: inline-block;
    margin: 0 10px;
  }
  #DatePicker a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }


  #DatePicker .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #222222;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }
  #DatePicker .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
  #DatePicker .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
  #DatePicker .iconPadding{
    padding: 15px 15px 15px 15px;
  }
  #DatePicker .biggerFont{
    font-size: 22px;
  }
  #DatePicker .center{
    display: inline-block;
    left: auto;
    right: auto;
    justify-content: center;
  }
  #DatePicker .middleColumnColor{
    background-color: whitesmoke;
    color: black;
  }
  .catBackG{
    background-image: url("https://thumbs.dreamstime.com/b/online-store-product-categories-icons-linear-monotone-vector-goods-gray-image-white-background-62391398.jpg");
  }
  #DatePicker input[type=radio]:checked ~ .check {
    border: 5px solid #fd5e53;
  }

  #DatePicker input[type=radio]:checked ~ .check::before{
    background: #fd5e53;
  }

  #DatePicker input[type=radio]:checked ~ label{
    color: #fd5e53;
  }

  #DatePicker .container ul{
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
  }
  #DatePicker ul li{
    color: #00004d;
    position: relative;
    float: left;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #333;
    text-align: left;
    padding-left:72px ;
  }
  #DatePicker ul li input[type=radio]{
    position: absolute;
    visibility: hidden;
  }

  #DatePicker ul li label{
    /*display: block;*/
    position: relative;
    font-weight: 300;
    font-size: 1.35em;
    height: 30px;
    z-index: 9;
    cursor: pointer;
    -webkit-transition: all 0.25s linear;
    padding-left: 10px;
  }

  #DatePicker ul li:hover label{
    color: #fd5e53;
  }

  #DatePicker ul li .check{
    display: block;
    position: absolute;
    border: 5px solid #00004d;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    top: 30px;
    left: 20px;
    z-index: 5;
    transition: border .25s linear;
    -webkit-transition: border .25s linear;
  }

  #DatePicker ul li:hover .check {
    border: 5px solid #fd5e53 ;
  }

  #DatePicker ul li .check::before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 100%;
    height: 15px;
    width: 15px;
    top: 5px;
    left: 5px;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }

  #DatePicker input[type=radio]:checked ~ .check {
    border: 5px solid #00004d;
  }

  #DatePicker input[type=radio]:checked ~ .check::before{
    background: #00004d;
  }

  #DatePicker input[type=radio]:checked ~ label{
    color: #fd5e53 ;
  }

  .signature {
    margin: 10px auto;
    padding: 10px 0;
    width: 100%;
  }

  #DatePicker .signature p{
    text-align: center;
    font-family: Helvetica, Arial, Sans-Serif;
    font-size: 0.85em;
    color: #fd5e53;
  }



  #DatePicker .signature a {
    color:yellow ;
    text-decoration: none;
    font-weight: bold;
  }
  #DatePicker .container{
    display: block;
    position: relative;
    margin: 40px auto;
    height: auto;
    width: 500px;
    padding: 20px;
  }
  .custom-select {
    position: relative;
    font-family: Arial;
    background-color: #fd5e53  ;
    width: 300px;
    height: 50px;
    font-size: 30px;


  }
  .custom-select select {
    display: none; /*hide original SELECT element:*/
  }
  .select-selected {
    background-color: #fd5e53;
  }
  /*style the arrow inside the select element:*/
  .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fd5e53 transparent transparent transparent;
  }
  /*point the arrow upwards when the select box is open (active):*/
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fd5e53 transparent;
    top: 7px;
  }
  /*style the items (options), including the selected item:*/
  .select-items div,.select-selected {
    color: #fd5e53;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
  }
  /*style items (options):*/
  .select-items {
    position: absolute;
    background-color: #fd5e53;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }
  /*hide the items when the select box is closed:*/
  .select-hide {
    display: none;
  }
  .select-items div:hover, .same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
  }
  #DatePicker input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    margin: 10.8px 0;
  }
  #DatePicker input[type=range]:focus {
    outline: none;
  }
  #DatePicker input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #00004d;
    border-radius: 8px;
    border: 0.2px solid #010101;
  }
  #DatePicker input[type=range]::-webkit-slider-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  #DatePicker input[type=range]:focus::-webkit-slider-runnable-track {
    background: #00008f;
  }
  #DatePicker input[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #00004d;
    border-radius: 8px;
    border: 0.2px solid #010101;
  }
  #DatePicker input[type=range]::-moz-range-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
  }
  #DatePicker input[type=range]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  #DatePicker input[type=range]::-ms-fill-lower {
    background: #00000b;
    border: 0.2px solid #010101;
    border-radius: 16px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  #DatePicker input[type=range]::-ms-fill-upper {
    background: #00004d;
    border: 0.2px solid #010101;
    border-radius: 16px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  #DatePicker input[type=range]::-ms-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
    height: 8.4px;
  }
  #DatePicker input[type=range]:focus::-ms-fill-lower {
    background: #00004d;
  }
  #DatePicker input[type=range]:focus::-ms-fill-upper {
    background: #00008f;
  }
  #DatePicker input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    margin: 10.8px 0;
  }
  #DatePicker input[type=range]:focus {
    outline: none;
  }
  #DatePicker input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #00004d;
    border-radius: 8px;
    border: 0.2px solid #010101;
  }
  #DatePicker input[type=range]::-webkit-slider-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  #DatePicker input[type=range]:focus::-webkit-slider-runnable-track {
    background: #00008f;
  }
  #DatePicker input[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #00004d;
    border-radius: 8px;
    border: 0.2px solid #010101;
  }
  #DatePicker input[type=range]::-moz-range-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
  }
  #DatePicker input[type=range]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  #DatePicker input[type=range]::-ms-fill-lower {
    background: #00000b;
    border: 0.2px solid #010101;
    border-radius: 16px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  #DatePicker input[type=range]::-ms-fill-upper {
    background: #00004d;
    border: 0.2px solid #010101;
    border-radius: 16px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  #DatePicker input[type=range]::-ms-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
    height: 8.4px;
  }
  #DatePicker input[type=range]:focus::-ms-fill-lower {
    background: #00004d;
  }
  #DatePicker input[type=range]:focus::-ms-fill-upper {
    background: #00008f;
  }
  #DatePicker input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    margin: 10.8px 0;
  }
  #DatePicker input[type=range]:focus {
    outline: none;
  }
  #DatePicker input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #00004d;
    border-radius: 8px;
    border: 0.2px solid #010101;
  }
  #DatePicker input[type=range]::-webkit-slider-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -11px;
  }
  #DatePicker input[type=range]:focus::-webkit-slider-runnable-track {
    background: #00008f;
  }
  #DatePicker input[type=range]::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #00004d;
    border-radius: 8px;
    border: 0.2px solid #010101;
  }
  #DatePicker input[type=range]::-moz-range-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
  }
  #DatePicker input[type=range]::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  #DatePicker input[type=range]::-ms-fill-lower {
    background: #00000b;
    border: 0.2px solid #010101;
    border-radius: 16px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  #DatePicker input[type=range]::-ms-fill-upper {
    background: #00004d;
    border: 0.2px solid #010101;
    border-radius: 16px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  #DatePicker input[type=range]::-ms-thumb {
    box-shadow: 4.1px 4.1px 2.7px #000000, 0px 0px 4.1px #0d0d0d;
    border: 1px solid #000000;
    height: 30px;
    width: 16px;
    border-radius: 10px;
    background: #fd5e53;
    cursor: pointer;
    height: 8.4px;
  }
  #DatePicker input[type=range]:focus::-ms-fill-lower {
    background: #00004d;
  }
  #DatePicker input[type=range]:focus::-ms-fill-upper {
    background: #00008f;
  }
  #DatePicker .locationBar {
    border: 5px solid #00004d;
    -webkit-box-shadow:
      inset 0 0 8px  rgba(0,0,0,0.1),
      0 0 16px rgba(0,0,0,0.1);
    -moz-box-shadow:
      inset 0 0 8px  rgba(0,0,0,0.1),
      0 0 16px rgba(0,0,0,0.1);
    box-shadow:
      inset 0 0 8px  rgba(0,0,0,0.1),
      0 0 16px rgba(0,0,0,0.1);
    padding: 15px;
    background: rgba(255,255,255,0.5);
    margin: 0 0 10px 0;
    width:300px;
  }
  .borderRight{
    border-right: 4px solid #00004d;

  }
  .borderLeft{
    border-left: 4px solid #00004d;
  }
  .centerHelp{
    margin-left: 100px;
  }



</style>

<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id ="DatePicker">
    <nav class="navBar">
      <!--Router links to home, about, and date picker page-->
      <div>
        <ul class="NavUl">
          <!--<img src="MDLogo.png" class="centerPic">-->

          <li class="Navli">  <router-link v-bind:to="'/'" exact="" tag="img" src="https://png.icons8.com/metro/1600/home.png"  >Home</router-link></li>
          <li><router-link v-bind:to="'/about'" exact="" tag="img" src="https://cdn1.iconfinder.com/data/icons/seo-icons-4/24/Idea-3-512.png">About</router-link></li>
          <li><router-link v-bind:to="'/DP'"  exact="" tag="img"src="https://png.icons8.com/windows/1600/hearts.png"></router-link></li>
        </ul>

      </div>

    </nav>
    <!--Header-->
    <br>





    <!--<div class="columns">-->
    <!--Active-->
    <form action = "" method="post">
      <div class="row">
        <div class="column left">
          <h1>Date Categories</h1>
          <div class="iconPadding">
            <img class="icon" src="https://png.icons8.com/metro/1600/running-rabbit.png"/>
            <label class="writing">
              Active
              <input  type="radio" id = "active" value="Active" v-model="category" v-on:click="setActive"/>
            </label>
          </div>
          <div class="iconPadding">
            <!--City-->
            <img class="icon" src="https://png.icons8.com/metro/1600/building.png"/>
            <label class="writing iconPadding" >City
              <input type="radio" id="city" value="City" v-model="category" v-on:click="setCity"/>
            </label>
          </div>
          <div class="iconPadding">
            <!--SomethingNew-->
            <img class="icon" src="http://cdn.onlinewebfonts.com/svg/img_453906.png"/>
            <label class="writing">Something New
              <input type="radio" value="Something New" v-model="category" v-on:click="setSomethingNew"/>
            </label>
          </div>
          <div class="iconPadding">
            <!--Vintage-->
            <img class="icon" src="https://image.flaticon.com/icons/png/512/57/57894.png"/>
            <label class="writing">Vintage
              <input type="radio" value="Vintage" v-model="category" v-on:click="setVintage">
            </label>
          </div>
        </div>
        <!--<span class="selection">You've Selected:</span>-->
        <!--<p class="centerup writing">Category: {{category}}</p>-->
        <!--<p class="centerup writing">Minimum Amount {{minAmount}}</p>-->
        <!--<p class="centerup writing">Maximum Amount: {{maxAmount}}</p>-->
        <!--<p class=" centerup writing">Maximum Distance: {{miles}} miles</p>-->




        <!--Spits out what categories you've selected-->




        <div class="column right">
          <div class="centerdown">

          </div>
          <h1 class="centerTex">Select A Price</h1>
          <label class="centerup biggerFont "> Select the Most You Would Want to Spend</label>
          <select  class="centerup center" v-model="maxAmount" v-on:click="setMaxBudget(); setMinimum()">
            <option class="centerup"  v-for="num in numbers">{{num}}</option>
          </select>
          <div>

            <label class="centerup biggerFont">Minimum You Want to Spend</label>
            <select class="centerup" v-model="minAmount" v-on:click="setMinBudget">
              <option class="centerup" v-for="num in minnumbers">{{num}}</option>
            </select>
          </div>

        </div>
        <div class=" column middle">
          <!--Location Box-->
          <h1 class="centerdown"> Enter A Location To Search </h1>
          <input class="centerdown" type="text" id="txtPlaces" ref="autocomplete" placeholder="Enter a location" v-on:form.submit.prevent="setPosition"/>
          <button class="currentLocation" v-on:click.prevent="useCurrentLocation"> <b>Use Your Current Location</b></button>
          <br>
          <br>
          <div class="selectDistance">
            <h1>Miles You Are Willing to Travel:</h1>
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
    color: whitesmoke ;
    background: #4F4E4C ;
    zoom: 85%;
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
  }
  #DatePicker .right{
    width: 450px;
  }
  #DatePicker .middle{
    width: 450px;
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
    font-size: 18px;
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
</style>

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



    <h2 class="centerTex">Date Categories</h2>

    <!--<div class="columns">-->
    <!--Active-->
    <form action = "" method="post">
      <div class="row">
        <div class="column left">
          <img class="icon" src="https://png.icons8.com/metro/1600/running-rabbit.png"/>
          <label class="writing">
            Active
            <input  type="radio" id = "active" value="Active" v-model="category" v-on:click="setActive"/>
          </label>
          <p class="writing">
            Feel like getting this first date moving!? <br>
            This categories has options like: <br>
            Hiking, Skydiving, and Surfing<br>
          </p>

          <!--City-->
          <img class="icon" src="https://png.icons8.com/metro/1600/building.png"/>
          <label class="writing" >City
            <input type="radio" id="city" value="City" v-model="category" v-on:click="setCity"/>
          </label>

          <br>
          <p class="writing">
            Want to show them what your city has to offer? <br>
            This category has options like:<br>
            Museums, Sporting Events, and Concerts<br>
          </p>

          <br>
          <span class="selection">You've Selected:</span>
          <p class="centerup writing">Category: {{category}}</p>
          <p class="centerup writing">Minimum Amount {{minAmount}}</p>
          <p class="centerup writing">Maximum Amount: {{maxAmount}}</p>
          <p class=" centerup writing">Maximum Distance: {{miles}} miles</p>


        </div>

        <div class="column middle">
          <!--SomethingNew-->
          <img class="icon" src="https://cdn3.iconfinder.com/data/icons/creative-and-idea/500/Idea-thinking-think-concept_13-512.png"/>
          <label class="writing">Something New
            <input type="radio" value="Something New" v-model="category" v-on:click="setSomethingNew"/>

          </label>

          <br>
          <p class="writing">
            Want to spice things up?! <br>
            This categories has options like: <br>
            Going to a Bookstore, Ghost town, and more<br>
          </p>



          <!--Vintage-->
          <img class="icon" src="https://cdn0.iconfinder.com/data/icons/music-and-multimedia/80/Music_multimedia-07-512.png"/>
          <label class="writing">Vintage
            <input type="radio" value="Vintage" v-model="category" v-on:click="setVintage">
          </label>


          <p class="writing">
            Want to get that nostalgic feel out of ya?! <br>
            This categories has options like: <br>
            Drive ins, Bowling, and more<br>
          </p>



          <!--Spits out what categories you've selected-->


        </div>

        <div class="column right">
          <div class="centerdown">

          </div>
          <h1 class="centerTex">Select A Price</h1>
          <label class="centerup"> Enter the Most You Would Want to Spend</label>
          <select  class="centerup" v-model="maxAmount" v-on:click="setMaxBudget(); setMinimum()">
            <option class="centerup"  v-for="num in numbers">{{num}}</option>
          </select>
          <p class="centerup writing">
            Maximum Amount:  {{maxAmount}}
          </p>
          <label class="centerup">Minimum You Want to Spend</label>
          <select class="centerup" v-model="minAmount" v-on:click="setMinBudget">
            <option class="centerup" v-for="num in minnumbers">{{num}}</option>
          </select>
          <p class="centerup writing">
            Minimum Amount: {{minAmount}}
          </p>
          <!--Location Box-->
          <h1 class="centerdown"> Enter a Location to Search </h1>
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
        this.categorytypes = ['mall','bar','movie_theater','bowling_alley', 'restaurant', 'cafe'];
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
  .centerTex{
    text-align: center;
  }
  .chillright{
    text-align: right;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .chillLeft{
    text-align: left;
  }
  .alltheright{
    text-align: left;
    display: block;
  }
  #DatePicker{
    text-align: left;
  }
  .image{
    width: 75px;
    height: 75px;
  }
  h3{
    position: relative;
  }
  h2{
    position:static;
    top: 70px;
  }
  .NavUl{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  .Navli{
    display: inline-block;
    margin: 0 10px;
  }
  p{}
  .columns {
    columns: 3;
    column-width: 200px;
    column-gap: 40px;
    height: 400px;
    font-size: 13px;
  }
  .column{
    float: left;
    padding: 10px;
    column-gap: 50px;
  }
  .left {
    width: 600px;
  }
  .right{
    width: 300px;
  }
  .middle{
    width: 350px;
  }
  .row{
    content: "";
    display: table;
    clear: both;
  }
  .icon{
    width: 75px;
    height: 75px;
  }
  .selection{
    font-size: 20px;
    font-weight: bold;
  }
  .writing{
    font-size: 18px;
  }
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  img{
    width: 75px;
    height: 75px;
  }
  .navBar{
    background: #fd5e53 ;
    padding: 14px 0;
    margin-bottom: 0px;
  }
  .slider {
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
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
  }
</style>

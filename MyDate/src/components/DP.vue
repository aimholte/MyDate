<template xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id ="DatePicker">
      <nav class="navBar">
        <!--Router links to home, about, and date picker page-->
        <div>
          <ul class="NavUl">
            <!--<img src="MDLogo.png" class="centerPic">-->

            <li class="Navli">  <router-link v-bind:to="'/'" exact="" tag="img" src="https://png.icons8.com/metro/1600/home.png"  >Home</router-link></li>
            <li class="Navli"><router-link v-bind:to="'/about'" exact="" tag="img" src="https://cdn1.iconfinder.com/data/icons/seo-icons-4/24/Idea-3-512.png">About</router-link></li>
            <li class="Navli"><router-link v-bind:to="'/DP'"  exact="" tag="img"src="https://png.icons8.com/windows/1600/hearts.png">DP</router-link></li>
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

        </div>

        <div class="column middle">
          <!--SomethingNew-->
          <!--<img class="icon" src="https://cdn3.iconfinder.com/data/icons/creative-and-idea/500/Idea-thinking-think-concept_13-512.png"/>-->
          <img class="icon" src="https://images.vexels.com/media/users/3/128092/isolated/preview/b93c119029c78b0106e34486e9c70f26-idea-hand-drawn-icon-by-vexels.png"/>
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
          <!--<img class="icon" src="https://cdn0.iconfinder.com/data/icons/music-and-multimedia/80/Music_multimedia-07-512.png"/>-->
          <img class="icon" src="https://image.flaticon.com/icons/png/512/57/57894.png"/>
          <label class="writing">Vintage
            <input type="radio" value="Vintage" v-model="category" v-on:click="setVintage">
          </label>


          <p class="writing">
            Want to get that nostalgic feel out of ya?! <br>
            This categories has options like: <br>
            Drive ins, Bowling, and more<br>
          </p>
          <span class="selection"> You've selected: {{ category }}</span>


          <!--Spits out what categories you've selected-->

        </div>

        <div class="column right">

          <h1 class="centerTex">Select A Price</h1>






          <!--Selection Box-->
          <label class="centerup"> How Much Would You like to spend</label>
          <select  class="centerup" v-model="desireAmount" v-on:click="setBudget">
            <option class="centerup"  v-for="num in numbers">{{num}}</option>

          </select>
          <p class="centerup writing">
            You want to spend:  {{desireAmount}}
          </p>

          <!--Location Box-->
          <h1 class="centerdown"> Enter a Location to Search </h1>
          <input class="centerdown" type="text" id="txtPlaces" ref="autocomplete" placeholder="Enter a location" v-on:form.submit.prevent="setPosition"/>
          <button class="currentLocation" v-on:click.prevent="useCurrentLocation"> <b>Use Your Current Location</b></button>






        </div>

      </div>
      </form>

      <datepage :categorytypes="categorytypes" :budget="budget" :latitude="latitude" :longitude="longitude"></datepage>
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

            types: ["Active", "City","Vintage","SomethingNew"],
            numbers: ["$","$$","$$$","$$$$", "$$$$$"],
            desireAmount: "$",
            categorytypes: [],
            budget: 0,
            latitude:0,
            longitude: 0
            }

      },
      methods: {

        setVintage: _.debounce(function() {
          this.categorytypes = ['mall','bar','movie_theater','bowling_alley', 'restaurant', 'cafe'];
          console.log(this.categorytypes);
        },3000),

        setActive: _.debounce(function() {
          this.categorytypes = ['night_club', 'zoo', 'park', 'amusement_park', 'gym', 'restaurant', 'cafe'];
        },3000),

        setSomethingNew: _.debounce(function() {
          this.categorytypes = ['spa', 'aquarium', 'bakery', 'book_store' , 'restaurant', 'cafe'];
        },3000),

        setCity: _.debounce(function() {
          this.categorytypes = ['art_gallery', 'museum', 'casino', 'stadium', 'restaurant', 'cafe'];
        },3000),

        setBudget: _.debounce(function() {
          this.budget = this.desireAmount.length-1;
        },3000),

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
        let city = ac[0]["short_name"];

        console.log(`The user picked ${city} with the coordinates ${this.latitude}, ${this.longitude}`);
      });
    }


    }
</script>
<style>
  #DatePicker{
    color: whitesmoke ;
    background: #398EA1 ;
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
  }
  .left, .right {
    width: 350px;
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



</style>

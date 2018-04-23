<template xmlns:v-on="http://www.w3.org/1999/xhtml">

  <div id="DatePage">
    <!--<div>-->
      <!--<div class="sk-wave">-->
      <!--<div class="sk-rect sk-rect1"></div>-->
      <!--<div class="sk-rect sk-rect2"></div>-->
      <!--<div class="sk-rect sk-rect3"></div>-->
      <!--<div class="sk-rect sk-rect4"></div>-->
      <!--<div class="sk-rect sk-rect5"></div>-->
    <!--</div>-->
    <br/>
    <nav class="secondPage">
      <br>
      <h1 class="center titles"  >
        Your Perfect Date
      </h1>
    </nav>

    <!--Header-->
    <h1 class="center">
      Your Dates
    </h1>

    <!--Button to generate Dates-->
    <h1>Press this one first to Search for Dates <button class="middle mid" v-on:click="getResult()">Search For Results!</button></h1>
      <div v-if="isSearching">
        <div class="loader"></div>
      </div>
    <br>
    <h1>
      Then press this one, when it's finished, to display your dates
      <button class="middle mid" v-on:click="shuffling(); doubleCheck(); sorter(); initial();">Display Your Dates!</button>

    </h1>

    <div v-if='allPlaceShown'>
      <label>All places have been shown.</label>
    </div>

    <div v-if='allMealsShown'>
      <label>All meals have been shown.</label>
    </div>

    <div class="row">
      <!--Date Box 1-->
      <div class="left column">
        <h2  v-if="ButtonsVisible">
          Date 1
        </h2>
        <!--Date Opener-->
        <p>
          {{Date1Open.placeSearch.name}}
          <button v-if="ButtonsVisible" v-on:click="NewDate1Open()">Find New Place</button>
        </p>
        <!--Date Meal-->
        <p>
          {{meal1.placeSearch.name}}
          <button v-if="ButtonsVisible" v-on:click="NewMeal1()">Find New Meal</button>
        </p>
        <!--Date Closer-->
        <p>
          {{Date1Close.placeSearch.name}}
          <button v-if="ButtonsVisible" v-on:click="NewDate1Close()">Find New Place</button>
        </p>
      </div>
      <!--Date Box 2-->
      <div  class="middle column colorDateTwo ">
        <h2  v-if="ButtonsVisible">
          Date 2
        </h2>
        <!--Date Opener-->
        <p>
          {{Date2Open.name}}
          <button v-if="ButtonsVisible" v-on:click="NewDate2Open()">Find New Place</button>
        </p>
        <!--Date Meal-->
        <p>
          {{meal2.name}}
          <button  v-if="ButtonsVisible" v-on:click="NewMeal2()">Find New Meal</button>
        </p>
        <!--Date Closer-->
        <p>
          {{Date2Close.name}}
          <button v-if="ButtonsVisible" v-on:click="NewDate2Close()">Find New Place</button>
          <!--Date Box 1-->
        </p>
      </div>

      <!--Date Box 3-->
      <div class="right column ">
        <h2  v-if="ButtonsVisible">
          Date 3
        </h2>
        <!--Date Opener-->
        <p>
          {{Date3Open.name}}
          <button  v-if="ButtonsVisible" v-on:click="NewDate3Open()">Find New Place</button>
        </p>
        <!--Date Meal-->
        <p>
          {{meal3.name}}
          <button  v-if="ButtonsVisible" v-on:click="NewMeal3()">Find New Meal</button>
        </p>
        <!--Date Closer-->
        <p>
          {{Date3Close.name}}
          <button  v-if="ButtonsVisible" v-on:click="NewDate3Close()">Find New Place</button>
        </p>
      </div>
    </div>
  </div>










</template>

<script>
  import lodash from 'lodash';
  import axios from 'axios';

  const API_KEY = "AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk";
  const PROXY_ADDRESS = "https://cors.now.sh/";
  const PHOTO_LIBRARY = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=";
  const GOOGLE_PLACES_ADDRESS = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
  const GOOGLE_PLACES_DETAIL_SEARCH = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";
  const PHOTO_MAX_WITH = 500;

  export default {
    name: "datepage",
    props: {
      categorytypes: {
        type: Array,
        required: true
      },
      maxBudget: {
        type: Number,
        required: true
      },
      minBudget: {
        type: Number,
        required: true
      },
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
      },
      radius: {
        type: Number,
        required: true
      }
    },
    data(){
      return{
        Randomqueue: [],
        ButtonsVisible: false,
        Mealqueue : [],
        Placequeue : [],
        allPlaceShown: false,
        allMealsShown: false,
        n:0,
        meal1 : "",
        meal2:"",
        meal3:"",
        Date1Open:"",
        Date2Open:"",
        Date3Open:"",
        Date1Close:"",
        Date2Close:"",
        Date3Close:"",
        msg: 'Welcome to Your Vue.js App',
        color:"red",
        results:"",
        parameters: {'maxBudget':4, 'minBudget':0 ,'categories':[], 'latitude':0, 'longitude':0, 'radius':24150},
        searchCompleted: false,


        // variables
        SP: "",
        numbers: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,75,80,85,90,95,100],
        types: ["Active","City","Something New","Vintage"],
        selectedType: "",
        isSearching: false
      }
    },
    methods:{

      NewDate1Open: function(){
        this.Placequeue.push(this.Date1Open);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date1Open=newPlace;
      },

      NewMeal1: function(){
        this.Mealqueue.push(this.meal1);
        let newPlace=this.Mealqueue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allMealsShown=true;
        }
        return this.meal1=newPlace;
      },

      NewDate1Close: function(){
        this.Placequeue.push(this.Date1Close);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date1Close=newPlace;
      },

      NewDate2Open: function(){
        this.Placequeue.push(this.Date2Open);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date2Open=newPlace;


      },

      NewMeal2: function(){
        this.Mealqueue.push(this.meal2);
        let newPlace=this.Mealqueue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allMealsShown=true;
        }
        return this.meal2=newPlace;
      },
      NewDate2Close: function(){
        this.Placequeue.push(this.Date2Close);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date2Close=newPlace;


      },

      NewDate3Open: function(){
        this.Placequeue.push(this.Date3Open);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown=true;
        }
        return this.Date3Open=newPlace;


      },
      NewMeal3: function(){
        this.Mealqueue.push(this.meal3);
        let newPlace=this.Mealqueue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allMealsShown=true;
        }
        return this.meal3=newPlace;


      },
      NewDate3Close: function(){
        this.Placequeue.push(this.Date3Close);
        let newPlace=this.Placequeue.shift();
        if (newPlace.showed=="false"){
          newPlace.showed="true";
        }
        else {
          this.allPlaceShown='true' ;
        }
        return this.Date3Close=newPlace;


      },

      sorter: function() {
        for (let i = 0; i < this.Randomqueue.length; i++) {
          let place = this.Randomqueue[i];
          if (place.placeSearch.types.includes("restaurant") || place.placeSearch.types.includes("cafe")) {
            this.Mealqueue.push(place);
            place["showed"] = "false";

          }
          else {
            this.Placequeue.push(place);
            place["showed"] = "false";
          }
        }
        this.ButtonsVisible='true';

      },
      initial: function () {
        this.meal1=this.Mealqueue.shift();
        this.meal2=this.Mealqueue.shift();
        this.meal3=this.Mealqueue.shift();

        this.Date1Open=this.Placequeue.shift();
        this.Date2Open=this.Placequeue.shift();
        this.Date3Open=this.Placequeue.shift();
        this.Date1Close=this.Placequeue.shift();
        this.Date2Close=this.Placequeue.shift();
        this.Date3Close=this.Placequeue.shift();


        this.meal1.showed="true";
        this.meal2.showed="true";
        this.meal3.showed="true";

        this.Date1Open.showed="true";
        this.Date2Open.showed="true";
        this.Date3Open.showed="true";
        this.Date1Close.showed="true";
        this.Date2Close.showed="true";
        this.Date3Close.showed="true";


      },
      shuffle: function(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      },
      shuffling: function(array){
        if(this.searchCompleted == true) {
          this.Randomqueue=this.results
          this.Randomqueue=this.shuffle(this.Randomqueue);
        }
      },
      doubleCheck: function(){

        let newQueue = [];
        let idlist = [];

        for (let i = 0; i < this.Randomqueue.length;  i++){
          let id = this.Randomqueue[i].placeSearch.name;
          console.log(id);
          if (idlist.includes(id)){
            let joshBeard = "cool";
            console.log("False");
          }
          else{
            newQueue.push(this.Randomqueue[i]);
            idlist.push(id);
            console.log("True");
          }

        }
        this.Randomqueue = newQueue;
      },
      filler: function(){

        console.log("Hello Humans");
        this.Randomqueue=this.results;
        console.log("Goodbye Humans");

      },

      queueFunctions: function(array){
        shuffling(array);
        sorter;
        this.initial;
      },
      async getResult() {
        this.isSearching = true;
        if(this.searchCompleted == true) {
          this.searchCompleted = false;
        }
        function formatResultDetailSearch(result) {
          var r = {};
          r['phoneNumber'] = result.formatted_phone_number;
          r['hours'] = result.opening_hours.weekday_text;
          r['reviews'] = result.reviews;
          r['website'] = result.website;
          r['googleurl'] = result.url;
          r['photos'] = result.photos;
          r['name'] = result.name;
          r['id'] = result.place_id;
          return r;
        }

        function formatResult(result) {
          var r = {};
          r['id'] = result.place_id;
          r['name'] = result.name;
          r['icon'] = result.icon;
          r['rating'] = result.rating;
          r['address'] = result.vicinity;
          r['types'] = result.types;
          if (result.opening_hours !== undefined) {
            r['open_now'] = result['opening_hours'].open_now;
          }
          else {
            r['open_now'] = true;
          }
          return r;
        }

        async function getDetails(data) {
          let r = [];
          for (let i = 0; i < data.length; i++) {
            let json = await axios.get(PROXY_ADDRESS + GOOGLE_PLACES_DETAIL_SEARCH + data[i].place_id + '&key=' + API_KEY);
            r[i] = json.data.result;
          }
          return r;
        }


        for (let h = 0; h < this.parameters.categories.length; h++) {
          let searchstring = "";
          console.log(this.parameters.categories[h]);

          if((this.parameters.categories[h] == "restaurant") == true) {
            console.log('using price parameter');
            searchstring = PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + this.latitude + ',' + this.longitude + "&radius=" + this.parameters.radius + "&type=" + this.parameters.categories[h] + "&minprice=" + (this.parameters.minBudget) + "&maxprice=" + this.parameters.maxBudget + "&key=" + API_KEY;
          }
          else {
            console.log('not using price parameter');
            searchstring = PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + this.latitude + ',' + this.longitude + "&radius=" + this.parameters.radius + "&type=" + this.parameters.categories[h] + "&key=" + API_KEY;
          }
          console.log(searchstring);
          let raw = await axios.get(searchstring);
          console.log(raw.data.status);
          if (raw.data.status !== 'ZERO_RESULTS') {
            let data = raw.data.results;
            let cleandata = [];
            for (let j = 0; j < data.length; j++) {
              let dict = {};
              let detail = await axios.get(PROXY_ADDRESS + GOOGLE_PLACES_DETAIL_SEARCH + data[j].place_id + "&key=" + API_KEY);
              let detaildata = detail.data.result;
              dict['placeSearch'] = formatResult(data[j]);
              dict['placeDetails'] = detaildata;
              if(cleandata.includes(Object(dict)) == false) {
                cleandata[j] = dict;
                console.log(cleandata[j]);
              }
              else{
                console.log('duplicate found');
              }
            }

            if (Array.isArray(this.results) == true) {
              for (let o = 0; o < cleandata.length; o++) {
                if(this.results.includes(Object(cleandata[o])) == false) {
                  this.results.push(cleandata[o]);
                }
                else {
                  console.log('duplicate found');
                }
              }
            }
            else {
              this.results = cleandata;
            }
          }
        }
        this.searchCompleted  = true;
        this.isSearching = false;
      }
    },
    watch: {
      budget:function() {
        console.log('data updated.');
        console.log(this.budget);
        this.parameters['budget'] = this.budget;
        //Will add more api stuff here
      },
      categorytypes: function() {
        console.log('data updated.');
        console.log(this.categorytypes);
        this.parameters['categories'] = this.categorytypes;
        //Will add more api stuff here
      },
      latitude:function() {
        console.log('data updated.');
        this.parameters['latitude'] = this.latitude;
      },
      longitude:function() {
        console.log('data updated.');
        this.parameters['longitude'] = this.longitude;
      },
      radius: function() {
        this.parameters['radius'] = this.radius;
      },
      maxBudget: function() {
        this.parameters['maxBudget'] = this.maxBudget;
      },
      minBudget: function() {
        this.parameters['minBudget'] = this.minBudget;
      }

    }

  }
</script>

<style >
  #DatePage{
    color: whitesmoke ;
    background: #4F4E4C ;
    min-height: 100%;
  }
  .everythingLeft {
    text-align: left;
  }
  .everythingRight{
    text-align: right;
  }
  .center {
    text-align: center;
  }
  .mid{
    display: block;
    left: auto;
    right: auto;
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
    color: firebrick;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  nav{
    background: #fd5e53;
    padding: 14px 0;
    margin-bottom: 40px;
  }
  .secondPage{
    background: #fd5e53;
    padding: 1px 0;
    margin-bottom: 0px;
  }
  h3{
      float: left;
      margin: 0;
  }
  button{
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    color:#323b39 ;
    font-size: 18px;
    background:  #fd5e53;

  }
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
    column-gap: 10px;
  }
  .left, .right {
    width: 450px;
  }
  .middle{
    width: 450px;
  }
  .row{
    content: "";
    display: table;
    clear: both;
  }
  .dateBox1{
   width: 450px;
    height: 350px;
    border-color: #fd5e53 ;
    border-style:solid;
    border-width:8px;
  }
  .colorDateTwo{
    background: whitesmoke;
    color: #000;
  }
  .customAlert{

    display: none;
    position: fixed;
    max-width: 25%;
    min-width: 250px !important;
    min-height: 20%;
    height: 200px;
    left: 50%;
    top: 50%;
    padding: 10px;
    box-sizing: border-box;
    margin-left: -12.5%;
    margin-top: -5.2%;
    background: #088A68;
  }
  .titles{
    font-size: 40px;
  }

  .sk-wave{
    margin: 40px auto;
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px; }
  .sk-wave .sk-rect {
    background-color: #333;
    height: 100%;
    width: 6px;
    display: inline-block;
    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
    animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }
  .sk-wave .sk-rect1 {
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s; }
  .sk-wave .sk-rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s; }
  .sk-wave .sk-rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s; }
  .sk-wave .sk-rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s; }
  .sk-wave .sk-rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s; }

  @-webkit-keyframes sk-waveStretchDelay {
    0%, 40%, 100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4); }
    20% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1); } }

  @keyframes sk-waveStretchDelay {
    0%, 40%, 100% {
      -webkit-transform: scaleY(0.4);
      transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);

    }
  }

  .loader {
    position: absolute;
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #fd5e53;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }


</style>

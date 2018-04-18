


<template>

    <div id="DatePage">

      <!--Header-->
      <h1>
        Your Dates
      </h1>
      <!--Button to generate Dates-->
      <h1><button class="middle" v-on:click="getResult()">Search For Results!</button>
      <span class="middle" v-if="searchCompleted">Search completed!</span></h1>
      <br>

      <button class="middle" v-on:click="shuffling(this.results); sorter(); initial()">Generate Your Dates!</button>

      <div v-if='this.allPlaceShown === true'>
          <label>All places have been shown.</label>
      </div>

       <div v-if='this.allMealsShown === true'>
                <label>All meals have been shown.</label>
       </div>


        <!--Date Box 1-->
     <div class="left dateBox1">
        <h2>
          Date 1
        </h2>

       <p>
         {{Date1Open.name}}

         <button v-if="ButtonsVisible" v-on:click="NewDate1Open()">Find New Place</button>

       </p>

       <div>
            {{meal1.name}}
                    <button v-if="ButtonsVisible" v-on:click="NewMeal1()">Find New Place</button>

            </div>
     {{Date1Close.name}}
             <button v-if="ButtonsVisible" v-on:click="NewDate1Close()">Find New Place</button>

     </div>

     <div style="width: 400px; border-color:blue;
                    border-style:solid; border-width:1;display:left;">
        <h2>
                  Date 2
        </h2>
     {{Date2Open.name}}
                    <button v-if="ButtonsVisible" v-on:click="NewDate2Open()">Find New Place</button>

              <div>
                            {{meal2.name}}

                   <button v-if="ButtonsVisible" v-on:click="NewMeal2()">Find New Place</button>


              </div>
     {{Date2Close.name}}
                  <button v-if="ButtonsVisible" v-on:click="NewDate2Close()">Find New Place</button>

     </div>

     <div style="width: 400px; border-color:#b1973c;
                      border-style:solid; border-width:1;display:left;">
           <h2>
              Date 3
           </h2>
     {{Date3Open.name}}
                               <button v-if="ButtonsVisible" v-on:click="NewDate3Open()">Find New Place</button>

              <div>
              {{meal3.name}}
                 <button v-if="ButtonsVisible" v-on:click="NewMeal3()">Find New Place</button>

              </div>
     {{Date3Close.name}}
                               <button v-if="ButtonsVisible" v-on:click="NewDate3Close()">Find New Place</button>

     </div>




    <ul>
                  <li v-for="place in results">


                      <div style="width: 300px; border-style: solid; border-width: 1px;
                        align-items: left; display: inline-block; text-align: left;
                          " align="left" >
                        <span id="long">{{place.placeSearch.name}}</span>
                        <br>
                        <span id="true">{{place.placeSearch.address}}</span>
                        <br/>
                        <span>Phone Number:{{place.placeDetails.formatted_phone_number}}</span>
                        <br/>
                        <span> Average Google Rating: {{place.placeSearch.rating}}</span>
                        <br/>
                      </div>



                      <hr color="red"/>
                  </li>
    </ul>




    </div>

</template>

<script>
  import lodash from 'lodash';
  import axios from 'axios';

  const API_KEY = "AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk";
  const PROXY_ADDRESS = "https://cors-anywhere.herokuapp.com/";
  const PHOTO_LIBRARY = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=";
  const GOOGLE_PLACES_ADDRESS = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.940753,-93.179233&radius=2000&type=";
  const GOOGLE_PLACES_DETAIL_SEARCH = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";
  const PHOTO_MAX_WITH = 500;

    export default {
      name: "datepage",
      props: {
        categorytypes: {
          type: Array,
          required: true
        },
        budget: {
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
                    meal1 : [],
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
            parameters: {'budget':0, 'categories':[], 'latitude':0, 'longitude':0},
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
            changer: function(){

              for(let i=0; i<this.myMessage.length; i++){

              this.n =1;
            }
            },
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
                if (place.types.includes("restaurant") || place.types.includes("cafe")) {
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
                  this.Randomqueue=this.shuffle(array);
                }
              },
              queueFunctions: function(array){
              shuffling(array)
              sorter;
              this.initial;
                },
          async getResult() {
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
              let raw = await axios.get(PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + this.parameters.categories[h] + "&maxprice=" + this.parameters.budget + "&key=" + API_KEY);
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
        }

      }


    }
</script>

<style >
  #DatePage{
    background: #323b39;
    color: #b1973c;
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
    font-size: 10px;
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
  .dateBox1{
   width: 400px;
    border-color: #b1973c ;
    border-style:solid;
    border-width:1;
  }

</style>

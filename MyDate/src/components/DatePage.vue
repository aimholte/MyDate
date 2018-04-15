


<template>

    <div id="DatePage">


        <!--NavBar-->
      <nav>
        <ul>
          <!--<img src="MDLogo.png" class="centerPic">-->

          <li>  <router-link v-bind:to="'/'" exact="" tag="img" src="https://png.icons8.com/metro/1600/home.png"  >Home</router-link></li>
          <li><router-link v-bind:to="'/about'" exact="" tag="img" src="https://cdn1.iconfinder.com/data/icons/seo-icons-4/24/Idea-3-512.png">About</router-link></li>
          <li><router-link v-bind:to="'/DP'"  exact="" tag="img"src="https://png.icons8.com/windows/1600/hearts.png"></router-link></li>
        </ul>
      </nav>


      <!--Header-->
      <h1>
        Your Dates
      </h1>
      <!--Button to generate Dates-->
      <h1><button class="middle" v-on:click="shuffling(myMessage); sorter(); initial()">Generate Your Date!</button></h1>
      <br>

      <div v-if='this.allPlaceShown === true'>
        <label>All places have been shown.</label>
      </div>

      <div v-if='this.allMealsShown === true'>
        <label>All meals have been shown.</label>
      </div>

      <div class="row">
        <!--Date Box 1-->
        <div class="left column dateBox1">
          <h2>
            Date 1
          </h2>
          <!--Date Opener-->
          <p>
            {{Date1Open.name}}
            <button v-on:click="NewDate1Open()">Find New Place</button>
          </p>
          <!--Date Meal-->
          <p>
            {{meal1.name}}
            <button v-on:click="NewMeal1()">Find New Meal</button>
          </p>
          <!--Date Closer-->
          <p>
            {{Date1Close.name}}
            <button v-on:click="NewDate1Close()">Find New Place</button>
          </p>
        </div>
        <!--Date Box 2-->
        <div class="middle column dateBox1">
          <h2>
            Date 2
          </h2>
          <!--Date Opener-->
          <p>
            {{Date2Open.name}}
            <button v-on:click="NewDate2Open()">Find New Place</button>
          </p>
          <!--Date Meal-->
          <p>
            {{meal2.name}}
            <button v-on:click="NewMeal2()">Find New Meal</button>
          </p>
          <!--Date Closer-->
          <p>
            {{Date2Close.name}}
            <button v-if="ButtonsVisible" v-on:click="NewDate2Close()">Find New Place</button>

          </p>
        </div>
        <!--Date Box 3-->
        <div class="right column dateBox1">
          <h2>
            Date 3
          </h2>
          <!--Date Opener-->
          <p>
            {{Date3Open.name}}
            <button v-on:click="NewDate3Open()">Find New Place</button>
          </p>
          <!--Date Meal-->
          <p>
            {{meal3.name}}
            <button v-on:click="NewMeal3()">Find New Meal</button>
          </p>
          <!--Date Closer-->
          <p>
            {{Date3Close.name}}
            <button v-on:click="NewDate3Close()">Find New Place</button>
          </p>
        </div>
      </div>




    <ul>
                  <li v-for="place in results">


                      <div style="width: 300px; border-style: solid; border-width: 1px;
                        align-items: left; display: inline-block; text-align: left;
                          " align="left" >
                        <span id="long">{{place.name}}.</span>
                        <span id="true">{{place.vicinity}}.</span>
                      </div>



                      <hr color="red"/>
                  </li>
    </ul>




    </div>

</template>

<script>
  import lodash from 'lodash';

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
                     results:'',
            parameters: {},


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
              this.Randomqueue=this.shuffle(array);
              },
              queueFunctions: function(array){
              shuffling(array)
              sorter;
              this.initial;
                },

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
        }

      },
      updated: {
          test: function() {
            console.log('Data updated.')
          }
      }


    }
</script>

<style >
  #DatePage{
    color: whitesmoke ;
    background: #398EA1 ;
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
    column-gap: 10px;
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
   width: 450px;
    height: 350px;
    border-color: #fd5e53 ;
    border-style:solid;
    border-width:1px;
  }

</style>

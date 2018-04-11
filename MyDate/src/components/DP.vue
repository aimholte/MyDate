
<template>
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
            <input  type="radio" id = "active" value="Active" v-model="categories"/>
          </label>
          <p class="writing">
            Feel like getting this first date moving!? <br>
            This categories has options like: <br>
            Hiking, Skydiving, and Surfing<br>
          </p>

          <!--City-->
          <img class="icon" src="https://png.icons8.com/metro/1600/building.png"/>
          <label class="writing" >City
            <input type="radio" id="city" value="City" v-model="categories"/>
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
          <img class="icon" src="https://cdn3.iconfinder.com/data/icons/creative-and-idea/500/Idea-thinking-think-concept_13-512.png"/>
          <label class="writing">Something New
            <input type="radio" value="Something New" v-model="categories"/>

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
            <input type="radio" value="Vintage" v-model="categories"/>
          </label>


          <p class="writing">
            Want to get that nostalgic feel out of ya?! <br>
            This categories has options like: <br>
            Drive ins, Bowling, and more<br>
          </p>
          <span class="selection"> You've selected: {{categories}}</span>


          <!--Spits out what categories you've selected-->

        </div>

        <div class="column right">

          <h1 class="centerTex">Select A Price</h1>






          <!--Selection Box-->
          <label class="centerup"> How Much Would You like to spend</label>
          <select  class="centerup" v-model="desireAmount">
            <option class="centerup"  v-for="num in numbers">{{num}}</option>

          </select>
          <p class="centerup writing">
            You want to spend:  {{APItypes}}
          </p>





        </div>

      </div>
      </form>

      <nav>
        <ul>
          <li><router-link class="chillright image"  v-bind:to="'/datepage'" tag="img" src="https://www.freeiconspng.com/uploads/ball-right-arrow-icon-27.png">Next</router-link></li>
        </ul>
      </nav>
    </div>


</template>

<script>


  import {bus} from "../main"
  export default {
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
            types: ["Active", "City","Vintage","SomethingNew"],
            numbers: ["$","$$","$$$","$$$$"],
            desireAmount: "",



          }

      },
      methods:{



      }

    }
</script>
<style>
  #DatePicker{
    background: #323b39;
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

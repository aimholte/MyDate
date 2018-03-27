
<template>
    <div id ="DP">
        <!--Header-->
      <br>
      <h2 class="centerTex">Date Categories</h2>

      <!--Active-->
      <label>Active</label>
      <input type="checkbox" value="Active" v-model="categories">
      <br>

      <p>
        Feel like getting this first date moving!? <br>
        This categories has options like: <br>
        Hiking, Skydiving, and Surfing<br>
      </p>

      <!--City-->
      <label >City</label>
      <input type="checkbox" value="City" v-model="categories">
      <br>
      <p>
           Want to show them what your city has to offer? <br>
           This categories has options like: <br>
           Museums, Sporting Events, and Concerts<br>
      </p>


      <!--SomethingNew-->
      <label>Something New</label>
      <input type="checkbox" value="Something New" v-model="categories">
      <br>
      <p>
           Want to spice things up?! <br>
           This categories has options like: <br>
           Going to a Bookstore, Ghost town, and more<br>
      </p>



        <!--Vintage-->
      <label >Vintage</label>
      <input type="checkbox" value="Vintage" v-model="categories">

      <p>
           Want to get that nostalgic feel out of ya?! <br>
           This categories has options like: <br>
           Drive ins, Bowling, and more<br>
      </p>

      <!--Spits out what categories you've selected-->
      <p>
        You've selected:
      </p>
      <ul>
        <li class="alltheright" v-for="category in categories">{{category}}</li>
      </ul>

      <!--Selection Box-->
      <!--<label> Test</label>-->
      <!--<select v-model="testAnswer">-->
        <!--<option v-for="type in types">{{type}}</option>-->
      <!--</select>-->


      <!--Price Points-->
      <!--<h3>Price Selector</h3>-->

      <!--<input type="checkbox" id="HT">-->
      <!--<label for="HT">High Tier</label>-->
        <!--<br>-->
      <!--<input type="checkbox" id="MT">-->
      <!--<label for="MT">Middle Tier</label>-->
      <!--<br>-->
      <!--<input type="checkbox" id="LT">-->
      <!--<label for="LT">Low Tier</label>-->

      <!--Button Practice-->
      <!--<script type="text/javascript"></script>-->
      <!--<script :src="main.js"></script>-->

      <!--<button class="chillright">Next</button>-->
      <nav>
        <ul>
          <li><router-link class="chillright" v-bind:to="'/amount'">Next</router-link></li>
        </ul>
      </nav>
    </div>


</template>

<script>
    export default {
        name: "d-p",
     // Holds data for the dp page to access
      data(){
          return{
            categories:[ ],
            testAnswer: "",
            types: ["Active", "City","Vintage","SomethingNew"]

          }

      }

    }
</script>
<style>
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
  #DP{
    text-align: left;
  }
  h3{
    position: relative;
  }
  h2{
    position:static;
    top: 70px;
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


</style>

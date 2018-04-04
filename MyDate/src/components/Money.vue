<template>
<div id="amount">
  <nav>
    <label class="centerup black" >Category</label>
    <select class="centerup custom-select" v-model="selectedType">

      <option v-for="type in types">{{type}}</option>
    </select>
  </nav>
  <h1 class="centerup">Select A Price</h1>

  <h3>{{title}}</h3>




  <!--Selection Box-->
  <label class="centerup"> How Much Would You like to spend</label>
  <select  class="centerup" v-model="desireAmount">
  <option class="centerup"  v-for="num in numbers">{{num}}</option>

  </select>
  <p class="centerup">
    You want to spend: $ {{desireAmount}}
  </p>




  <ul>
      <li><router-link class="centerup" v-bind:to="'/datePage '">See Your Perfect Date</router-link></li>
  </ul>


</div>
</template>

<script>
   import "./DP"
   import {bus} from "../main"

   export default {
        name: "amount",
        props:{
            title:{
              type: String
        }
        },
      data(){
          return{
            numbers: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,75,80,85,90,95,100],
            desireAmount: "",
            types: ["Active","City","Something New","Vintage"],
            selectedType: "",
            title:""
          }

      },
       created(){
          bus.$on('titleChanged',(data) => {
            this.title = data;
          } )
       }
    }
</script>

<style scoped>
.centerup{
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;

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
nav{
  background: firebrick;
  padding: 14px 0;
  margin-bottom: 40px;
}
a{
  color: crimson;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
  .black{
    color: black;
  }
  .custom-select select{
    display: none;
  }
</style>



<template>
<div id="amount">

  <h1 class="centerup">Select A Price</h1>

  <!--Selection Box-->
  <label class="centerup"> How Much Would You like to spend</label>
  <select  class="centerup" v-model="desireAmount">
  <option class="centerup"  v-for="num in numbers">{{num}}</option>

  </select>
  <p class="centerup">
    You want to spend: $ {{desireAmount}}
  </p>



  <nav>
    <ul>
      <li><router-link class="centerup" v-bind:to="'/datepage'">See Your Perfect Date</router-link></li>
    </ul>
  </nav>
</div>
</template>

<script>
    export default {
        name: "amount",
      data(){
          return{
            numbers: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,75,80,85,90,95,100],
            desireAmount: ""
          }

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
</style>

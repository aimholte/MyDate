<template>
<div>
  <!--<label>Name</label>-->
  <!--<input type = "text" v-model="name"/>-->
  <!--<button @click ="submitName()">Add</button>-->
  <nav>
    <label class="centerup">Category</label>
    <select class="centerup" v-model="selectedType">
      <option v-for="type in types">{{type}}</option>
    </select>
    <label>Price</label>
    <select v-model="SP">
      <option v-for="num in numbers">{{num}}</option>
    </select>
  </nav>

  <div class="row">
    <ul>

      <li v-for="date of names" v-bind:key = "date['.key']">
        <div class="left">
          <!--<div v-if="date.category"></div>-->
          <p>
            {{date.name}}
          </p>
          <p>
            $ {{date.price}}
          </p>
          <p>
            {{date.category}}
          </p>
          <p>
            {{date.type}}
          </p>
        </div>


        <button @click = "removeName(date['.key'])">
          Remove
        </button>
      </li>
    </ul>
  </div>



</div>
</template>

<script>
  import '../Database'
  import {dateNameRef} from '../Database'


  export default {

    data () {
      return {
        name: "",
        price:"",
        category:"",
        type:"",

      }

    },
    firebase: { names: dateNameRef},
    methods: {
      submitName(){
        dateNameRef.push({name: this.name, edit: false});
        this.name = '';
      },
      removeName(key){
        dateNameRef.child(key).remove();
      },
    }
  }
</script>

<style scoped>

  button{
    background-color: transparent;
    border: 2px solid black;
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

</style>

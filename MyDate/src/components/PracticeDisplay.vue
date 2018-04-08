<template>
<div>
  <!--<label>Name</label>-->
  <!--<input type = "text" v-model="name"/>-->
  <!--<button @click ="submitName()">Add</button>-->
  <ul>
    <li v-for="personName of names" v-bind:key = "personName['.key']">
      <p>
        {{personName.name}}
      </p>
      <p>
        {{personName.price}}
      </p>
      <p>
        {{personName.category}}
      </p>
      <p>
        {{personName.type}}
      </p>

      <button @click = "removeName(personName['.key'])">
        Remove
      </button>
    </li>
  </ul>

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

</style>

<template>
  <div class="search">
    <h2>Type in the place type you want to search</h2>
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Type in your search" v-model="query" />
    </form>
    <div class="results" v-if="results">
      <div v-for="result in results">
        <img v-bind:src="result.links[0].href" />
      </div>
    </div>
  </div>
</template>

<script>
  const API_KEY = "AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk";
  const GOOGLE_PLACES_ADDRESS = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=";

  import axios from 'axios';
  export default {
    name: 'search',
    data () {
      return {
        msg: 'Search',
        query: '',
        results:''
      }
    },
    methods: {
      getResult(query) {
        axios.get(GOOGLE_PLACES_ADDRESS + query + '&key=' + API_KEY).then(response => {
          console.log(response.data.collection.items);
          this.results = response.data;
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .results img {
    height: 300px;
    margin: 10px;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

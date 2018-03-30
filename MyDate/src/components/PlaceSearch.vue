<template>
  <div class="search">
    <h2>Type in the place type you want to search</h2>
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Type in your search" v-model="query" />
    </form>
    <div class="results" v-if="results">
      <ul>
        <li v-for = "result in results">
          {{ result.name }}
          <br/>
          Address:
          {{ result.address }}
          <br/>
          Average Google Rating:
          {{ result.rating }}
          <br/>
          <img v-bind:src="result.icon"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  const API_KEY = "AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk";
  const PROXY_ADDRESS = "https://cors-anywhere.herokuapp.com/";
  const GOOGLE_PLACES_ADDRESS = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.940753,-93.179233&radius=1000&type=";

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
        function formatResult(result) {
          var r = {};
          r['id'] = result.id;
          r['name'] = result.name;
          r['photoref'] = result.photos[0].photo_reference;
          r['icon'] = result.icon;
          r['rating'] = result.rating;
          r['address'] = result.vicinity;
          r['types'] = result.types;
          return r;
        }

        axios.get(PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + query + '&key=' + API_KEY).then(response => {
          //console.log(PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + query + '&key=' + API_KEY);
          //console.log(formatResult(response.data.results[0]));
          this.results = [formatResult(response.data.results[0])];
          console.log(this.results);
        });
      }




    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .results img {
    height: 100px;
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

<template>
  <div class="search">
    <h2>Type in the place type you want to search</h2>
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Type in your search" v-model="query" />
    </form>
  </div>
</template>

<script>
  const API_KEY = "AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk";
  const PROXY_ADDRESS = "https://cors-anywhere.herokuapp.com/";
  const PHOTO_LIBRARY = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=";
  const GOOGLE_PLACES_ADDRESS = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.940753,-93.179233&radius=1000&type=";
  const GOOGLE_PLACES_DETAIL_SEARCH = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";
  const PHOTO_MAX_WITH = 500;

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

        axios.get(PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + query + '&key=' + API_KEY)
          .then(response => {
            var r = [];
            console.log(response.data.results[0].photos[0].photo_reference);
            for (var i = 0; i < response.data.results.length; i++) {
              var temp = {};
              temp['name'] = response.data.results[i].name;
              temp['opennow'] = response.data.results[i].opening_hours.open_now;
              temp['placeid'] = response.data.results[i].place_id;
              temp['rating'] = response.data.results[i].rating;
              temp['icon'] = response.data.results[i].icon;
              temp['address'] = response.data.results[i].vicinity;
              temp['types'] = response.data.results[i].types;
              temp['photoref'] = response.data.results[i].photos;
              r[i] = temp;
            }
            console.log(r);
            this.results = r;
          })
          .catch(error => {
            alert("Sorry, an error occurred. Please try a different request.");
            this.results = '';
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

<template>
  <div class="search">
    <h2>Type in the place id you want more info for</h2>
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Type a valid place id here" v-model="query" />
    </form>
    <div class="results" v-if="results">
      <ul>
        <li v-for = "result in results">
          {{ result.name }}
          <br/>
          {{ result.hours.toString() }}
          <br/>
          Phone:
          {{ result.phoneNumber }}
          <br/>
          Website:
          {{ result.website }}
          <br/>
          Google maps:
          {{ result.googleurl }}
          <br/>
          Review:
          {{ result.reviews[0].text }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
  const SENCHA_PLACE_ID = "ChIJ8cmkJhkq9ocRpnJj7Ly3ZIE";
  const API_KEY = "AIzaSyChru3GBEmCa8EcQk-Q9MEnF-klk10yvgk";
  const PROXY_ADDRESS = "https://cors-anywhere.herokuapp.com/";
  const PHOTO_LIBRARY = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=";
  const GOOGLE_PLACES_ADDRESS = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=44.940753,-93.179233&radius=1000&type=";
  const GOOGLE_PLACES_DETAIL_SEARCH = "https://maps.googleapis.com/maps/api/place/details/json?placeid=";
  const PHOTO_MAX_WITH = 500;

  import axios from 'axios';
  export default {
    name: 'search',
    data() {
      return {
        msg: 'Search',
        query: '',
        results: '',
        more: ''
      }
    },
    methods: {

      async getResult(placeID) {
        function formatResultDetailSearch(result) {
          var r = {};
          r['phoneNumber'] = result.formatted_phone_number;
          r['hours'] = result.opening_hours.weekday_text;
          r['reviews'] = result.reviews;
          r['website'] = result.website;
          r['googleurl'] = result.url;
          r['photos'] = result.photos;
          r['name'] = result.name;
          return r;
        }

        function formatResult(result) {
          var r = {};
          r['id'] = result.place_id;
          r['name'] = result.name;
          r['icon'] = result.icon;
          r['rating'] = result.rating;
          r['address'] = result.vicinity;
          r['types'] = result.types;
          r['open_now'] = result['opening_hours'].open_now;
          return r;
        }


        function formatResults(results) {
          let resultlist = [];
          for(let i = 0; i < results.length; i++) {
            resultlist[i] = formatResult(results[i]);
          }
          return resultlist;
        }

        axios.get(PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + "cafe" + "&key=" +API_KEY)
          .then(response => {
            let data = response.data.results;
            let cleandata = [];
            for(let j = 0; j < data.length; j++) {
              cleandata[j] = formatResult(data[j]);
            }
            this.more = cleandata;
            let r = [];
            for(let i = 0; i < data.length; i++) {
              axios.get(PROXY_ADDRESS + GOOGLE_PLACES_DETAIL_SEARCH + data[i].place_id + '&key=' + API_KEY)
                .then(response => {

                  var detailSearch = formatResultDetailSearch(response.data.result);
                  r[i] = [detailSearch];
                });
            }
            this.results = r;
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

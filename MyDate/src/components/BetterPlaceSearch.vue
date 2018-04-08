<template>
  <div class="search">
    <h2>Press enter to run the search</h2>
    <form v-on:submit.prevent="getResult(query)">
      <input type="text" placeholder="Press enter get results!" v-model="query" />
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
  const ACTIVE = ['night_club', 'park', 'zoo', 'amusement_park', 'gym'];
  const HITTING_THE_CITY = ['art_gallery', 'museum', 'casino', 'stadium'];
  const OLD_SCHOOL = ['mall', 'bar', 'movie_theater', 'bowling_alley'];
  const SOMETHING_NEW = ['spa', 'aquarium', 'bakery', 'book_store'];
  const TEST = ['night_club','cafe', 'store', 'bar'];

  import axios from 'axios';
  export default {
    name: 'search',
    data() {
      return {
        msg: 'Search',
        query: '',
        results: [],
        more: '',
        lat: '',
        long: ''
      }
    },
    methods: {

      async getResult() {

        function formatResultDetailSearch(result) {
          var r = {};
          r['phoneNumber'] = result.formatted_phone_number;
          r['hours'] = result.opening_hours.weekday_text;
          r['reviews'] = result.reviews;
          r['website'] = result.website;
          r['googleurl'] = result.url;
          r['photos'] = result.photos;
          r['name'] = result.name;
          r['id'] = result.place_id;
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
          if(result.opening_hours !== undefined) {
            r['open_now'] = result['opening_hours'].open_now;
          }
          else {
            r['open_now'] = true;
          }

          return r;
        }


        async function getDetails(data) {
          let r = [];
          for(let i = 0; i < data.length; i++) {
            let json = await axios.get(PROXY_ADDRESS + GOOGLE_PLACES_DETAIL_SEARCH + data[i].place_id + '&key=' + API_KEY);
            r[i] = json.data.result;
          }
          return r;
        }

        for(let h = 0; h < TEST.length; h++) {
          let raw = await axios.get(PROXY_ADDRESS + GOOGLE_PLACES_ADDRESS + OLD_SCHOOL[h] + "&key=" +API_KEY);
          console.log(raw.data.status);
          if(raw.data.status !== 'ZERO_RESULTS') {
            let data = raw.data.results;
            let cleandata = [];
            for(let j = 0; j < data.length; j++) {
              let dict = {};
              let detail = await axios.get(PROXY_ADDRESS + GOOGLE_PLACES_DETAIL_SEARCH + data[j].place_id + "&key=" + API_KEY);
              let detaildata = detail.data.result;
              dict['place search data'] = formatResult(data[j]);
              dict['place details data'] = detaildata;
              cleandata[j] = dict;
            }
            if(Array.isArray(this.more) == true) {
              for(let o = 0; o < cleandata.length; o++) {
                this.more.push(cleandata[o]);
              }
            }
            else {
              this.more = cleandata;
            }
            let r = [];
            let detaildata = getDetails(data);
            this.results = detaildata;
          }
        }


        navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
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

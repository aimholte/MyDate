Purpose:  Autocomplete Functionality to gain users location easier
Created By: Team Cheese



<template>
  <div id="app">
    <h1>Enter Your Desired Location</h1>
    <!--input and button for Current Location -->

    <input ref="autocomplete"
           placeholder="Search"
           class="search-location"
           onfocus="value = ''"
           type="text" />
    <button class="currentLocation" v-on:click="useCurrentLocation"> <b>Use Your Current Location</b></button>
  </div>
</template>

<script>
  export default {
    name: 'autocomplete',
    data() {
      return {
        latitude: '',
        longitude: '',
      }
    },

    //mounts the function so it can call the API
    mounted() {
      this.autocomplete = new google.maps.places.Autocomplete(
        (this.$refs.autocomplete),
        {types: ['geocode']}
      );
      this.autocomplete.addListener('place_changed', () => {
        let place = this.autocomplete.getPlace();
        let ac = place.address_components;
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        let city = ac[0]["short_name"];

        console.log(`The user picked ${city} with the coordinates ${this.latitude}, ${this.longitude}`);
      });
    },
    //If button is pressed this method is called to use the users current location
    methods:{
      useCurrentLocation: function() {
        navigator.geolocation.getCurrentPosition(position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          console.log(this.latitude);
          console.log(this.longitude);
        });
      }
    }
  }
</script>


<style>
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    background-color: #dcdde1;
    color: #2f3640;
  }

  .search-location {
    display: block;
    width: 18vw;
    margin: 0 auto;
    margin-top: 5vw;
    margin-bottom: 1vw;
    font-size: 20px;
    font-weight: 400;
    outline: none;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
  }

  .currentLocation {
    font-size: 20px;
    text-align: center;
    color: #2f3640;
  }
</style>



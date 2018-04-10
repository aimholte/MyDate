<template>
  <div id="app" >
    <!-- the router outlet, where all matched components would ber viewed -->
    <app-header></app-header>
    <!--<img src="./assets/MyDateLogo.png" class="centerPic"/>-->

    <router-view></router-view>
  </div>
</template>

<script>
  // import header piece
import header from './components/Header'






  export default {
    name: 'app',

    components:{

      'app-header': header
    },

  }
</script>
<!-- styling for the component -->
<style >
  .centerPic {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align-all: center;
    color: #b1973c;

    /*background-color: #323b39;*/


    /*background-image: url("./assets/PerfectDAte.png");*/


  }
</style>

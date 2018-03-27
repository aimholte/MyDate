<template>
  <div id="app" >
    <!-- the router outlet, where all matched components would ber viewed -->
    <app-header></app-header>
    <img src="./assets/MyDateLogo.png" class="centerPic"/>
    <!--<img src="./assets/PerfectDAte.png" style="position: sticky; top: 10px; left: 100px; z-index: -1" >-->

    <router-view></router-view>

  <!--image practice-->
    <!--<div class="row">-->
      <!--<img style="position: relative; z-index: -1" v-for="pic in images" v-bind:src="pic"/>-->

    <!--</div>-->
  </div>
</template>

<script>
  import header from './components/Header'
  export default {
    name: 'app',
    components:{

      'app-header': header
    },
    // data(){
    //   return{
    //   //   images:['https://pictures.ozy.com/pictures/600x337/5/6/1/105561_shutterstock_337991192.jpg',
    //   //   'https://resources.stuff.co.nz/content/dam/images/1/h/4/y/2/v/image.related.StuffLandscapeSixteenByNine.620x349.1h4w1p.png/1486667636660.jpg']
    //   // }
    //
    // }
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
    color: #2c3e50;
    /*margin-top: 60px;*/
    /*background-image: url("./assets/Date.jpg");*/
    border-image: url("./assets/PerfectDAte.png");
    /*!*list-style-image: url("./assets/PerfectDAte.png");*!*/
    /*border-image-repeat: repeat;*/
    /*mask-image: url("./assets/PerfectDAte.png");*/


  }
</style>

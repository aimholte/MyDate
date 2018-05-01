<template>
  <div id="app" >
    <!-- the router outlet, where all matched components would ber viewed -->
    <!--<app-header></app-header>-->
    <!--<img src="./assets/MyDateLogo.png" class="centerPic"/>-->
    <nav>
      <!--Router links to home, about, and date picker page-->
      <div>
        <ul>
          <!--<img src="MDLogo.png" class="centerPic">-->

          <li>  <router-link v-bind:to="'/'" exact="" tag="img" src="https://png.icons8.com/metro/1600/home.png"  >Home</router-link></li>
          <li><router-link v-bind:to="'/about'" exact="" tag="img" src="https://cdn1.iconfinder.com/data/icons/seo-icons-4/24/Idea-3-512.png">About</router-link></li>
          <li><router-link v-bind:to="'/DP'"  exact="" tag="img"src="https://png.icons8.com/windows/1600/hearts.png"></router-link></li>
        </ul>

      </div>

    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
  // import header piece
import header from './components/Header';






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
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;




    /*background-color: #323b39;*/


    /*background-image: url("./assets/PerfectDAte.png");*/
  }
  html,body{
    min-height: 100vh;
    padding:0;
    margin:0;
  }
  nav{
    background: #fd5e53 ;
    padding: 14px 0;
    margin-bottom: 0;}

  img{
    width: 75px;
    height: 75px;
  }
  .column{
    float: left;
    padding: 10px;
    column-gap: 10px;
  }
  .left, .right {
    width: 450px;
  }
  .middle{
    width: 450px;
  }
  .row{
    content: "";
    display: table;
    clear: both;
  }
  button{
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    color:#323b39 ;
    font-size: 18px;
    background:  #fd5e53;

  }
  ul{
    list-style-type: none;

    text-align: center;
    margin: 0;
  }
  li{
    display: inline-block;
    margin: 0 10px;
  }
  a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  nav{
    background: #fd5e53 ;
    padding: 14px 0;
    margin-bottom: 0px;}
</style>

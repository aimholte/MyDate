Purpose:Home Page of website
Created By: Team Cheese


<template>
  <div id="hello" >
    <!--<nav>-->
      <!--&lt;!&ndash;Router links to home, about, and date picker page&ndash;&gt;-->
      <!--<ul>-->
        <!--&lt;!&ndash;<img src="MDLogo.png" class="centerPic">&ndash;&gt;-->

        <!--<li>  <router-link v-bind:to="'/'" exact="" tag="img" src="https://png.icons8.com/metro/1600/home.png"  >Home</router-link></li>-->
        <!--<li><router-link v-bind:to="'/about'" exact="" tag="img" src="https://cdn1.iconfinder.com/data/icons/seo-icons-4/24/Idea-3-512.png">About</router-link></li>-->
        <!--<li><router-link v-bind:to="'/DP'"  exact="" tag="img"src="https://png.icons8.com/windows/1600/hearts.png"></router-link></li>-->
      <!--</ul>-->
    <!--</nav>-->


    <p class="textSize dateOption centTextBox fonts">
      Welcome to MyDate! <br>
      The interactive Date Planner App.<br>
      This app is to help you find the perfect date for the perfect time!
     <br> Click the Heart above to begin.

    </p>
    <video autoplay loop muted id="video-background" plays-inline>
      <source src="https://09-lvl3-pdl.vimeocdn.com/01/4700/4/123504120/350950598.mp4?expires=1525070984&token=07b0b1a7719044126c72c">
    </video>
    <!--<video autoplay loop muted id="video-background" plays-inline>-->
      <!--<source src="https://gcs-vimeo.akamaized.net/exp=1523403274~acl=%2A%2F348715371.mp4%2A~hmac=7e643eeed9fb2d296a7d158668eefdbe70aba2793c58acf20e460a326a732d88/vimeo-prod-skyfire-std-us/01/4581/4/122906560/348715371.mp4">-->
    <!--</video>-->

  </div>


</template>

<style>
  /*MyDate Logo*/


</style>
<script>

export default {
  name: 'HomePage',
  data() {

    return {
      email:"",
      password:""
    }
  },
  methods: {


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  #hello {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: whitesmoke;
    margin-top: 60px;
    font-family: Impact, Charcoal, sans-serif;
  }

  /*button {*/
    /**/
  /*}*/

  /*.alert button,*/
  /*.special button {*/
    /**/
  /*}*/

  /*.login .alert button {*/
    /**/
  /*}*/


  p{
    margin-top: 40px;
    font-size: 13px;
    font-family: Impact, Charcoal, sans-serif;
  }

  #video-background{
    position: fixed;
    right: 0;
    bottom: 0;
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
    z-index: -100;

  }
  .textSize{
    font-size: 20px;
    text-outline: black 40px;
    font-weight: bold;
  }
  #hello .dateOption{
    opacity:0.5 ;
    filter: alpha(opacity=50);
    background-color: black;
    /*border: 3px solid  #b1973c ;*/
    width: 500px;
    height: 140px;
    position: relative;
    display: inline-block;
    left: auto;
    right: auto;
  }
  .centTextBox{
    display: inline-block;
    left: auto;
    right: auto;
  }


  #hello nav{
    opacity: .5;
    filter: alpha(opacity=50);
    background: #fd5e53 ;
    padding: 14px 0;
    margin-bottom: 0px;
  }

  #hello ul{
    list-style-type: none;

    text-align: center;
    margin: 0;
  }
  #hello li{
    display: inline-block;
    margin: 0 10px;
  }
  #hello a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  #hello .fonts{
    font-family: Damascus;
  }


</style>

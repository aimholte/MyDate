
<template>


  <div id="about">
    <nav>
      <!--Router links to home, about, and date picker page-->
      <ul>
        <!--<img src="MDLogo.png" class="centerPic">-->

        <li>  <router-link v-bind:to="'/'" exact="" tag="img" src="https://png.icons8.com/metro/1600/home.png"  >Home</router-link></li>
        <li><router-link v-bind:to="'/about'" exact="" tag="img" src="https://cdn1.iconfinder.com/data/icons/seo-icons-4/24/Idea-3-512.png">About</router-link></li>
        <li><router-link v-bind:to="'/DP'"  exact="" tag="img"src="https://png.icons8.com/windows/1600/hearts.png">DP</router-link></li>
      </ul>
    </nav>
    <body>
    <h1>
      About
    </h1>
    <p class="writing">
      MyDate is a date planning app that customizes personal date ideas just for you.

      All you have to do is select your price and date category! MyDate was developed by four college students
      who wanted to tackle to problem
      that comes with dating in today's time. People due to their lack or time or
      creativity to generate or create new, fun, and exciting dates. Below you can learn more about the creators below
      <br>
    </p>
    </body>




  </div>
</template>


<script>
  export default {
    name: 'about'
  }
</script>
<!-- styling for the component -->
<style >
  #about {
    font-family: 'Bookman Old Style', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: whitesmoke;
    background:#398EA1 ;
    min-height: 100%;
  }
  body{
    min-height: 100%;
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
    margin-bottom: 0;}
  img{
    width: 75px;
    height: 75px;
  }


  .writing{
    font-size: 20px;
  }

</style>

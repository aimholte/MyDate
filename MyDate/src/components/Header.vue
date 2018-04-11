<!--Provides a header at the top of the page-->
<template class="body">

  <nav class="Navbar">
      <!--Router links to home, about, and date picker page-->
      <ul>
        <!--<img src="MDLogo.png" class="centerPic">-->

        <li>  <router-link v-bind:to="'/'" exact="" tag="img" src="https://png.icons8.com/metro/1600/home.png"  >Home</router-link></li>
        <li><router-link v-bind:to="'/about'" exact="" tag="img" src="https://cdn1.iconfinder.com/data/icons/seo-icons-4/24/Idea-3-512.png">About</router-link></li>
        <li><router-link v-bind:to="'/DP'"  exact="" tag="img"src="https://png.icons8.com/windows/1600/hearts.png"></router-link></li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "header.-view"
    }
</script>

<style scoped>
  .body{
    background-color: #505050;
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
    margin-bottom: 0px;

  }

  img{
    width: 75px;
    height: 75px;
  }
  .Navbar{
    opacity: .5;
    filter: alpha(opacity=50);
  }

</style>

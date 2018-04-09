<template>
    <nav>
      <ul>


        <li>  <router-link v-bind:to="'/'" exact="" tag="img" src="https://png.icons8.com/metro/1600/home.png"  >Home</router-link></li>
        <li><router-link v-bind:to="'/about'" exact="" tag="img" src="https://cdn1.iconfinder.com/data/icons/seo-icons-4/24/Idea-3-512.png">About</router-link></li>
        <li><router-link v-bind:to="'/DP'"  exact="" tag="img"src="https://png.icons8.com/windows/1600/hearts.png"></router-link></li>
      </ul>
    </nav>
</template>d

<script>
    export default {
        name: "header.-view"
    }
</script>

<style scoped>
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
    margin-bottom: 40px;
  }

  img{
    width: 75px;
    height: 75px;
  }
</style>

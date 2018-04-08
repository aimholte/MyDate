<template>
    <nav>
      <ul>
        <li> <router-link v-bind:to="'/'" exact="" tag="img" src="http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Home-icon.png"  >Home</router-link></li>
        <li><router-link v-bind:to="'/about'" exact="" tag="img" src="https://www.freeiconspng.com/uploads/information-icon-5.png">About</router-link></li>
        <li><router-link v-bind:to="'/DP'"  exact="" tag="img" src="http://icons.iconarchive.com/icons/alecive/flatwoken/256/Apps-Favorite-Heart-icon.png">DatePicker</router-link></li>
      </ul>
    </nav>
</template>

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
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
  }

  img{
    width: 75px;
    height: 75px;
  }
</style>


<template>


  <div id="about">

    <body>
    <h1 class="fonts">
      About
    </h1>
    <p class="writing fonts">
      MyDate is a date planning app that customizes personal date ideas just for you.

      All you have to do is select your price and date category! MyDate was developed by four college students
      who wanted to tackle the problem
      that comes with dating in today's time. People due to their lack or time or
      creativity to generate or create new, fun, and exciting dates. You can learn more about the creators below.
      <br>
    </p>
    <h1>Creators</h1>
    <img class="profilePicture" src="./IMG_1826.jpg">
    <p>
      Kiante Miles, grew up in Mustang Oklahoma, after graduating from Mustang High he went on to
      continue not only his career in football but also his education as well. He currently attends Macalester College
      and is getting his major in Computer Science. Kiante hopes that MyDate will change the way people
      think about dating.
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
    background:#4F4E4C ;
    min-height: 100vh;
  }

  #about ul{
    list-style-type: none;

    text-align: center;
    margin: 0;
  }
  #about li{
    display: inline-block;
    margin: 0 10px;
  }
  #about a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
  }
  html,body{
    min-height: 100vh;
    padding:0;
    margin:0;
  }

  #about .profilePicture{
    width: 200px;
    height: 300px;
    display: inline-block;
    left: 10px;
    align-self: left;
  }


  #about .writing{
    font-size: 20px;
  }
  #about .fonts{
    font-family: Damascus;
  }

</style>

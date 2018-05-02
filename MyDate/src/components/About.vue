
<template>


  <div id="about">


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
    <h1 class="fonts">Creators</h1>
    <p class="Te"></p>
    <p class="writing">
      Kiante Miles, grew up in Mustang Oklahoma, after graduating from <br>
      Mustang High he went on to continue not only his career in football<br>
      but also his education as well. He currently attends Macalester College<br>
      and is getting his major in Computer Science.<br>
      Kiante hopes that MyDate will change the way people<br>
      think about dating.
    </p>
    <p class="Aj"></p>
    <p class="writing">
      Aaron J Imholte, is from the greater Maddison area. Along side<br>
      Computer Science and Econ, AJ was the first from his family and<br>
      Macalester college in getting a degree in being swole. When asked<br>
      about his accomplishment Aj simply said "I hope this encourages<br>
      everyone not to be small." He hopes MyDate will help him be able to<br>
      please his girlfriend when they go out from now on.
    </p>
    <p class="Bartz"></p>
    <p class="writing">
      Josh Bartz, is from Omaha, Nebraska. He is a master of memes and<br>
      gifs along with powerpoints to create a truly dangerous set of skills.<br>
      Along side Computer Science, he enjoys making up fake constellations in the night sky<br>
      . He hopes MyDate will take his love life to new heights.
    </p>
    <p class="Blew"></p>
    <p class="writing">
      Benjamin Lewis is from...well no one knows where he came from.<br>
      He claims to be from Seattle, but when asked if they knew Ben they denied him.<br>
      Ben use to be a small guy but his biggest role model AJ Imholte inspired him to get swole. <br>
      "Working along side him has been truly amazing! I blush everytime I see him flex".<br>
      Ben hopes MyDate will score him a chance with AJ.
    </p>





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
  #about .padder{
    padding-top: 8px;
    max-width: 20em;
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
    font-family: Impact, Charcoal, sans-serif;
  }
  #about  .Aj {
    background-image: url("/static/AJ.png");
    width: 200px;
    height: 250px;
    background-repeat: no-repeat;
    display: inline-block;
    background-position: center;

  }
  #about .Te{
    background-image: url("/static/Te.png");
    width: 200px;
    height: 250px;
    background-repeat: no-repeat;
    display: inline-block;
    background-position: center;
  }
  #about .Bartz{
    background-image: url("/static/Bartz.png");
    width: 200px;
    height: 250px;
    background-repeat: no-repeat;
    display: inline-block;
    background-position: center;
  }
  #about .Blew{
    background-image: url("/static/Benjamin.png");
    width: 200px;
    height: 250px;
    background-repeat: no-repeat;
    display: inline-block;
    background-position: center;
  }

</style>

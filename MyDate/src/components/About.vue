
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
    <h1>Creators</h1>
    <img class="profilePicture" src="./IMG_1826.jpg">
    <p>
      Kiante Miles, grew up in Mustang Oklahoma, after graduating from Mustang High he went on to
      continue not only his career in football but also his education as well. He currently attends Macalester College
      and is getting his major in Computer Science. Kiante hopes that MyDate will change the way people
      think about dating.
    </p>
    <img class="profilePicture" src="AJ.png"/>
    <p>
      Aaron J Imholte, is from the greater Maddison area. Along side Computer Science and Econ, AJ was the first from his family
      and Macalester college in getting a degree in being swole. When ask about his accomplishment Aj simply said "I hope this encourages
      everyone not to be small." He hopes MyDate will help him be able to please his girlfriend when they go out from now on.
    </p>
    <img class="profilePicture" src="Bartz.png">
    <p>
      Josh Bartz, is from Omaha, Nebraska. He is a master of memes and gifs along with powerpoints to create a truly dangerous set of skills.
      Along side Computer Science, he enjoys making up fake constelations in the night sky. He hopes MyDate will take his love life to new heights.
    </p>
    <img class="profilePicture" src="BLEW.png">
    <p>
      Benjamin Lewis is from...well no one knows where he came from. He claims to be from Seattle, but when asked if they knew Ben they rejectd.
      Ben use to be a small guy but he biggest role model AJ Imholte inspired him to get swole. "Working along side him has been truly amazing!
      I blush everytime I see him flex". Ben hopes MyDate will score him a chance with AJ.
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

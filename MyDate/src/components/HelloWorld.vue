
<template>
  <div id="hello" >

    <h1>Welcome to MyDate</h1>
    <p class="textSize">
      The interactive Date Planner App.<br>
      This app is to help you find the perfect date for the perfect time!
     <br> Click the Heart above to begin.

    </p>
    <video autoplay loop muted id="video-background" plays-inline>
      <source src="https://09-lvl3-pdl.vimeocdn.com/01/4700/4/123504120/350950598.mp4?expires=1523322042&token=0d6c06d8a9e5514d1c9ca">
    </video>
  </div>


</template>

<style>
  /*MyDate Logo*/
  body{
    background-image: url("/MyDate/src/assets/PerfectDAte.png");
  }

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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #b1973c;
    margin-top: 60px;
  }
  .login{
    margin-top: 40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }
  p a {
    text-decoration: underline;
    cursor: pointer;
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
</style>

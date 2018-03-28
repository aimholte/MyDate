
<template>
  <div id="hello" >

    <h1>{{ msg }}</h1>
    The interactive Date Planner App.
    Click Date Picker to begin.
    <br>
    Or Click About to learn More.


  </div>


</template>

<style>
  body{
    background-image: url("/MyDate/src/assets/PerfectDAte.png");
  }

</style>
<script>

console.log("--------> HelloWorld script tag")
export default {
  name: 'HelloWorld',
  data() {
    console.log("--------> HelloWorld data")
    return {
      msg: 'Welcome to My Date'
    }
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
    color: #2c3e50;
    margin-top: 60px;

  }
</style>

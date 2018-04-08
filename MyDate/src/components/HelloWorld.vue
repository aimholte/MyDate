
<template>
  <div id="hello" >

    <h1>Welcome to MyDate</h1>
    The interactive Date Planner App.
    Login or Click the Heart to begin.
    Click Date Picker to begin.
    <!--<br>-->
    <!--Or Click About to learn More.<br>-->
  <!--<input type="text" placeholder="Email"/><br>-->
    <!--<input type="password" placeholder="Password"><br/>-->
    <!--<button v-bind:onclick="signIn">Connect</button>-->
    <!--<p>-->
      <!--You don't have an account? You can <router-link v-bind:to ="'/signUp'">crete one</router-link>-->
    <!--</p>-->

    <!--<router-view></router-view>-->
  </div>


</template>

<style>
  body{
    background-image: url("/MyDate/src/assets/PerfectDAte.png");
  }

</style>
<script>
// import firebase from 'firebase'

export default {
  name: 'HomePage',
  data() {

    return {
      email:"",
      password:""
    }
  },
  methods: {
    // signIn: function () {
    //   firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
    //     function (user) {
    //       alert("Well done! You signed in ")
    //
    //     },
    //     function(error){
    //       alert('Oops.'+error.message)
    //     }
    //   )
    //
    //
    // }
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
</style>

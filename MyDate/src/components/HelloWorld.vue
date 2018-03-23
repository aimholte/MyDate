
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Date Categories</h2>

    <ul>

      <li>
        <a
          href="http://localhost:63342/software-design/src/Graphics/Money_Page_Active.html?_ijt=jehk1mh3f6i14uh2pbaf32sm0r"
          target="_blank"
        >
          Active
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          City
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Something New
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Vintage
        </a>
      </li>


    </ul>

  </div>
</template>

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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

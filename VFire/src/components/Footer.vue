<template>
<div>
  <p>
    This is the Footer
  </p>
  <h1>
    {{title}}
  </h1>
</div>
</template>

<script>
  import {bus} from "../main"

  export default {
        name: "Footer",
    props: {
          title:{
            type:String
          }
    },
    data(){
          return{
            copyright: "Copyright 2017"
          }
    },
    created(){
          bus.$on("titleChanged", (data)=> {
            this.title = data;
          })
    }
    }
</script>

<style scoped>

</style>

<template>
<div>
  <h1 v-bind:onclick="changeTitle">{{title}}</h1>
  <p>
    This is the Header
  </p>
</div>
</template>

<script>
  import {bus} from "../main"
    export default {
        name: "Header",
      props:{
          title:{
            type:String
          }
      },
      methods:{
          changeTitle: function () {
            // this.$emit('changeTitle',"Vue Wizards")
            this.title= "Vue Wizards";
            bus.$emit('titleChanged',"Vue Wizards ")
          },
        data(){
            return{
              title: "Vue Ninjas"
            }
        }
      }
    }
</script>

<style scoped>

</style>

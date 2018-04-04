// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import CheckboxRadio from 'vue-checkbox-radio';

Vue.use(CheckboxRadio);

import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.use(VueFire);

//import the Hello component
import Home from './components/HelloWorld'
// import the About component
import About from './components/About'
//import DP
import DP from './components/DP'
// import Money
import Money from './components/Money'
//import DatePage
import datepage from './components/DatePage'
//import Database
import EventData from "./assets/Event_Ideas"
// import Display
import practiceDisplay from "./components/PracticeDisplay"

import SignUp from './components/SignUp'



import firebase from 'firebase'



const routes =[
  {
    path: '/', component: Home
  },
  {
    path: '/about', component: About
  },
  {
    path: "/DP", component: DP
  },
  {
    path: "/amount", component: Money
  },
  {
    path: "/datePage", component: datepage
  },
  {
    path: "/display", component: practiceDisplay
  },
  {
    path:'/signUp', component:SignUp
  }

];

const router = new VueRouter ({
  routes,
  mode: 'history'
});


Vue.config.productionTip = false;





let config = {
  apiKey: "AIzaSyDuT479lV1X3i2zSMA0fossYWgUpXqHszY",
  authDomain: "mydate-login.firebaseapp.com",
  databaseURL: "https://mydate-login.firebaseio.com",
  projectId: "mydate-login",
  storageBucket: "mydate-login.appspot.com",
  messagingSenderId: "539033525072"
};
firebase.initializeApp(config);

/* eslint-disable no-new */


// function goToMoney(){
//   window.location = "http://localhost:8080/amount"
// }


export const bus = new Vue();

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',


  router
}).$mount('#app');


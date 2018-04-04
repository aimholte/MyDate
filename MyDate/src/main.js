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

console.log(EventData);



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
    path: "/datepage", component: datepage
  },
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});
Vue.config.productionTip = false;

/* eslint-disable no-new */


// function goToMoney(){
//   window.location = "http://localhost:8080/amount"
// }


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',


  router
}).$mount('#app');


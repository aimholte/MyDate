// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CheckboxRadio from 'vue-checkbox-radio';

Vue.use(CheckboxRadio);

import VueRouter from 'vue-router'
Vue.use(VueRouter);

//import the Hello component
import HelloWorld from './components/HelloWorld'
// import the About component
import About from './components/About'
//import DP
import DP from './components/DP'



function goToMoney() {


}

const routes =[
  {
    path: '/', component: HelloWorld
  },
  {
    path: '/about', component: About
  },
  {
    path: "/DP", component: DP
  }
];

const router = new VueRouter ({
  routes,
  mode: 'history'
});
Vue.config.productionTip = false;

/* eslint-disable no-new */



new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',

  router
}).$mount('#app');


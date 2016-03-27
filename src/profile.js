import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router);

//new Vue({
//  el: 'body',
//  components: { App }
//})

var router = new Router({
  history: false, // use history=false when testing
  saveScrollPosition: true
})

router.map({
  '/aa': {
    component: App
  }
});

router.start(App, '#app');


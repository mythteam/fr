import Vue from 'vue'
import AppLayout from './App'
import VueRouter from 'vue-router'
import LandingPage from './views/LandingPage'
import OrderPage from './views/Order'
import PartnersPage from './views/Partners'
// import PartnersPage from './Test'

Vue.config.debug = true;

Vue.use(VueRouter);

var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})


var App = Vue.extend(AppLayout)

var router = new VueRouter({
  linkActiveClass: 'weui_bar_item_on'
})

router.map({
  '/landingpage': {
    component: LandingPage
  },
  '/partners': {
    component: PartnersPage
  },
  '/order': {
    component: OrderPage
  },
  '/me': {
    component (resolve) {
      require(['./views/Me.vue'], resolve)
    }
  }
});
router.beforeEach(function (transition) {
  if (transition.to.path == '/') {
    router.go('/landingpage');
  }
  transition.next()
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')

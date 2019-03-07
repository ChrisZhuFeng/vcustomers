// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './Routes'
import axios from './axios-list'
import store from './store/store'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.prototype.$axios = axios

const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})

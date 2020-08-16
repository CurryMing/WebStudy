import Vue from "vue"
import App from "./App.vue"
import store from './store/index.js'
import router from './router/index.js'

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store: store,
  router: router,
  render: c => c(App)
})
import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import todolist from './plugin/toDoList/index'
Vue.use(todolist)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局组件
// import loading from './components/Loading'
// Vue.component(loading.name,loading)

import loading from './plugin/Loading/index'
Vue.use(loading,{
  title: '慢慢来...'
})

new Vue({
  render: h => h(App)
}).$mount('#app')

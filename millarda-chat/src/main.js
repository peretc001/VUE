import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

import './assets/css/main.min.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
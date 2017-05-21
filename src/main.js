import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './style/main.less';
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

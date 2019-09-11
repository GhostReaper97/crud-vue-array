import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'
import 'bootstrap'
import './style/theme.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

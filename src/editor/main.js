import 'animate.css'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import Request from './request'
import store from '../store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/widgets'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios, Request)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

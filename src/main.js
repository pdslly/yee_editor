import 'animate.css'
import Vue from 'vue'
import App from './App.vue'

import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './widgets/text'
import './widgets/image'
import './widgets/button'
import './widgets/divider'
import './widgets/music'
import './widgets/rect'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

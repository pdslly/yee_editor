import Vue from 'vue'
import App from './App.vue'

import 'animate.css'
import '@/widgets/widgets'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

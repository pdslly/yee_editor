// import 'animate.css'
import Vue from 'vue'
import App from './App.vue'

import '@/widgets/widgets'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import 'animate.css'
import Vue from 'vue'
import App from './App.vue'

import Button from '@/widgets/button/element'
import Divider from '@/widgets/divider/element'
import Image from '@/widgets/image/element'
import Music from '@/widgets/music/element'
import Rect from '@/widgets/rect/element'
import Text from '@/widgets/text/element'

Vue.component(Button.name, Button)
Vue.component(Divider.name, Divider)
Vue.component(Image.name, Image)
Vue.component(Music.name, Music)
Vue.component(Rect.name, Rect)
Vue.component(Text.name, Text)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

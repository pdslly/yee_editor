import Vue from 'vue'

import Music from './config/music/element'
import Script from './config/script/element'

import Button from './base/button/element'
import Divider from './base/divider/element'
import Image from './base/image/element'
import Rect from './base/rect/element'
import Text from './base/text/element'

import Scan from './effect/scan/element'
import Snow from './effect/snow/element'
import Rain from './effect/rain/element'
import Custom from './effect/custom/element'

Vue.component(Music.name, Music)
Vue.component(Script.name, Script)

Vue.component(Button.name, Button)
Vue.component(Divider.name, Divider)
Vue.component(Image.name, Image)
Vue.component(Rect.name, Rect)
Vue.component(Text.name, Text)

Vue.component(Scan.name, Scan)
Vue.component(Snow.name, Snow)
Vue.component(Rain.name, Rain)
Vue.component(Custom.name, Custom)
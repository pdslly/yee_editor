import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addConfigElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addConfigElement({
    type: Element.name,
    name: '音乐',
    icon: 'icon-music',
    eData: {type: Element.name, isConfig: true, configName: 'bgm', uid: 'c_bgm', attrCtrl: Control.name, resize: false, music: '', autoplay: true, styleObj: {width: 30, height: 30, left: 330, top: 15, color: '#000000'}}
})

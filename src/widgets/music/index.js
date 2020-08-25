import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addElement({
    type: Element.name,
    name: '音乐',
    icon: 'icon-music',
    eData: {type: Element.name, attrCtrl: Control.name, resize: false, music: '', autoplay: true, styleObj: {width: 30, height: 30, left: 0, top: 0, color: '#000000'}}
})

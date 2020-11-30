import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addEffectElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addEffectElement({
    type: Element.name,
    name: '下雨',
    icon: 'icon-rain',
    eData: {type: Element.name, attrCtrl: Control.name, resize: false, 'data-delay': 0, size: 200, styleObj: {width: 375, height: 667, left: 0, top: 0}}
})

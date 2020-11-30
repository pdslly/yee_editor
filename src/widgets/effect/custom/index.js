import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addEffectElement} from '@/utils/element'

import img from '@/assets/img/heart.png'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addEffectElement({
    type: Element.name,
    name: '自定义',
    icon: 'icon-custom',
    eData: {type: Element.name, attrCtrl: Control.name, resize: false, 'data-delay': 0, img, size: 30, styleObj: {width: 375, height: 667, left: 0, top: 0}}
})

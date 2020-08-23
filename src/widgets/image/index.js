import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addElement} from '@/utils/element'

import img from '@/assets/img/noimg.png'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addElement({
    type: Element.name,
    name: '图片',
    icon: 'icon-image',
    eData: {type: Element.name, attrCtrl: Control.name, 'data-delay': 0, img, styleObj: {width: 200, height: 200, radius: 0, angel: 0, left: 0, top: 0}}
})

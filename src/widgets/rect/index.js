import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addElement({
    type: Element.name,
    name: '矩形',
    icon: 'icon-rect',
    eData: {type: Element.name, attrCtrl: Control.name, 'data-delay': 0, glow: false, styleObj: {width: 100, height: 100, radius: 0, left: 0, top: 0, backgroundColor: '#FF0000', borderColor: '#FFFFFF', borderWidth: 0, borderStyle: 'solid'}}
})

import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addElement({
    type: Element.name,
    name: '分割线',
    icon: 'icon-split',
    eData: {type: Element.name, attrCtrl: Control.name, resize: false, 'data-delay': 0, styleObj: {width: 375, height: 1, left: 0, top: 100, radius: 0, backgroundColor: '#000000'}}
})

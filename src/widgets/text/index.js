import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addElement({
    type: Element.name,
    name: '文本',
    icon: 'icon-image',
    eData: {type: Element.name, ctrl: Control.name, 'data-delay': 0, value: '文本', styleObj: {width: 24, height: 12, backgroundColor: 'transparent', color: 'black', angel: 0, fontSize: 12, left: 0, top: 0}}
})

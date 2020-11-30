import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addBaseElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addBaseElement({
    type: Element.name,
    name: '文本',
    icon: 'icon-text',
    eData: {type: Element.name, attrCtrl: Control.name, 'data-delay': 0, value: '文本', styleObj: {width: 24, height: 12, color: '#000000', angel: 0, fontSize: 12, fontWeight: 'normal', left: 0, top: 0}}
})

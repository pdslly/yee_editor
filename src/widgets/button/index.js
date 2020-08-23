import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import Event from './event.vue'
import {addElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)
Vue.component(Event.name, Event)

addElement({
    type: Element.name,
    name: '按钮',
    icon: 'icon-button',
    eData: {type: Element.name, attrCtrl: Control.name, evtCtrl: Event.name, eventObj: {}, 'data-delay': 0, value: '按钮', styleObj: {width: 100, height: 30, backgroundColor: '#FFFFFF', color: '#000000', fontSize: 12, angel: 0, radius: 0, left: 0, top: 0}}
})

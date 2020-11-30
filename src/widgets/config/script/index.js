import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addConfigElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addConfigElement({
    type: Element.name,
    name: '脚本',
    icon: 'icon-script',
    eData: {type: Element.name, isConfig: true, configName: 'script', uid: 'c_script', value: `console.log("hello world")`, attrCtrl: Control.name}
})

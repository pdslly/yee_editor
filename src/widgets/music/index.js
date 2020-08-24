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
    eData: {type: Element.name, attrCtrl: Control.name, resize: false, music: 'http://m10.music.126.net/20200824034301/4147ed870169006bb41c0192c244fc0c/ymusic/535d/030e/555a/d7b482d2b14dfc237871b06792f2e829.mp3', autoplay: true, styleObj: {width: 30, height: 30, left: 0, top: 0, color: '#000000'}}
})

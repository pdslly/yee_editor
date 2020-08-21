import Vue from 'vue'
import Element from './element.vue'
import Control from './control.vue'
import {addElement} from '@/utils/element'

Vue.component(Element.name, Element)
Vue.component(Control.name, Control)

addElement({
    type: Element.name,
    name: '图片',
    icon: 'icon-image',
    eData: {type: Element.name, ctrl: Control.name, 'data-delay': 0, img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597691538763&di=ec439862b27a5838f76ef839954f56ac&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb64543a98226cffc7a951157b8014a90f703ea9c.jpg', styleObj: {width: 200, height: 200, angel: 0, left: 0, top: 0}}
})

import Debug from './debug'

export let BaseElements = []
export let EffectElements = []
export let ConfigElements = []
let elementIcons = {}

export function addConfigElement({type, name, icon, eData}) {
    ConfigElements.push({type, name, icon, eData})
    Debug.log(`注册配置组件[${name}]`)
    elementIcons[type] = icon
}

export function addBaseElement({type, name, icon, eData}) {
    BaseElements.push({type, name, icon, eData})
    Debug.log(`注册基础组件[${name}]`)
    elementIcons[type] = icon
}

export function addEffectElement({type, name, icon, eData}) {
    EffectElements.push({type, name, icon, eData})
    Debug.log(`注册特效组件[${name}]`)
    elementIcons[type] = icon
}

export function getIconByType(type) {
    return elementIcons[type]
}

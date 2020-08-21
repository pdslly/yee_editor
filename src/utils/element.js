import Debug from './debug'

let elements = []
let elementIcons = {}

export function addElement({type, name, icon, eData}) {
    elements.push({type, name, icon, eData})
    Debug.log(`注册组件[${name}]`)
    elementIcons[type] = icon
}

export function getIconByType(type) {
    return elementIcons[type]
}

export default elements

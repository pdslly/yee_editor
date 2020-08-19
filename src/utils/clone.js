function isObject(target) {
    return typeof target === 'object'
}

function deepClone(target) {
    if (!isObject(target)) return target
    let dest = Array.isArray(target) ? [] : {}
    for (let key in target) {
        if (key === '__ob__') continue
        dest[key] = isObject(target[key]) ? deepClone(target[key]) : target[key]
    }
    return dest
}

export default deepClone
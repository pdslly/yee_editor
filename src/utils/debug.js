const {NODE_ENV} = process.env

function log(msg) {
    if (NODE_ENV === 'development') console.log(msg)
}

function error(msg) {
    console.error(msg)
}

function warn(condition, msg) {
    if (condition) console.warn(msg)
}

export default {log, warn, error}
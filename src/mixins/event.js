export default {
    props: {
        eventObj: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        formatEvent(event) {
            let ret = {}
            let self = this
            if (!event || this.isEditMode) return ret
            let {type, name, value} = event
            ret[type] = function(evt) {
                Function('evt', 'name', 'value', `this[name](evt, value)`).call(self, evt, name, value)
            }
            return ret
        }
    }
}
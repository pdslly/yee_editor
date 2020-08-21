import {formatElementStyle} from '@/utils/style'

export default {
    props: {
        styleObj: {
            type: Object,
            default: () => ({})
        },
        event: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        formatElementStyle,
        formatEvent(event) {
            let ret = {}
            let self = this
            for (let name in event) {
                ret[name] = function(evt) {
                    Function('$event', `with(this){${event[name]}}`).call(self, evt)
                }
            }
            return ret
        },
        openUrl(url) {
            console.log(url)
        }
    }
}
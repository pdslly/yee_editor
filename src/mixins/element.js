export default {
    props: {
        isEditMode: Boolean,
        xRatio: Number,
        yRatio: Number,
        styleObj: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        calcXAttr(attr) {
            const {xRatio} = this
            return Math.round(attr * xRatio)
        },
        calcYAttr(attr) {
            const {yRatio} = this
            return Math.round(attr * yRatio)
        }
    }
}
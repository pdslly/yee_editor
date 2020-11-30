export default {
    methods: {
        init() {
            const can = this.$refs.wrap
            const {width, height} = can.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            this.width = width
            this.height = height
            can.width = width * dpr
            can.height = height * dpr
            this.ctx = can.getContext('2d')
            this.ctx.scale(dpr, dpr)
        }
    }
}
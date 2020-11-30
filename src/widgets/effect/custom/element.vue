<template>
  <canvas class="w-custom animated animate__animated" ref="wrap" :style="formatElementStyle(styleObj)">
      YOUR BROWSER CANNOT SUPPORT CANVAS
  </canvas>
</template>

<script>
import element from '@/mixins/element'
import canvas from '@/mixins/canvas'
import {random} from '@/utils/math'

function formatElementStyle({width = 375, height = 667, top = 0, left = 0, zIndex = 1 }) {
    return {
        zIndex,
        width: `${this.calcXAttr(width)}px`, 
        height: `${this.calcYAttr(height)}px`, 
        top: `${this.calcYAttr(top)}px`,
        left: `${this.calcXAttr(left)}px`
    }
}

export default {
    name: 'w-custom',
    props: {
        size: Number,
        img: String
    },
    mixins: [element, canvas],
    data() {
        this.width = 0
        this.height = 0
        this.ctx = null
        this.particles = []
        this.timer = null
        this.obj = new Image()
        return {}
    },
    mounted() {
        this.init()
        this.$watch('size', this.redraw)
        this.$watch('img', this.redraw, {immediate: true})
    },
    methods: {
        formatElementStyle,
        redraw() {
            const {img, timer, obj} = this
            clearInterval(timer)

            obj.src = img
            obj.onload = () => {
                this.create()
                this.timer = setInterval(this.update, 50);
            }
        },
        update() {
            const {ctx, width, height} = this
            ctx.clearRect(0, 0, width, height)
            this.draw()
            this.move()
        },
        draw() {
            const {particles, size, ctx, obj} = this
            const {naturalWidth, naturalHeight} = obj
            
            for (let i = 0; i < size; i++) {
                var part = particles[i]
                
                ctx.beginPath()
                ctx.globalAlpha = part.opacity
                ctx.drawImage(obj, 0, 0, naturalWidth, naturalHeight, part.x, part.y, part.w, part.h)
            }
        },
        move() {
            const {particles, size, width, height} = this
            for (var i = 0; i < size; i++) {
                const part = particles[i]
                part.x -= part.speedX     
                part.y -= part.speedY  

                if (part.x < -part.w) part.x = width
                if (part.x > width) part.x = -part.w
                if (part.y < -part.h) part.y = height
                if (part.y > height) part.y = 0
            }
        },
        create() {
            const {width, height, size, obj} = this
            const {naturalWidth, naturalHeight} = obj
            const ratio = naturalHeight / naturalWidth
            for (let i = 0; i < size; i++) {
                let w = random(10, 30)
                let h = w * ratio
                this.particles.push({
                    w, h,
                    x: Math.random() * width,
                    y: Math.random() * height,
                    speedX: random(-3, 3),
                    speedY: random(-3, 3),
                    opacity: random(0.3, 1)
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.w-custom {
    position: absolute;
    display: block;
    outline: none;
    user-select: none;
    box-sizing: border-box;
    overflow: hidden;
    pointer-events: none;
}
</style>
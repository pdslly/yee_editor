<template>
  <canvas class="w-snow animated animate__animated" ref="wrap" :style="formatElementStyle(styleObj)">
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
    name: 'w-rain',
    props: {
        size: Number
    },
    mixins: [element, canvas],
    data() {
        this.width = 0
        this.height = 0
        this.ctx = null
        this.particles = []
        this.timer = null
        return {}
    },
    mounted() {
        this.init()
        this.$watch('size', this.redraw, {immediate: true})
    },
    methods: {
        formatElementStyle,
        redraw() {
            clearInterval(this.timer)
            this.create()
            this.timer = setInterval(this.update, 50);
        },
        update() {
            const {ctx, width, height} = this
            ctx.clearRect(0, 0, width, height)
            this.draw()
            this.move()
        },
        draw() {
            const {particles, size, ctx} = this
            for (let i = 0; i < size; i++) {
                var part = particles[i]
                
                ctx.beginPath()
                ctx.moveTo(part.x, part.y)
                ctx.lineTo(part.x + part.len * part.speedX, part.y + part.len * part.speedY)
                ctx.strokeStyle = `rgba(255, 255, 255, ${part.opacity})`
                ctx.stroke()
            }
        },
        move() {
            const {particles, size, width, height} = this
            for (var i = 0; i < size; i++) {
                const part = particles[i]
                part.x += part.speedX     
                part.y += part.speedY  

                if (part.y > height || part.x > width) {                                                             
                    part.x = Math.random() * width
                    part.y = -20
                }
            }
        },
        create() {
            const {width, height, size} = this
            for (let i = 0; i < size; i++) {
                this.particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    opacity: Math.random(),
                    speedX: random(-4, 4),
                    speedY: random(10, 20),
                    len: Math.random(),
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.w-snow {
    position: absolute;
    display: block;
    outline: none;
    user-select: none;
    box-sizing: border-box;
    overflow: hidden;
    pointer-events: none;
}
</style>
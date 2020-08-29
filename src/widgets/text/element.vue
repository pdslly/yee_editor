<template>
  <div class="w-text animated animate__animated" :style="formatElementStyle(styleObj)">{{value}}</div>
</template>

<script>
import element from '@/mixins/element'

function formatElementStyle({width = 'auto', height = 'auto', top = 0, left = 0, angel = 0, zIndex = 1, radius = 0, fontSize = 16, fontWeight = 'normal', color = '#FFF', backgroundColor = 'transparent' }) {
    return {
        color,
        zIndex,
        fontWeight,
        backgroundColor,
        width: `${this.calcXAttr(width)}px`,
        height: `${this.calcYAttr(height)}px`, 
        top: `${this.calcYAttr(top)}px`, 
        left: `${this.calcXAttr(left)}px`,
        borderRadius: `${radius}px`,
        transform: `rotateZ(${angel}deg)`,
        fontSize: `${this.calcXAttr(fontSize)}px`
    }
}

export default {
    props: {
        value: {
            type: String,
            default: '测试文本'
        }
    },
    name: 'w-text',
    mixins: [element],
    methods: {
        formatElementStyle
    }
}
</script>

<style lang="scss" scoped>
.w-text {
    position: absolute;
    outline: none;
    user-select: none;
    transform-origin: center center;
}
</style>
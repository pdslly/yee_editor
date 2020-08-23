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
        width: `${width}px`, 
        height: `${height}px`, 
        top: `${top}px`, 
        left: `${left}px`,
        borderRadius: `${radius}px`,
        transform: `rotateZ(${angel}deg)`,
        fontSize: `${fontSize}px`
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
    transform-origin: 'top center';
}
</style>
<template>
  <div class="w-rect animated animate__animated" :style="formatElementStyle(styleObj)"></div>
</template>

<script>
import element from '@/mixins/element'

function formatElementStyle({width = 30, height = 30, opacity = 1, top = 0, left = 0, zIndex = 1, radius = 0, backgroundColor = '#FF0000', borderColor = '#FFFFFF', borderWidth = 0, borderStyle = 'solid' }) {
    return {
        zIndex,
        opacity,
        backgroundColor,
        borderColor,
        borderStyle,
        borderRadius: `${radius}px`,
        borderWidth: `${borderWidth}px`,
        width: `${this.calcXAttr(width)}px`, 
        height: `${this.calcYAttr(height)}px`, 
        top: `${this.calcYAttr(top)}px`,
        left: `${this.calcXAttr(left)}px`
    }
}

export default {
    name: 'w-rect',
    mixins: [element],
    methods: {
        formatElementStyle
    }
}
</script>

<style lang="scss" scoped>
@keyframes glow {
    from {
        top: 100%;
    }
    to {
        top: 0%;
    }
}
.w-rect {
    position: absolute;
    display: block;
    outline: none;
    user-select: none;
    box-sizing: border-box;
    overflow: hidden;
}
</style>
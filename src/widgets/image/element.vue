<template>
  <div class="w-image animated animate__animated" :style="formatElementStyle(styleObj, img)"></div>
</template>

<script>
import element from '@/mixins/element'

function formatElementStyle({width = 'auto', height = 'auto', top = 0, left = 0, angel = 0, zIndex = 1, radius = 0, color = '#FFF' }, img) {
    return {
        color,
        zIndex,
        width: `${this.calcXAttr(width)}px`, 
        height: `${this.calcYAttr(height)}px`, 
        top: `${this.calcYAttr(top)}px`, 
        left: `${this.calcXAttr(left)}px`,
        borderRadius: `${radius}px`,
        backgroundImage: `url(${img})`,
        transform: `rotateZ(${angel}deg)`,
    }
}

export default {
    props: {
        img: {
            type: String
        }
    },
    name: 'w-image',
    mixins: [element],
    methods: {
        formatElementStyle
    }
}
</script>

<style lang="scss" scoped>
.w-image {
    position: absolute;
    display: block;
    outline: none;
    user-select: none;
    background-size: 100% 100%;
    transform-origin: center center;
}
</style>
<template>
  <img :src="img" class="w-image animated animate__animated" :style="formatElementStyle(styleObj)"/>
</template>

<script>
import element from '@/mixins/element'

function formatElementStyle({width = 'auto', height = 'auto', top = 0, left = 0, angel = 0, zIndex = 1, radius = 0, color = '#FFF' }) {
    return {
        color,
        zIndex,
        width: `${width}px`, 
        height: `${height}px`, 
        top: `${top}px`, 
        left: `${left}px`,
        borderRadius: `${radius}px`,
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
    transform-origin: 'top center';
}
</style>
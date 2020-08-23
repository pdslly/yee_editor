<template>
  <div class="w-divider animated animate__animated" :style="formatElementStyle(styleObj)"></div>
</template>

<script>
import element from '@/mixins/element'

function formatElementStyle({width = 375, height = 1, top = 0, left = 0, zIndex = 1, radius = 0, backgroundColor = '#000000' }) {
    return {
        zIndex,
        backgroundColor,
        borderRadius: `${radius}px`,
        width: `${width}px`, 
        height: `${height}px`, 
        top: `${top}px`,
        left: `${left}px`
    }
}

export default {
    name: 'w-divider',
    mixins: [element],
    methods: {
        formatElementStyle
    }
}
</script>

<style lang="scss" scoped>
.w-divider {
    position: absolute;
    display: block;
    outline: none;
    user-select: none;
}
</style>
<template>
  <div class="w-scan animated animate__animated" :style="formatElementStyle(styleObj)">
      <div class="glow"></div>
  </div>
</template>

<script>
import element from '@/mixins/element'

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
    name: 'w-scan',
    props: {
        glow: Boolean
    },
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
.w-scan {
    position: absolute;
    display: block;
    outline: none;
    user-select: none;
    box-sizing: border-box;
    overflow: hidden;
    pointer-events: none;
    .glow {
        position: relative;
        pointer-events: none;
        height: 5%;
        background-image: linear-gradient(to top, transparent 0%, rgba(255, 255, 255, .3) 100%);
        animation: glow 3s infinite linear;
    }
}
</style>
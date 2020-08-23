<template>
  <button class="w-button" :style="formatElementStyle(styleObj)" v-on="formatEvent(eventObj)">{{value}}</button>
</template>

<script>
import element from '@/mixins/element'
import event from '@/mixins/event'

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
        value: String,
    },
    name: 'w-button',
    mixins: [element, event],
    methods: {
        formatElementStyle,
        openUrl(evt, url) {
            window.open(url)
        }
    }
}
</script>

<style lang="scss" scoped>
.w-button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    user-select: none;
    transform-origin: 'top center';
    border: none;
}
</style>
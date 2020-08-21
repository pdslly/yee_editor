<template>
  <button class="w-button" :style="formatElementStyle(styleObj)" v-on="formatEvent(event)">{{value}}</button>
</template>

<script>
import element from '@/mixins/element'

export default {
    props: {
        value: {
            type: String
        },
        styleObj: {
            type: Object,
            default: () => ({})
        },
        event: {
            type: Object,
            default: () => ({})
        }
    },
    name: 'w-button',
    mixins: [element]
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
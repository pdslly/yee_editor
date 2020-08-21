<template>
  <div class="w-text animated animate__animated" :style="formatElementStyle(styleObj)"  v-on="formatEvent(event)">{{value}}</div>
</template>

<script>
import element from '@/mixins/element'

export default {
    props: {
        value: {
            type: String,
            default: '测试文本'
        },
        styleObj: {
            type: Object,
            default: () => ({})
        }
    },
    name: 'w-text',
    mixins: [element]
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
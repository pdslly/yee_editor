<template>
  <img :src="img" class="w-image animated animate__animated" :style="formatElementStyle(styleObj)" />
</template>

<script>
import element from '@/mixins/element'

export default {
    props: {
        img: {
            type: String
        },
        styleObj: {
            type: Object,
            default: () => ({})
        }
    },
    name: 'w-image',
    mixins: [element]
}
</script>

<style lang="scss" scoped>
.w-image {
    position: absolute;
    display: inline-block;
    min-width: 20px;
    min-height: 20px;
    outline: none;
    user-select: none;
    transform-origin: 'top center';
}
</style>
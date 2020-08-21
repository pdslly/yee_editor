<template>
  <img :src="img" class="w-image animated animate__animated" :style="formatElementStyle(styleObj)"  v-on="formatEvent(event)" />
</template>

<script>
import element from '@/mixins/element'

export default {
    props: {
        img: {
            type: String
        }
    },
    name: 'w-image',
    mixins: [element]
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
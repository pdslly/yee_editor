<template>
  <div class="w-music" :class="{playing: !isEditMode && playing}" @click="play" :style="formatElementStyle(styleObj)">
      <i class="icon icon-music2"></i>
      <audio ref="audio" v-if="!isEditMode" :src="music" :autoplay="autoplay"></audio>
  </div>
</template>

<script>
import element from '@/mixins/element'

function formatElementStyle({width = 375, height = 1, top = 0, left = 0, zIndex = 1, color = '#000000' }) {
    return {
        zIndex,
        color,
        width: `${width}px`, 
        height: `${height}px`, 
        top: `${top}px`,
        left: `${left}px`
    }
}

export default {
    name: 'w-music',
    mixins: [element],
    props: {
        music: String,
        autoplay: Boolean
    },
    data () {
        return {
            playing: false
        }
    },
    created() {
        this.playing = this.autoplay
    },
    methods: {
        formatElementStyle,
        play() {
            if (this.isEditMode) return false
            let el = this.$refs.audio
            el[this.playing ? 'pause' : 'play']()
            this.playing = !this.playing
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes rotate {
    from {
        transform: rotateZ(0);
    }
    to {
        transform: rotateZ(360deg);
    }
}
.w-music {
    position: absolute;
    display: flex;
    outline: none;
    user-select: none;
    font-size: 36px;
    align-items: center;
    justify-content: center;
    transform-origin: center center;
    &.playing {
        animation: rotate infinite 4s linear;
    }
}
</style>
<template>
    <div class="wrap is_animate_demo" :data-animate="animate" @mouseenter="selected = active = true" @mouseleave="mouseLeave">
        <span class="txt animate__animated" :class="{[animate]: active}" @animationend="animationEnd">{{animate.split('__')[1]}}</span>
    </div>
</template>

<script>
export default {
    name: 'animate-item',
    props: {
        animate: String
    },
    data() {
        this.timer = null
        this.selected = false
        return {
            active: false
        }
    },
    methods: {
        mouseLeave() {
            clearTimeout(this.timer)
            this.selected = this.active = false
        },
        animationEnd() {
            this.active = false
            if (this.selected) this.timer = setTimeout(() => {this.active = true}, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.wrap {
    height: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $clightfont;
    border: 1px solid $cborder;
    cursor: pointer;
    user-select: none;
    margin-bottom: 1rem;
    overflow: hidden;
    .txt {
        pointer-events: none;
        user-select: none;
        font-size: 0.6rem;
    }
}
</style>
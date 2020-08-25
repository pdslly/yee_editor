<template>
    <el-row type="flex" align="center" justify="space-around" class="wrap">
        <el-button class="icon icon-x-center" @click="setXCenter" title="水平居中" size="mini"></el-button>
        <el-button class="icon icon-y-center" @click="setYCenter" title="垂直居中" size="mini"></el-button>
        <el-button class="icon icon-fill" @click="setFullscreen" title="全屏" size="mini"></el-button>
    </el-row>
</template>

<script>
import {mapMutations} from 'vuex'
import {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT} from '@/utils/constant'

export default {
    name: 'quick-position',
    props: {
        element: Object
    },
    methods: {
        ...mapMutations(['pushHistory']),
        setXCenter() {
            const style = this.element.styleObj
            const {width} = style
            this.pushHistory('设置水平居中')
            style.left = Math.round((DRAW_RECT_WIDTH - width) / 2)
        },
        setYCenter() {
            const style = this.element.styleObj
            const {height} = style
            this.pushHistory('设置垂直居中')
            style.top = Math.round((DRAW_RECT_HEIGHT - height) / 2)
        },
        setFullscreen() {
            const style = this.element.styleObj
            this.pushHistory('设置全屏铺满')
            style.left = 0
            style.top = 0
            style.width = DRAW_RECT_WIDTH
            style.height = DRAW_RECT_HEIGHT
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.wrap {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
    .icon {
        font-size: 0.8rem;
    }
}
</style>
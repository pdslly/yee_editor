<template>
    <div class="panel" :style="{width: `${DRAW_RECT_WIDTH}px`, height: `${DRAW_RECT_HEIGHT}px`}" ref="panel" @mousedown="panelMouseDown" @mousemove="panelMouseMove" @mouseup="panelMouseUp">
        <section class="page" :style="formatPageStyle(pageData.style)">
            <component @click.native.stop="eleFocus($event, item)" :xRatio="1" :yRatio="1" v-for="item in pageData.elements" :key="item.uid" :is="item.type" v-bind="item" :isEditMode="true"/>
        </section>
        <div v-show="curEle" data-action="move" class="ctrl-rect" :style="ctrlRectStyle">
            <i class="dot lt" data-action="resize-lt" style="left: -5px; top: -5px; cursor: nw-resize;"></i>
            <i class="dot rt" data-action="resize-rt" style="right: -5px; top: -5px; cursor: ne-resize;"></i>
            <i class="dot lb" data-action="resize-lb" style="left: -5px; top: calc(100% - 4px); cursor: ne-resize;"></i>
            <i class="dot rb" data-action="resize-rb" style="right: -5px; top: calc(100% - 4px); cursor: nw-resize;"></i>
            <!-- <i class="dot mt" data-action="move" style="left: calc(50% - 4px); top: -5px;"></i>
            <i class="dot tt" data-action="rotate" style="left: calc(50% - 4px); top: -24px;"></i>
            <span class="line"></span> -->
        </div>
    </div>
</template>

<script>
import Once from 'once'
import {mapGetters, mapMutations} from 'vuex'
import {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT} from '@/utils/constant'
import {formatCtrlRectStyle, formatPageStyle} from '@/utils/style'

const initHistory = Once((vm) => {vm.pushHistory('初始化')})

export default {
    name: 'draw-panel',
    data() {
        this.actionObj = null
        Object.assign(this, {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT})
        return {}
    },
    computed: {
        ...mapGetters({
            pageData: 'getCurPageData',
            curEle: 'getElement',
            cacheCtrlData: 'getCacheCtrlData'
        }),
        ctrlRectStyle() {
            if (!this.curEle) return {}
            return formatCtrlRectStyle(this.curEle.styleObj)
        }
    },
    created() {
        initHistory(this)
    },
    mounted() {
        this.listenKeyDown()
    },
    beforeDestroy() {
        window.onkeydown = function() {}
    },
    methods: {
        ...mapMutations(['setElementUID', 'pushHistory', 'updateCacheCtrlData']),
        formatPageStyle,
        eleFocus (_, item) {
            // const {offsetWidth, offsetHeight} = target
            // item.styleObj.width = offsetWidth + 1
            // item.styleObj.height = offsetHeight
            this.setElementUID(item.uid)
            this.updateCacheCtrlData(item)
        },
        panelMouseDown({target, clientX, clientY}) {
            const {action} = target.dataset
            if (target === this.$refs.panel || !this.curEle || !action) {
                this.actionObj = null
                this.setElementUID(null)
                return false
            }
            this.actionObj = {action, originX: clientX, originY: clientY}
        },
        panelMouseMove({clientX, clientY}) {
            if (!this.actionObj || !this.curEle) return false
            const {action, originX, originY} = this.actionObj
            const style = this.curEle.styleObj
            const canResize = this.curEle.resize !== false
            let {top, left, width, height} = this.cacheCtrlData
            let disX = clientX - originX
            let disY = clientY - originY
            top = top >> 0
            left = left >> 0
            width = width >> 0
            height = height >> 0
            if (action === 'move') {
                if (disX >= -left && disX <= DRAW_RECT_WIDTH - width - left) {
                    style.left = left + disX
                }
                if (disY >= -top && disY <= DRAW_RECT_HEIGHT - height - top) {
                    style.top = top + disY
                }
            } else if (action === 'resize-rb' && canResize) {
                if (disX >= -width && disX <= DRAW_RECT_WIDTH - width - left) {
                    style.width = width + disX
                }
                if (disY >= -height && disY <= DRAW_RECT_HEIGHT - height - top) {
                    style.height = height + disY
                }
            } else if (action === 'resize-lt' && canResize) {
                if (disX >= -left && disX <= width) {
                    style.width = width - disX
                    style.left = left + disX
                }
                if (disY >= -top && disY <= height) {
                    style.height = height - disY
                    style.top = top + disY
                }
            } else if (action === 'resize-rt' && canResize) {
                if (disX >= -width && disX <= DRAW_RECT_WIDTH - width - left) {
                    style.width = width + disX
                }
                if (disY >= -top && disY <= height) {
                    style.height = height - disY
                    style.top = top + disY
                }
            } else if (action === 'resize-lb' && canResize) {
                if (disY >= -height && disY <= DRAW_RECT_HEIGHT - height - top) {
                    style.height = height + disY
                }
                if (disX >= -left && disX <= width) {
                    style.width = width - disX
                    style.left = left + disX
                }
            }
        },
        panelMouseUp() {
            if (!this.actionObj || !this.curEle) return false
            this.actionObj = null
            this.updateCacheCtrlData(this.curEle)
            this.pushHistory('修改图层')
        },
        listenKeyDown() {
            window.onkeydown = e => {
                if (!this.curEle) return
                const style = this.curEle.styleObj
                if (e.keyCode == '38') {
                    style.top--
                    this.updateCacheCtrlData(this.curEle)
                } else if (e.keyCode == '40') {
                    style.top++
                    this.updateCacheCtrlData(this.curEle)
                } else if (e.keyCode == '37') {
                    style.left--
                    this.updateCacheCtrlData(this.curEle)
                } else if (e.keyCode == '39') {
                    style.left++
                    this.updateCacheCtrlData(this.curEle)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    position: relative;
    flex-shrink: 0;
    background-size: 5px 5px;
    background-color: #FFF;
    background-image: linear-gradient(to right, #EEE 1px, transparent 1px), linear-gradient(to bottom, #EEE 1px, transparent 1px);
    .page {
        height: 100%;
        position: relative;
        flex-shrink: 0;
        .element {
            position: absolute;
        }
    }
    .ctrl-rect {
        position: absolute;
        z-index: 1000;
        transform-origin: 'top center';
        border: 1px dotted $cprimary;
        cursor: move;
        .line {
            position: absolute;
            left: 50%;
            top: -15px;
            width: 1px;
            height: 11px;
            background: $cprimary;
        }
        .dot {
            position: absolute;
            width: 7px;
            height: 7px;
            border: 1px solid $cprimary;
            &.tt {
                cursor: grabbing;
                border-radius: 7px;
            }
        }
    }
}
</style>
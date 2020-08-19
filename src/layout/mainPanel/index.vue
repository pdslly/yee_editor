<template>
  <div class="wrap" ref="wrap" @mousedown="mouseDownHandle" @mouseup="mouseUpHandle" @mousemove="mouseMoveHandle">
      <switch-panel></switch-panel>
      <draw-panel></draw-panel>
      <view-panel></view-panel>
      <ctrl-panel></ctrl-panel>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CtrlPanel from './panels/ctrlPanel'
import DrawPanel from './panels/drawPanel'
import ViewPanel from './panels/viewPanel'
import SwitchPanel from './panels/switchPanel'

export default {
    name: 'yee-main-panel',
    components: {CtrlPanel, DrawPanel, ViewPanel, SwitchPanel},
    data () {
        this.moveVm = null
        this.moveOffsetX = 0
        this.moveOffsetY = 0
        return {}
    },
    computed: mapGetters(['getVm']),
    methods: {
        mouseDownHandle ({clientX, clientY, target}) {
            const {uid, move} = target.dataset
            if (move !== 'true' || target.parentNode !== this.$refs.wrap) return false
            const {offsetTop, offsetLeft} = target
            this.moveVm = this.getVm(uid)
            this.moveOffsetX = clientX - offsetLeft
            this.moveOffsetY = clientY - offsetTop
        },
        mouseUpHandle() {
            this.moveVm = null
            this.moveOffsetX = this.moveOffsetY = 0
        },
        mouseMoveHandle({clientX, clientY}) {
            const {moveVm, moveOffsetX, moveOffsetY} = this
            if (!moveVm) return false
            moveVm.setPosition(clientY - moveOffsetY, clientX - moveOffsetX)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.wrap {
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
}
</style>
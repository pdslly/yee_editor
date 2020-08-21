<template>
  <div class="panel" data-move="true" :data-uid="this._uid" :style="{top: `${posX}px`, left: `${posY}px`}">
      <div class="button icon icon-undo" @click="setHistoryIndexMinus" :class="{enable: historyIndex > 0}" title="上一步"></div>
      <div class="button icon icon-redo" @click="setHistoryIndexPlus" title="下一步" :class="{enable: histories.length > historyIndex + 1}"></div>
      <div class="button icon icon-level-up" @click="levelUpHandle" :class="{enable: curEle && curEle.styleObj.zIndex < 999}" title="向上一级"></div>
      <div class="button icon icon-level-down" @click="levelDownHandle" :class="{enable: curEle && curEle.styleObj.zIndex > 0}" title="向下一级"></div>
      <div class="button icon icon-view" title="预览"></div>
      <div class="button icon icon-save" title="保存"></div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
    name: 'ctrl-panel',
    data: () => ({
        posX: 40,
        posY: 40 
    }),
    created() {
        this.setVms(this)
    },
    computed: {
        ...mapGetters({
            curEle: 'getElement',
            historyIndex: 'getCurHistoryIndex',
            histories: 'getHistories'
        })
    },
    methods: {
        ...mapMutations(['setVms', 'setHistoryIndexPlus', 'setHistoryIndexMinus']),
        setPosition(posX, posY) {
            Object.assign(this, {posX, posY})
        },
        levelUpHandle() {
            this.curEle.styleObj.zIndex ++
        },
        levelDownHandle() {
            this.curEle.styleObj.zIndex --
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    position: absolute;
    z-index: 2;
    padding: 1.6rem 0;
    width: 2.2rem;
    background: $csecondary;
    border-radius: 1.6rem;
    cursor: move;
    .button {
        text-align: center;
        font-size: 1.2rem;
        line-height: 2.2rem;
        cursor: not-allowed;
        color: $clightfont;
        border-top: 1px solid $cborder;
        pointer-events: none;
        &:last-child {
            border-bottom: 1px solid $cborder;
        }
        &.enable {
            pointer-events: unset;
            cursor: pointer;
            color: #FFF;
        }
    }
}
</style>
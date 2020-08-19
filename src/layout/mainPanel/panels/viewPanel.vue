<template>
  <div class="panel" v-show="mode === MODE_VIEW" :style="{width: `${DRAW_RECT_WIDTH}px`, height: `${DRAW_RECT_HEIGHT}px`}">
      <component @click.native.stop="eleFocus($event, item)" v-for="item in pageData.elements" :key="item.uid" :is="item.name" v-bind="item" />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT, MODE_EDIT, MODE_VIEW} from '@/utils/constant'
import wText from '@/widgets/text/index'
import wImage from '@/widgets/image/index'

export default {
    name: 'view-panel',
    data() {
        Object.assign(this, {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT, MODE_EDIT, MODE_VIEW})
        return {}
    },
    components: {wText, wImage},
    computed: {
        ...mapGetters({
            pageData: 'getCurPageData',
            mode: 'getMode'
        })
    },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    position: relative;
    flex-shrink: 0;
    background-color: #FFF;
    .element {
        position: absolute;
    }
}
</style>
<template>
    <div class="panel">
        <main id="viewMain" class="main" :style="{width: `${DRAW_RECT_WIDTH}px`, height: `${DRAW_RECT_HEIGHT}px`}">
            <section v-for="(page, index) in metadata" :key="index" class="page">
                <component @click.native.stop="eleFocus($event, item)" v-for="item in page.elements" :key="item.uid" :is="item.type" v-bind="item" />
            </section>
        </main>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FullPage from 'phy-touch/full_page/alloy_touch.full_page'
import Transform from 'phy-touch/transformjs/transform'

import {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT} from '@/utils/constant'
import wText from '@/widgets/text/index'
import wImage from '@/widgets/image/index'

window.Transform = Transform

export default {
    name: 'view-panel',
    data() {
        Object.assign(this, {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT})
        return {}
    },
    components: {wText, wImage},
    mounted() {
        new FullPage('#viewMain', {
            animationEnd() {}
        })
    },
    computed: {
        ...mapGetters({
            metadata: 'getMetaData'
        })
    },
    methods: {
        genEleData({show}) {
            return {'data-show': show}
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    overflow: hidden;
    .main {
        height: 100%;
    }
    .page {
        height: 100%;
        position: relative;
        flex-shrink: 0;
        background-color: #FFF;
        .element {
            position: absolute;
        }
    }
}
</style>
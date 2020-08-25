<template>
    <div class="panel">
        <main ref="viewMain" class="main" :style="{width: `${DRAW_RECT_WIDTH}px`, height: `${DRAW_RECT_HEIGHT}px`}">
            <section v-for="(page, index) in metadata" :key="index" class="page" :style="formatPageStyle(page.style)">
                <component v-for="item in page.elements" :xRatio="1" :yRatio="1" :key="item.uid" :is="item.type" v-bind="item"/>
            </section>
        </main>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FullPage from '@/assets/js/fullpage'

import {formatPageStyle} from '@/utils/style'
import {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT} from '@/utils/constant'

export default {
    name: 'view-panel',
    data() {
        Object.assign(this, {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT})
        return {}
    },
    mounted() {
        new FullPage(this.$refs.viewMain, {
            animationEnd() {}
        })
    },
    computed: {
        ...mapGetters({
            metadata: 'getMetaData'
        })
    },
    methods: {
        formatPageStyle
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    overflow: hidden;
    background-color: #FFF;
    .main {
        height: 100%;
    }
    .page {
        height: 100%;
        position: relative;
        flex-shrink: 0;
        .element {
            position: absolute;
        }
    }
}
</style>
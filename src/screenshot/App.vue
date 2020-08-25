<template>
    <div class="panel">
        <main ref="viewMain" class="main">
            <section v-for="(page, index) in metadata" :key="index" class="page" :style="formatPageStyle(page.style)">
                <component v-for="item in page.elements"  :xRatio="xRatio" :yRatio="yRatio" :key="item.uid" :is="item.type" v-bind="item"/>
            </section>
        </main>
    </div>
</template>

<script>
import {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT, DEF_METADATA} from '@/utils/constant'
import {formatPageStyle} from '@/utils/style'

let metadata = window.yee_metadata || DEF_METADATA

export default {
    data() {
        return {
            metadata,
            xRatio: window.innerWidth / DRAW_RECT_WIDTH,
            yRatio: window.innerHeight / DRAW_RECT_HEIGHT
        }
    },
    methods: {
        formatPageStyle
    }
}
</script>

<style lang="scss">
@import '../assets/scss/common';
.panel {
    flex: 1;
    .main {
        height: 100%;
        .page {
            height: 100%;
            position: relative;
            flex-shrink: 0;
        }
    }
}
</style>
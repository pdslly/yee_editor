<template>
    <div class="app">
        <main class="main">
            <component v-if="metaData.bgm" :xRatio="xRatio" :yRatio="yRatio" :is="metaData.bgm.type" v-bind="metaData.bgm"/>
            <component v-if="metaData.script" :is="metaData.script.type" v-bind="metaData.script"/>
            <div ref="viewMain" class="wrap">
                <section v-for="(page, index) in metaData.pages" :key="index" class="page" :style="formatPageStyle(page.style)">
                    <component v-for="item in page.elements" :xRatio="xRatio" :yRatio="yRatio" :key="item.uid" :is="item.type" v-bind="item"/>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT, DEF_METADATA} from '@/utils/constant'
import {formatPageStyle} from '@/utils/style'

let metaData = window.yee_metadata || DEF_METADATA

export default {
    data() {
        return {
            metaData,
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
.app {
    flex: 1;
    .main, .wrap, .page {
        position: relative;
        height: 100%;
    }
}
</style>
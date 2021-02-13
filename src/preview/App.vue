<template>
    <div class="app">
        <main v-if="loading" class="loading">
            <div class="loader"></div>
        </main>
        <main class="main">
            <component v-if="metaData.bgm && !loading" :xRatio="xRatio" :yRatio="yRatio" :is="metaData.bgm.type" v-bind="metaData.bgm"/>
            <component v-if="metaData.script && !loading" :is="metaData.script.type" v-bind="metaData.script"/>
            <div ref="viewMain" class="wrap">
                <section v-for="(page, index) in metaData.pages" :key="index" class="page" :style="formatPageStyle(page.style)">
                    <component v-for="item in page.elements" :xRatio="xRatio" :yRatio="yRatio" :key="item.uid" :is="item.type" v-bind="item"/>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
import Preloader from 'preloader'
import FullPage from '@/assets/js/fullpage'
import {DRAW_RECT_WIDTH, DRAW_RECT_HEIGHT, DEF_METADATA, IS_PROD, LOCAL_STORAGE_KEY} from '@/utils/constant'
import {formatPageStyle} from '@/utils/style'
import {ParseImgsFromPages} from '@/utils/images'

let metaData = window.yee_metadata
let loader = Preloader({xhrImages: false})

if (IS_PROD) {
    metaData = metaData || DEF_METADATA
} else {
    try {
        metaData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    } catch (e) {
        metaData = metaData || DEF_METADATA
    }
}

let imgs = ParseImgsFromPages(metaData.pages)
imgs.forEach(img => loader.addImage(img))

export default {
    data() {
        return {
            metaData,
            loading: true,
            progressRatio: 0,
            xRatio: window.innerWidth / DRAW_RECT_WIDTH,
            yRatio: window.innerHeight / DRAW_RECT_HEIGHT
        }
    },
    created() {
        loader.on('complete', this.onComplete)
        loader.load()
    },
    methods: {
        formatPageStyle,
        onComplete() {
            this.loading = false
            this.$nextTick(this.initFullPage)
        },
        initFullPage() {
            new FullPage(this.$refs.viewMain, {
                animationEnd() {}
            })
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/common';

@keyframes spin {
  0% { 
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  0% { 
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.app {
    flex: 1;
    .main, .wrap, .page {
        position: relative;
        height: 100%;
    }
    .loading {
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
    }
    .loader {
        flex-shrink: 0;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #16a085;
        animation: spin 1.7s linear infinite;
        z-index: 11;
        
        &:before {
            content: "";
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #e74c3c;
            animation: spin-reverse .6s linear infinite;
        }
        
        &:after {
            content: "";
            position: absolute;
            top: 15px;
            left: 15px;
            right: 15px;
            bottom: 15px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #f9c922;
            animation: spin 1s linear infinite;
        }
    }
}
</style>
<template>
    <div class="wrap" :class="{selected: curPageIndex === index}" @click="setPageIndex(index)">
        <i class="icon icon-black"></i>
        <span class="txt">{{page.name}}</span>
        <div class="right">
            <span @click.stop="copyPage(page)" title="复制" class="icon icon-copy"></span>
            <span @click.stop="delPage(index)" title="删除" class="icon icon-delete"></span>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
    name: 'page-item',
    inheritAttrs: false,
    props: {
        index: Number,
        page: Object
    },
    computed: {
        ...mapGetters({
            curPageIndex: 'getCurPageIndex'
        })
    },
    methods: {
        ...mapMutations(['setPageIndex', 'delPage', 'addPage', 'pushHistory']),
        copyPage() {
            this.pushHistory('复制新页面')
            this.addPage({name: '未命名页面', eIndex: 0, style: this.page.style, elements: []})
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.wrap {
    height: 2rem;
    display: flex;
    padding: 0 0.5rem;
    box-sizing: border-box;
    align-items: center;
    color: $clightfont;
    background-color: $csecondary;
    border-bottom: $cborder 1px solid;
    cursor: pointer;
    &:first-child {
        border-top: $cborder 1px solid;
    }
    &.selected {
        background-color: rgba($chigh, 0.14);
    }
    .txt {
        margin-left: 1rem;
        font-size: 0.6rem;
    }
    .right {
        margin-left: auto;
        span {
            margin: 0 4px;
            font-size: 0.8rem;
            color: $chigh;
        }
    }
}
</style>
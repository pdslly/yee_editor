<template>
    <div class="wrap" :class="{selected: curEle && curEle.uid === widget.uid}" @click="setElementUID(widget.uid)">
        <i class="icon" :class="getIconByType(widget.type)"></i>
        <span class="txt">{{widget.uid}}</span>
        <div class="right">
            <span @click.stop="addWidget(widget)" title="复制" class="icon icon-copy"></span>
            <span @click.stop="delWidget(widget.uid)" title="删除" class="icon icon-delete"></span>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import {getIconByType} from '@/utils/element'

export default {
    name: 'widget-item',
    inheritAttrs: false,
    props: {
        widget: Object
    },
    computed: {
        ...mapGetters({
            curEle: 'getElement'
        })
    },
    methods: {
        ...mapMutations(['setElementUID', 'delWidget', 'addWidget']),
        getIconByType
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
<template>
    <div class="wrap" @click="clickHandle(type, eData)">
        <i class="icon" :class="icon"></i>
        <span class="txt">{{name}}</span>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name: 'component-item',
    props: {
        type: String,
        icon: String,
        name: String,
        eData: Object
    },
    methods: {
        ...mapMutations(['updateCacheCtrlData', 'addWidget', 'pushHistory']),
        clickHandle(type, widget) {
            this.addWidget(widget)
            this.updateCacheCtrlData(widget)
            this.pushHistory(`添加组件[${type}]`)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.wrap {
    height: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $clightfont;
    border: 1px solid $cborder;
    cursor: pointer;
    user-select: none;
    margin-bottom: 1rem;
    &:hover {
        color: $chigh;
    }
    .txt {
        margin-top: 0.5rem;
        font-size: 0.6rem;
    }
}
</style>
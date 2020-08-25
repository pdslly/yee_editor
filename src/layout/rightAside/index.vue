<template>
    <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="组件属性" name="attr">
            <template v-if="curEle">
                <quick-position :element="curEle"></quick-position>
                <component :element="curEle" :is="curEle.attrCtrl"></component>
            </template>
            <p class="no-ele" v-else>当前没有可操作元素</p>
        </el-tab-pane>
        <el-tab-pane label="组件事件" name="event">
            <component v-if="curEle && curEle.evtCtrl" :element="curEle" :is="curEle.evtCtrl"></component>
            <p class="no-ele" v-else>当前元素没有可用事件</p>
        </el-tab-pane>
        <el-tab-pane label="动画库" name="animate">
            <tab-animate-library></tab-animate-library>
        </el-tab-pane>
        <el-tab-pane label="页面配置" name="page">
            <tab-page-setting></tab-page-setting>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import {mapGetters} from 'vuex'

import TabAnimateLibrary from './tabs/animateLibrary'
import TabPageSetting from './tabs/pageSetting'
import quickPosition from '@/modules/quickPosition'

export default {
    name: 'yee-right-aside',
    components: {TabAnimateLibrary, TabPageSetting, quickPosition},
    data: () => ({
        activeName: 'attr'
    }),
    computed: {
        ...mapGetters({
            curEle: 'getElement'
        })
    },
    methods: {
        handleClick() {}
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.tabs {
    display: flex;
    height: 100%;
    flex-direction: column;
    .no-ele {
        text-align: center;
        color: $clightfont;
        font-size: 0.8rem;
    }
    /deep/ .el-tabs__content {
        flex: 1;
        overflow: auto;
    }
}
</style>
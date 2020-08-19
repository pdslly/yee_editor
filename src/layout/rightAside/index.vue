<template>
    <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="属性" name="attr">
            <component v-if="curEle" :element="curEle" :is="curEle.ctrl"></component>
        </el-tab-pane>
        <el-tab-pane label="事件" name="event">事件</el-tab-pane>
        <el-tab-pane label="动画" name="animate">
            <tab-animate-library></tab-animate-library>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import {mapGetters} from 'vuex'

import TabAnimateLibrary from './tabs/animateLibrary'
import WTextCtrl from '@/widgets/text/control'
import WImageCtrl from '@/widgets/image/control'

export default {
    name: 'yee-right-aside',
    components: {TabAnimateLibrary, WTextCtrl, WImageCtrl},
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
    
}
</style>
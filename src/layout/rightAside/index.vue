<template>
    <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="属性" name="attr">属性</el-tab-pane>
        <el-tab-pane label="事件" name="event">事件</el-tab-pane>
        <el-tab-pane label="动画" name="animate">
            <tab-animate-library></tab-animate-library>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import TabAnimateLibrary from './tabs/animateLibrary'

export default {
    name: 'yee-right-aside',
    components: {TabAnimateLibrary},
    data: () => ({
        activeName: 'attr'
    }),
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
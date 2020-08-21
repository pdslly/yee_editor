<template>
    <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="组件库" name="componentsLibrary">
            <tab-components-library></tab-components-library>
        </el-tab-pane>
        <el-tab-pane label="页面管理" name="pageManage">页面管理</el-tab-pane>
        <el-tab-pane label="元素管理" name="treeStruct">
            <tab-element-manage></tab-element-manage>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import TabComponentsLibrary from './tabs/componentsLibrary'
import TabElementManage from './tabs/elementManage'

export default {
    name: 'yee-left-aside',
    components: {TabComponentsLibrary, TabElementManage},
    data: () => ({
        activeName: 'componentsLibrary'
    }),
    methods: {
        handleClick() {}
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
</style>
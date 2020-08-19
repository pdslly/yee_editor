<template>
    <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="组件库" name="componentsLibrary">
            <tab-components-library></tab-components-library>
        </el-tab-pane>
        <el-tab-pane label="页面管理" name="pageManage">页面管理</el-tab-pane>
        <el-tab-pane label="树结构" name="treeStruct">树结构</el-tab-pane>
    </el-tabs>
</template>

<script>
import TabComponentsLibrary from './tabs/componentsLibrary'

export default {
    name: 'yee-left-aside',
    components: {TabComponentsLibrary},
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

.tabs {
    
}
</style>
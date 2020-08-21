<template>
    <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="组件库" name="componentsLibrary">
            <tab-components-library></tab-components-library>
        </el-tab-pane>
        <el-tab-pane label="页面管理" name="pageManage">
            <tab-page-manage></tab-page-manage>
        </el-tab-pane>
        <el-tab-pane label="组件管理" name="widgetManage">
            <tab-widget-manage></tab-widget-manage>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import TabComponentsLibrary from './tabs/componentsLibrary'
import TabPageManage from './tabs/pageManage'
import TabWidgetManage from './tabs/widgetManage'

export default {
    name: 'yee-left-aside',
    components: {TabComponentsLibrary, TabPageManage, TabWidgetManage},
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
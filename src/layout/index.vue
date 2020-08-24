<template>
    <el-container class="container">
        <el-header class="layout-header">
            <yee-header></yee-header>
        </el-header>
        <el-container class="main-container">
            <el-aside style="width: 400px;">
                <yee-left-aside></yee-left-aside>
            </el-aside>
            <el-main class="layout-main">
                <yee-main-panel></yee-main-panel>
            </el-main>
            <el-aside style="width: 400px;">
                <yee-right-aside></yee-right-aside>
            </el-aside>
        </el-container>
    </el-container>
</template>

<script>
import YeeHeader from './header'
import YeeLeftAside from './leftAside'
import YeeRightAside from './rightAside'
import YeeMainPanel from './mainPanel'

export default {
    name: "yee-editor",
    components: {YeeHeader, YeeMainPanel, YeeLeftAside, YeeRightAside}
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.container {
    background-color: $cprimary;
    .main-container {
        overflow: hidden;
    }
    .layout-header {
        padding: 0;
        background-color: $csecondary;
        border-bottom: 1px solid $cborder;
    }
    .layout-main {
        display: inline-flex;
        border-left: 1px solid $cborder;
        border-right: 1px solid $cborder;
    }
}
</style>
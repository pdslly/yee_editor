<template>
    <div class="panel">
        <el-divider>打开新页面</el-divider>
        <el-divider>自定义事件</el-divider>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'tab-page-setting',
    computed: {
        ...mapGetters({
            pageData: 'getCurPageData'
        })
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";
</style>
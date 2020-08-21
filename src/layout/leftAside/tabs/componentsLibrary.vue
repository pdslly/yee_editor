<template>
    <div class="panel">
        <el-divider>基础组件</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8" v-for="(item, index) in elements" :key="index">
                <component-item v-bind="item"></component-item>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ComponentItem from '@/components/componentItem'
import Elements from '@/utils/element'

export default {
    name: 'tab-components-library',
    components: {ComponentItem},
    data() {
        this.elements = Elements
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    box-sizing: border-box;
    padding: 0 0.5rem;
    .title {
        margin-top: 0;
        font-size: 1rem;
        color: $clightfont;
    }
    .row-flex {
        flex-wrap: wrap;
    }
}
</style>
<template>
    <div class="panel">
        <el-form size="mini" label-width="80px">
            <el-form-item label="名称">
                <el-input size="mini" clearable v-model="pageData.name"></el-input>
            </el-form-item>
            <el-form-item label="背景色">
                <el-color-picker v-model="pageData.style.backgroundColor" size="mini"></el-color-picker>
            </el-form-item>
            <el-form-item label="背景图">
                <el-input size="mini" clearable v-model="pageData.style.backgroundImage"></el-input>
            </el-form-item>
            <el-form-item label="背景大小">
                <el-radio-group v-model="pageData.style.backgroundSize">
                    <el-radio label="contain">contain</el-radio>
                    <el-radio label="cover">cover</el-radio>
                    <el-radio label="100% 100%">fit</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="背景设置">
                <el-radio-group v-model="pageData.style.backgroundRepeat">
                    <el-radio label="repeat">重复</el-radio>
                    <el-radio label="no-repeat">不重复</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="背景位置">
                <el-radio-group v-model="pageData.style.backgroundPosition">
                    <el-radio label="top center">上</el-radio>
                    <el-radio label="center center">中</el-radio>
                    <el-radio label="bottom center">下</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
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

.panel {
    box-sizing: border-box;
    padding-right: 0.5rem;
}
</style>
<template>
    <div class="panel">
        <el-collapse v-model="collapseIndex" :accordion="false">
            <el-collapse-item title="基础设置" :name="1">
                <el-form size="mini" label-width="80px">
                    <el-form-item label="元素ID">
                        <el-input size="mini" :value="element.uid" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="元素类型">
                        <el-input size="mini" :value="element.type" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="动画延迟">
                        <el-input size="mini" type="number" v-model="element['data-delay']"></el-input>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="排版设置" :name="2">
                <el-form size="mini" label-width="80px">
                    <el-form-item label="上边距">
                        <el-input size="mini" type="number" v-model="element.styleObj.top"></el-input>
                    </el-form-item>
                    <el-form-item label="左边距">
                        <el-input size="mini" type="number" v-model="element.styleObj.left"></el-input>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="属性设置" :name="3">
                <el-form size="mini" label-width="80px">
                    <el-form-item label="背景色">
                        <el-color-picker v-model="element.styleObj.backgroundColor" size="mini"></el-color-picker>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: 'w-divider-ctrl',
    props: {
        element: Object
    },
    data() {
        return {
            collapseIndex: 1
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";
</style>
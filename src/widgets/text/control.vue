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
                    <el-form-item label="宽度">
                        <el-input size="mini" type="number" v-model="element.styleObj.width"></el-input>
                    </el-form-item>
                    <el-form-item label="高度">
                        <el-input size="mini" type="number" v-model="element.styleObj.height"></el-input>
                    </el-form-item>
                    <el-form-item label="上边距">
                        <el-input size="mini" type="number" v-model="element.styleObj.top"></el-input>
                    </el-form-item>
                    <el-form-item label="左边距">
                        <el-input size="mini" type="number" v-model="element.styleObj.left"></el-input>
                    </el-form-item>
                    <el-form-item label="旋转角度">
                        <el-slider :min="0" :max="360" v-model="element.styleObj.angel"></el-slider>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
            <el-collapse-item title="属性设置" :name="3">
                <el-form size="mini" label-width="80px">
                    <el-form-item label="文本颜色">
                        <el-color-picker v-model="element.styleObj.color" size="mini"></el-color-picker>
                    </el-form-item>
                    <el-form-item label="背景颜色">
                        <el-color-picker v-model="element.styleObj.backgroundColor" size="mini"></el-color-picker>
                    </el-form-item>
                    <el-form-item label="圆角">
                        <el-slider :min="0" :max="20" v-model="element.styleObj.radius"></el-slider>
                    </el-form-item>
                    <el-form-item label="文本内容">
                        <el-input size="mini" v-model="element.value" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="文本大小">
                        <el-input size="mini" type="number" v-model="element.styleObj.fontSize"></el-input>
                    </el-form-item>
                    <el-form-item label="文本字重">
                        <el-radio-group v-model="element.styleObj.fontWeight">
                            <el-radio label="lighter">细体</el-radio>
                            <el-radio label="normal">默认</el-radio>
                            <el-radio label="bolder">粗体</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: 'w-text-ctrl',
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
@import "../../assets/scss/variables";
</style>
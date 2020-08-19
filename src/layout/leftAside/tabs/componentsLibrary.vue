<template>
    <div class="panel">
        <p class="title">基础组件</p>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <component-item @click.native="addTextHandle" icon="icon-text">文本</component-item>
            </el-col>
            <el-col :span="8">
                <component-item @click.native="addImageHandle" icon="icon-image">图片</component-item>
            </el-col>
            <el-col :span="8">
                <component-item icon="icon-button">按钮</component-item>
            </el-col>
            <el-col :span="8">
                <component-item icon="icon-rect">矩形边框</component-item>
            </el-col>
            <el-col :span="8">
                <component-item icon="icon-split">分割线</component-item>
            </el-col>
            <el-col :span="8">
                <component-item icon="icon-map">地图</component-item>
            </el-col>
            <el-col :span="8">
                <component-item icon="icon-movie">视频</component-item>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import ComponentItem from '@/components/componentItem' 

export default {
    name: 'tab-components-libraty',
    components: {ComponentItem},
    methods: {
        ...mapMutations(['addWidget']),
        addTextHandle() {
            this.addWidget({name: 'wText', value: '测试文本', styleObj: {width: 'auto', height: 'auto', backgroundColor: 'transparent', color: 'black', angel: 0, fontSize: 12, left: 0, top: 0}})
        },
        addImageHandle() {
            this.addWidget({name: 'wImage', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597691538763&di=ec439862b27a5838f76ef839954f56ac&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fb64543a98226cffc7a951157b8014a90f703ea9c.jpg', styleObj: {width: 200, height: 200, angel: 0, left: 0, top: 0}})
        },
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    box-sizing: border-box;
    padding: 0 0.5rem;
    .title {
        color: $clightfont;
    }
    .row-flex {
        flex-wrap: wrap;
    }
}
</style>
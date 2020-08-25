<template>
    <div class="panel" @click="addAnimate">
        <el-divider>提示动画</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__none"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__bounce"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__flash"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__heartBeat"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__rubberBand"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__shakeX"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__shakeY"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__swing"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__tada"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__wobble"></animate-item>
            </el-col>
        </el-row>
        <el-divider>Back In</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__backInLeft"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__backInRight"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__backInDown"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__backInUp"></animate-item>
            </el-col>
        </el-row>
        <el-divider>Bounce In</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__bounceIn"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__bounceInDown"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__bounceInLeft"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__bounceInRight"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__bounceInUp"></animate-item>
            </el-col>
        </el-row>
        <el-divider>Fade In</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__fadeIn"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__fadeInLeft"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__fadeInRight"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__fadeInDown"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__fadeInUp"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__fadeInTopLeft"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__fadeInTopRight"></animate-item>
            </el-col>
        </el-row>
        <el-divider>Flip In</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__flipInX"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__flipInY"></animate-item>
            </el-col>
        </el-row>
        <el-divider>Rotate In</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__rotateIn"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__rotateInDownLeft"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__rotateInDownRight"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__rotateInUpLeft"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__rotateInUpRight"></animate-item>
            </el-col>
        </el-row>
        <el-divider>Zoom In</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__zoomIn"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__zoomInDown"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__zoomInLeft"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__zoomInRight"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__zoomInUp"></animate-item>
            </el-col>
        </el-row>
        <el-divider>Slide In</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__slideInDown"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__slideInLeft"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__slideInRight"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__slideInUp"></animate-item>
            </el-col>
        </el-row>
        <el-divider>Other In</el-divider>
        <el-row type="flex" :gutter="20" class="row-flex">
            <el-col :span="8">
                <animate-item animate="animate__jackInTheBox"></animate-item>
            </el-col>
            <el-col :span="8">
                <animate-item animate="animate__rollIn"></animate-item>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import AnimateItem from '@/components/animateItem'

export default {
    name: 'tab-components-libraty',
    components: {AnimateItem},
    computed: {
        ...mapGetters({
            curEle: 'getElement'
        })
    },
    methods: {
        addAnimate({target}) {
            if (!target.classList.contains('is_animate_demo')) return false
            if (!this.curEle) {
                this.$message({
                    message: '没有可用元素',
                    type: 'warning'
                })
                return false
            }
            this.curEle['data-show'] = target.dataset['animate']
        }
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
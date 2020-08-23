<template>
    <el-button-group class="panel">
        <el-button class="mode" :class="{selected: mode === MODE_EDIT}" @click="selEditMode">编辑模式</el-button>
        <el-button class="mode" :class="{selected: mode === MODE_VIEW}" @click="selViewMode">预览模式</el-button>
    </el-button-group>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {MODE_EDIT, MODE_VIEW} from '@/utils/constant'

export default {
    name: 'switch-panel',
    data() {
        Object.assign(this, {MODE_EDIT, MODE_VIEW})
        return {}
    },
    computed: {
        ...mapGetters({
            mode: 'getMode'
        })
    },
    methods: {
        ...mapMutations(['setMode']),
        selEditMode() {
            this.setMode(MODE_EDIT)
        },
        selViewMode() {
            this.setMode(MODE_VIEW)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    margin-bottom: 2rem;
}
</style>
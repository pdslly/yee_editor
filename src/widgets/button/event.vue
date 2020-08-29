<template>
    <div class="panel">
        <el-divider>预定义事件</el-divider>
        <el-button size="mini" @click="removeEvt">取消事件绑定</el-button>
        <el-button size="mini" @click="addOpenUrlEvt" :class="{selected: element.eventObj.name === 'openUrl'}">跳转新页面</el-button>
        <el-divider>事件预设值</el-divider>
        <el-input type="textarea" :rows="8" v-model="element.eventObj.value"></el-input>
    </div>
</template>

<script>
export default {
    name: 'w-button-event',
    props: {
        element: Object
    },
    methods: {
        removeEvt() {
            let ele = this.element
            ele.eventObj = {}
        },
        addOpenUrlEvt() {
            let ele = this.element
            ele.eventObj = {type: 'click', name: 'openUrl', value: 'https://ifront.net'}
        },
        addCustomUrlEvt() {
            let ele = this.element
            ele.eventObj = {
                type: 'click', 
                name: 'customEvt',
                value: `function (evt) { alert("hello world") }`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.panel {
    box-sizing: border-box;
    padding: 0 0.5rem;
}
</style>
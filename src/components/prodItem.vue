<template>
    <div class="wrap" @click="apply(content)" title="点击应用">
        <div class="gausu" :style="{backgroundImage: img}"></div>
        <div class="view" :style="{backgroundImage: img}"></div>
        <div class="attr">
            <div class="tit">{{title}}</div>
            <div class="other">{{author}}</div>
        </div>
    </div>  
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    name: 'prod-item',
    props: {
        img: String,
        title: String,
        author: String,
        content: String,
        createdAt: String
    },
    methods: {
        ...mapMutations(['setMetadata', 'setElementUID', 'setPageIndex', 'pushHistory']),
        apply(data) {
            try {
                this.setElementUID(null)
                this.pushHistory('保存')
                this.setPageIndex(0)
                this.setMetadata(JSON.parse(data))
                this.pushHistory('应用新示例')
            } catch(e) {
                this.$message.error(e.message)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.wrap {
    cursor: pointer;
    position: relative;
    margin: 0 0.5rem 0.5rem;
    display: inline-flex;
    list-style: none;
    flex-direction: column;
    width: calc(50% - 1rem);
    height: 14rem;
    border-radius: 0.3rem;
    overflow: hidden;
    border: 1px solid $cborder;
    box-sizing: border-box;
    .gausu {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: 100%;
        filter: blur(20px);
        opacity: 0.6;
    }
    .view {
        position: relative;
        height: 11rem;
        background-size: auto 10rem;
        background-repeat: no-repeat;
        background-position: center;
    }
    .attr {
        display: flex;
        position: relative;
        flex: 1;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: $cprimary;
        .tit {
            font-size: 0.8rem;
            margin-bottom: 0.2rem;
            color: $chigh;
        }
        .other {
            font-size: 0.6rem;
            color: $clightfont;
        }
    }
}
</style>
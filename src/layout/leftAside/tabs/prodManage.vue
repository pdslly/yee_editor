<template>
    <div class="panel" v-infinite-scroll="loadList" :infinite-scroll-distance="50">
        <prod-item v-for="(item, index) in prodList" :key="index" v-bind="item" :img="genProdImg(item.flag)"></prod-item>
        <div class="tail">
            <span v-if="nomore">没有更多了</span>
            <i v-else class="loading el-icon-loading"></i>
        </div>
    </div>
</template>

<script>
import ProdItem from '@/components/prodItem'

export default {
    name: 'tab-prod-manage',
    components: {ProdItem},
    data() {
        return {
            count: 0,
            nomore: false,
            prodList: [],
            queryForm: {
                pageno: 1,
                pagesize: 6
            }
        }
    },
    created() {
        this.fetchList().then(
            ({list, count}) => {
                this.count = count
                this.prodList = list
            }
        )
    },
    methods: {
        fetchList() {
            return this.axios.get("/yee-list", {params: this.queryForm}).catch(
                ({msg}) => {
                    this.$message.error(msg)
                }
            )
        },
        loadList() {
            const {count, prodList} = this
            if (prodList.length >= count) {
                this.nomore = true
                return false
            }
            this.queryForm.pageno++
            this.fetchList().then(
                ({list, count}) => {
                    this.count = count
                    this.prodList = prodList.concat(list)
                }
            )
        },
        genProdImg(flag) {
            return `url(${process.env.VUE_APP_DOMAIN}screenshots/${flag}.png)`
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/variables";

.panel {
    overflow: hidden;
    .tail {
        text-align: center;
        line-height: 2rem;
        font-size: 0.8rem;
        color: $clightfont;
        .loading {
            font-size: 1.2rem;
        }
    }
}
</style>
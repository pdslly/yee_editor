<template>
  <div class="panel">
      <page-item v-for="(page, index) in metadata" :key="index" :index="index" :page="page"></page-item>
      <el-row type="flex" style="margin-top: 1rem;" justify="center">
          <el-button @click="addNewPage" size="mini">添加新页面</el-button>
      </el-row>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import PageItem from '@/components/pageItem'

export default {
    name: 'tab-element-manage',
    components: {PageItem},
    computed: {
        ...mapGetters({
            metadata: 'getMetaData'
        })
    },
    methods: {
        ...mapMutations(['addPage', 'pushHistory']),
        addNewPage() {
            this.pushHistory('新增空白页面')
            this.addPage({name: '未命名页面', eIndex: 0, style: {backgroundColor: '', backgroundImage: '', backgroundSize: 'cover', backgroundPosition: 'center center',  backgroundRepeat: 'no-repeat'}, elements: []})
        }
    }
}
</script>

<style>

</style>
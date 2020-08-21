<template>
  <div class="panel">
      <page-item v-for="(page, index) in metadata" :key="index" :index="index" :page="page"></page-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import PageItem from '@/components/pageItem'

export default {
    name: 'tab-element-manage',
    components: {PageItem},
    computed: {
        ...mapGetters({
            metadata: 'getMetaData'
        })
    }
}
</script>

<style>

</style>
<template>
  <div class="panel">
      <widget-item v-for="item in pageData.elements" :key="item.uid" :widget="item"></widget-item>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import WidgetItem from '@/components/widgetItem'

export default {
    name: 'tab-widget-manage',
    components: {WidgetItem},
    computed: {
        ...mapGetters({
            pageData: 'getCurPageData'
        })
    }
}
</script>

<style>

</style>
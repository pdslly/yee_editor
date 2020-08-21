<template>
  <div class="panel">
      <elementItem v-for="item in pageData.elements" :key="item.uid" :widget="item"></elementItem>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ElementItem from '@/components/elementItem'

export default {
    name: 'tab-element-manage',
    components: {ElementItem},
    computed: {
        ...mapGetters({
            pageData: 'getCurPageData'
        })
    }
}
</script>

<style>

</style>
<template>
  <div class="w-script"></div>
</template>

<script>
import element from '@/mixins/element'

export default {
    name: 'w-script',
    mixins: [element],
    props: {
        value: String
    },
    created() {
        const {isEditMode, value} = this
        if (isEditMode || !value) return false
        try {
            Function(this.value).call(window)
        } catch(e) {
            console.error(e.message)
        }
    }
}
</script>

<style lang="scss" scoped>
.w-script {
    display: none;
}
</style>
<template>
    <div class="wrap">
        <i class="icon" :class="icon"></i>
        <span class="txt"><slot/></span>
    </div>
</template>

<script>
export default {
    name: 'component-item',
    props: {
        icon: String
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.wrap {
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $clightfont;
    border: 1px solid $cborder;
    cursor: pointer;
    user-select: none;
    margin-bottom: 1rem;
    &:hover {
        color: $chigh;
    }
    .txt {
        margin-top: 0.5rem;
        font-size: 0.6rem;
    }
}
</style>
<template>
  <el-row type="flex" class="row-con">
      <el-col class="col-logo" :span="2">
          <img class="img-logo" src="../../assets/img/logo.png" alt="yee"/>
      </el-col>
      <el-col class="col-operators" :span="20"></el-col>
  </el-row>
</template>

<script>
export default {
    name: 'yee-header'
}
</script>

<style lang="scss" scoped>
.row-con {
    height: 100%;
    .col-logo {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        .img-logo {
            height: 3rem;
        }
    }
    .col-operators {
        display: inline-flex;
        justify-content: center;
    }
}
</style>
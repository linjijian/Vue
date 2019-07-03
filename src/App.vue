<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    .nav
      margin-bottom 20px
    .el-pagination
      text-align center
      margin 20px 0
    .filter-box
      padding 0 0 20px 0
      .label
        font-size 15px
        padding-left 10px
      .search-bar
        width 300px
    .clearfix
      overflow auto
    .el-card__header
      padding 10px 20px
    [class*=el-col-]
      font-size 15px
      color #444
  p
    margin-block-start: 0;
    margin-block-end: 0;
</style>
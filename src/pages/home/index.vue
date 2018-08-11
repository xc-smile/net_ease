<template>
  <header class="header-top">
    <div class="logo-search">
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品,共12311款好物</span>
      </div>
    </div>
    <nav-list />
    <carousel />
  </header>
</template>

<script>
  import NavList from '../../components/headerNav/headerNav'
  import Carousel from '../../components/carousel/Carousel'
  export default {
    components: {
      NavList,
      Carousel
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .header-top
    display flex
    flex-direction column
    .logo-search
      display flex
      .logo
        img
          width .7rem
          padding .05rem 0
          margin .1rem .2rem
      .search
        display flex
        align-items center
        justify-content center
        flex-grow 1
        background-color: #ededed
        font-size .14rem
        margin .1rem .15rem .1rem 0
        border-radius 3px







</style>

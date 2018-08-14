<template>
  <header class="header-detail border-1px">
    <div class="header-top">
      <div class="home" @click="pathTo('/home')"></div>
      <div class="logo" @click="pathTo('/home')"></div>
      <div class="search" @click="toSearch()"></div>
      <div class="cart" @click="pathTo('/shopcart')"></div>
    </div>
  </header>
</template>

<script>
  export default {
    methods: {
      pathTo(path) {
        this.$router.replace(path)
      },
      toSearch () {
        this.$router.push('/search')
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .header-detail
    bottom-border-1px(#e4e4e4)
    width 100%
    height .44rem
    position fixed
    top 0
    z-index 11
    background-color white
    .header-top
      width 100%
      height 100%
      position relative
      .home
        position absolute
        left .12rem
        top .1rem
        width .24rem
        height .22rem
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
        background-size .86rem 1.99rem
        background-position 0 -.38rem
      .logo
        width .86rem
        height .27rem
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        margin auto
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
        background-size .86rem 1.99rem
        background-position 0 -.65rem
      .search
        width .32rem
        height .32rem
        position absolute
        top .1rem
        right .5rem
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
        background-size .86rem 1.99rem
        background-position 0 -1.7rem
      .cart
        width .32rem
        height .32rem
        position absolute
        top .1rem
        right .1rem
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
        background-size .86rem 1.99rem
        background-position 0 -.03rem

</style>

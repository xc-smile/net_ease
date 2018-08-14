<template>
  <div class="images">
    <div>
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
    </div>
    <div class="middle-image">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
    </div>
    <div class="app-image">
      <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="">
      <div></div>
      <span @click="toHome()"></span>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      toHome () {
        this.$router.replace('/home')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.images
  width 100%
  height 100%
  div
    width 100%
    height 35%
    img
      width 100%
      height 100%
  .middle-image
    width 100%
    height 30%
  .app-image
    position relative
    div
      width 2.16rem
      height .5rem
      position absolute
      top: .53rem
      left .8rem
    span
      display inline-block
      width 1.27rem
      height .15rem
      position absolute
      top 1.25rem
      left 1.22rem
</style>

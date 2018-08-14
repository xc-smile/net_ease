<template>
  <div class="container">
    <header>
      <h3>购物车</h3>
      <span>领卷</span>
    </header>
    <div class="main">
      <div class="promise">
        <div>
          <span class="icon-item"></span>
          <span>网易自营品牌</span>
        </div>
        <div>
          <span class="icon-item"></span>
          <span>30天无忧退货</span>
        </div>
        <div>
          <span class="icon-item"></span>
          <span>48小时无忧退款</span>
        </div>
      </div>
      <div class="cart">
        <div class="image">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
          <span>去添加点什么吧</span>
        </div>
        <div class="login">
          登陆
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  width 100%
  height 100%
  header
    width 100%
    height .44rem
    background-color white
    line-height .44rem
    position fixed
    top: 0
    left: 0
    z-index 11
    h3
      display inline-block
      font-size .18rem
      position absolute
      top: 0
      right: 0
      bottom: 0
      left: 0
      margin auto
    span
      float right
      margin-right .28rem
      font-size .15rem
      color: #b4282d

  .main
    width 100%
    height 100%
    box-sizing border-box
    padding .44rem 0 .5rem
    background-color #f4f4f4
    display flex
    flex-direction column
    .promise
      display flex
      justify-content space-evenly
      height .36rem
      line-height .36rem
      margin-bottom .1rem
      color #666
      font-size .12rem
      .icon-item
        display inline-block
        width .05rem
        height .05rem
        border-radius 50%
        background-color: #666
        vertical-align middle
        transform translateY(-.02rem)
    .cart
      width 100%
      height 100%
      position relative
      .image
        position absolute
        top: 0
        left: 0
        right: 0
        bottom: 0
        margin auto
        width 1.24rem
        height 1.24rem
        img
          width 1.24rem
          height 1.24rem
        span
          color #999
          font-size .13rem

      .login
        width 2.4rem
        height .46rem
        background-color #b4282d
        color white
        line-height .46rem
        text-align  center
        border-radius 2px
        position absolute
        left: 0
        right: 0
        bottom 1.2rem
        margin 0 auto
</style>

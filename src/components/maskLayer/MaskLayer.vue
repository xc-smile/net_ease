<template>
  <div class="mask-layer" v-if="isShow">
    <div class="cancel" @click="close()">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png" alt="">
    </div>
    <div class="box">
      <div class="title">
        <span></span>
        <h3>新人专享礼</h3>
        <span></span>
      </div>
      <div class="thanks">感谢使用网易严选, 已为你准备了一份专享礼</div>
      <div class="good">
        <div class="image">
          <img src="http://yanxuan.nosdn.127.net/149ac83f4c4b6d1e72e63b57cc543c87.jpg?imageView&quality=85&thumbnail=232y232" alt="">
        </div>
        <div class="info">
          <h4>轻质方形男士墨镜</h4>
          <span class="maker">Fendi制造商</span>
          <div>
            <span class="price">¥99.00</span>
            <span class="oldPrice">¥369.00</span>
          </div>
        </div>
      </div>
      <div class="buttons">
        <div>领券立减¥34.00</div>
        <div class="more">查看更多特惠商品</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      close() {
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .mask-layer
    height 100%
    width 100%
    background-color rgba(0,0,0,.5)
    position fixed
    top: 0
    left: 0
    z-index 200
    .cancel
      position absolute
      top .32rem
      right  .16rem
      width .32rem
      height .32rem
      img
        width 100%
        height 100%
    .box
      background-color: #fff
      width 3.15rem
      height 3.46rem
      position absolute
      left: 0
      right: 0
      bottom: 0
      top: 0
      margin auto
      border-radius .08rem
      box-sizing border-box
      padding .15rem .12rem
      .title
        width 100%
        display flex
        justify-content center
        align-items center
        h3
          font-size .21rem
          font-weight 700
          margin 0 .08rem
        span
          display: inline-block
          width .2rem
          height .02rem
          background-color #333

      .thanks
        margin-top .08rem
        font-size .12rem
      .good
        width 100%
        background-color: #f4f4f4
        height 1.16rem
        margin-top .25rem
        display flex
        .image
          width 1.16rem
          height 100%
          img
            height 100%
            width 100%
        .info
          flex-grow 22
          box-sizing border-box
          padding .215rem .05rem
          display flex
          flex-direction column
          text-align left
          justify-content space-between
          .maker
            font-size .12rem
          div
            .price
              color #b4282d
            .oldPrice
              text-decoration line-through
              color: #999
      .buttons
        width 100%
        div
          width 100%
          height .44rem
          background-color: #b4282d
          color white
          line-height .44rem
          margin-top .2rem
          border-radius .02rem
        .more
          color #333
          margin-top .12rem
          background-color: #fff
          border 1px solid #7f7f7f
</style>

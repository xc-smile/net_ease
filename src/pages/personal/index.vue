<template>
  <div class="container">
    <header-reuse />
    <div class="main">
      <div class="logo">
        <div>
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
      </div>
      <div class="login" @click="toLogin('/phonelogin')">
        <span class="icon-item">
          <i class="iconfont icon-phone"></i>
        </span>
        <span>手机号码登陆</span>
      </div>
      <div class="email-login login" @click="toLogin('/emaillogin')">
        <span class="icon-item">
          <i class="iconfont icon-tubiao209"></i>
        </span>
        <span>邮箱账号登陆</span>
      </div>
      <div class="register">
        <span>手机号快速注册</span>
        <span class="icon-item">
          <i class="iconfont icon-you-yuan"></i>
        </span>
      </div>
      <div class="other">
        <div class="wechat">
          <span class="icon-item">
            <i class="iconfont icon-changyonglogo28"></i>
          </span>
          <span>微信</span>
        </div>
        <span>|</span>
        <div class="qq">
          <span class="icon-item">
            <i class="iconfont icon-qq"></i>
          </span>
          <span>QQ</span>
        </div>
        <span>|</span>
        <div class="weibo">
          <span class="icon-item">
            <i class="iconfont icon-weibo"></i>
          </span>
          <span>微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderReuse from '../../components/header/Header'
  export default {
    methods:{
      toLogin(path) {
        this.$router.replace(path)
      }
    },
    components: {
      HeaderReuse
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .container
    width 100%
    height 100%
    .main
      width 100%
      height 100%
      box-sizing border-box
      padding-top .45rem
      padding-bottom .5rem
      background-color #f2f5f4
      .logo
        width 100%
        height 2.05rem
        position relative
        div
          width 1.34rem
          height .45rem
          position absolute
          top: 0
          left: 0
          right: 0
          bottom: 0
          margin auto
          img
            width 100%
            height 100%
      .login
        width 3.35rem
        height .47rem
        background-color: #b4282d
        color white
        margin 0 .2rem .16rem
        line-height .47rem
        text-align center
        font-size .14rem
        border-radius .02rem
      .email-login
        background-color: #f2f5f4
        color #b4282d
        border 1px solid #b4282d
      .register
        color: #333
      .other
        width 100%
        position absolute
        bottom: 0.5rem
        color #7f7f7f
        div
          display inline-block
          margin 0 .15rem
</style>

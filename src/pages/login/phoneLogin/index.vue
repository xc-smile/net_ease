<template>
  <div class="container">
    <header-reuse />
    <div class="main">
      <div class="logo">
        <div>
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
      </div>
      <div class="login">
        <div class="phone">
          <input type="text" placeholder="请输入手机号">
          <span></span>
        </div>
        <div class="message">
          <input type="text" placeholder="请输入短信验证码">
          <span class="button">获取验证码</span>
        </div>
        <span class="line"></span>
        <div class="else">
          <span class="trouble">遇到问题?</span>
          <span class="password-login">使用密码验证登陆</span>
        </div>
      </div>
      <div class="buttons">
        <div class="login-button">登陆</div>
        <div class="login-button white-button">其他登陆方式</div>
      </div>
      <div class="register">
        <span>注册账号</span>
        <span class="icon-item">
          <i class="iconfont icon-you-yuan"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderReuse from '../../../components/header/Header'
  export default {
    components: {
      HeaderReuse
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.container
  width 100%
  height 100%
  .main
    width 100%
    height 100%
    box-sizing border-box
    padding .45rem .2rem .2rem
    .logo
      width 100%
      height .32rem
      margin-top .28rem
      display flex
      justify-content center
      div
        width .96rem
        height 100%
        img
          width 100%
          height 100%
    .login
      width 100%
      margin-top .4rem
      display flex
      flex-direction column
      .phone
        width 100%
        input
          float: left;
          height .21rem
          width 2.95rem
          margin .14rem
          outline none
        span
          display inline-block
          height 1px
          width 100%
          background-color #999
          margin-bottom .16rem
      .message
        display flex
        input
          float: left
          height .21rem
          width 1.9rem
          margin .14rem
          outline none
        .button
          display inline-block
          width .82rem
          height .26rem
          line-height .26rem
          border 1px solid #7f7f7f
          border-radius .05rem
          color #333
          margin auto
      .line
        display inline-block
        height 1px
        width 100%
        background-color #999
        margin-bottom .2rem

      .else
        width 100%
        .trouble
          float: left
        .password-login
          float: right
    .buttons
      width 100%
      .login-button
        width 100%
        height .46rem
        line-height .46rem
        color: #fff
        border-radius .02rem
        background-color #b4282d
        margin-top .2rem
      .white-button
        color #b4282d
        background-color #fff
        border 1px solid #b4282d
    .register
      margin-top .16rem
</style>

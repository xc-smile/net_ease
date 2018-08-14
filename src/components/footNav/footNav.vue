<template>
<footer class="foot-nav border-1px">
  <div class="foot-item" @click="goto ('/home')" :class="{on: isOn('/home')}">
    <span class="icon-item">
      <i class="iconfont icon-shouye1"></i>
    </span>
    <span>首页</span>
  </div>
  <div class="foot-item" @click="goto ('/knowthings')" :class="{on: isOn('/knowthings')}">
    <span class="icon-item">
      <i class="iconfont icon-fangkuang"></i>
    </span>
    <span>识物</span>
  </div>
  <div class="foot-item" @click="goto ('/classify')" :class="{on: isOn('/classify')}">
    <span class="icon-item">
      <i class="iconfont icon-fenlei"></i>
    </span>
    <span>分类</span>
  </div>
  <div class="foot-item" @click="goto ('/shopcart')" :class="{on: isOn('/shopcart')}">
    <span class="icon-item">
      <i class="iconfont icon-gouwuche"></i>
    </span>
    <span>购物车</span>
  </div>
  <div class="foot-item" @click="goto ('/personal')" :class="{on: isOn('/personal')}">
    <span class="icon-item">
      <i class="iconfont icon-gerenyonghutouxiang"></i>
    </span>
    <span>个人</span>
  </div>
</footer>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        this.$router.replace(path)
      },
      isOn(path) {
        const reg = /^\/[a-z]+/;
        return this.$route.path.match(reg)[0] === path;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .foot-nav
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .foot-item
      display flex
      flex-grow 1
      flex-direction column
      margin 5px 0
    .on
      color #b4282d
  span
    font-size 12px
    margin-top 2px
    margin-bottom 2px
    .iconfont
      font-size 22px
</style>

<template>
  <div class="container">
    <header>
      <div>
        <span>
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="">
        </span>
        <input type="text" placeholder="BE MY LOVE 钻戒情侣首饰热卖中">
      </div>
      <span class="cancel" @click="cancelSearch()">取消</span>
    </header>
    <div class="hot">
      <div class="hot-search">
        热门搜索
      </div>
      <ul>
        <li v-for="(item, index) in hot" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hot: ['七夕美食99选9', '七夕定制礼物', '床品满300减100', '爆款电器特价',
          '洗护美妆买4免1', '小龙虾9块9再送一盒', '服装热销榜', '收纳', '床垫', '包装', '按摩椅']
      }
    },
    methods: {
      cancelSearch () {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .container
    width 100%
    height 100%
    background-color #f7f7f7
    header
      box-sizing border-box
      padding .08rem .15rem
      width 100%
      height .435rem
      background-color white
      div
        float: left
        height .28rem
        background-color #f4f4f4
        box-sizing border-box
        span
          display inline-block
          height .28rem
          width .28rem
          img
            width .14rem
            height .14rem
            margin .07rem
        input
          width 2.6rem
          height .2rem
          background-color #f4f4f4
          outline none
          transform  translateY(-.09rem)
      .cancel
        float: right
        margin-top .07rem

    .hot
      width 100%
      background-color white
      box-sizing border-box
      padding 0 .15rem .15rem
      .hot-search
        height .45rem
        width 100%
        line-height .45rem
        text-align left
        color #999
      ul
        width 100%
        display flex
        flex-wrap wrap
        li
          height .235rem
          line-height .235rem
          display inline-block
          box-sizing border-box
          padding 0 .075rem
          border 1px solid #b4282d
          color #b4282d
          font-size .12rem
          margin-right .16rem
          margin-bottom .16rem
</style>

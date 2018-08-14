<template>
  <div>
    <mask-layer />
    <to-top />
    <header class="header-top">
      <div class="logo-search">
        <div class="logo">
          <img src="../../assets/images/logo.png" alt="">
        </div>
        <div class="search" @click="toSearch()">
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品,共12311款好物</span>
        </div>
      </div>
      <nav-list/>
    </header>
    <div class="main">
      <carousel/>
      <div class="promise">
        <div>
        <span class="icon-item">
          <i class="iconfont icon-gouxuan"></i>
        </span>
          <span>网易自营品牌</span>
        </div>
        <div>
        <span class="icon-item">
          <i class="iconfont icon-gouxuan"></i>
        </span>
          <span>30天无忧退货</span>
        </div>
        <div>
        <span class="icon-item">
          <i class="iconfont icon-gouxuan"></i>
        </span>
          <span>48小时无忧退款</span>
        </div>
      </div>
      <div class="brander">
        <div class="title">
          <span>品牌制造商直供</span>
          <span class="icon-item">
            <i class="iconfont icon-you-yuan"></i>
          </span>
        </div>
        <ul class="brand-list">
          <li class="brand-item"
              v-for="(item, index) in homeData.tagList"
              v-if="index <= 3 " :key="item.id">
            <img :src="item.picUrl" alt="">
            <div class="info">
              <h4>{{item.name}}</h4>
              <p class="price">{{item.floorPrice}}元起</p>
              <span class="new">上新</span>
            </div>
          </li>
        </ul>
      </div>
      <item-list/>
      <popular-item-list/>
      <div class="count-down" v-if="homeData.flashSaleIndexVO">
        <div class="down">
          <h3>严 选 限 时 购</h3>
          <span>{{hours}}</span> :
          <span>{{minute}}</span> :
          <span>{{second}}</span>
          <p>下一场 {{new Date(2018,8,14).getHours()}} : 00 开始</p>
        </div>
        <div class="image">
          <img :src="homeData.flashSaleIndexVO.primaryPicUrl" alt="">
          <div class="price">
            <span>¥{{homeData.flashSaleIndexVO.activityPrice}}</span>
            <span class="oldPrice">¥{{homeData.flashSaleIndexVO.originPrice}}</span>
          </div>
        </div>
      </div>
      <div class="weal">
      </div>
      <div class="subject">
        <div class="title">
          <span>专题精选</span>
          <span class="icon-item">
          <i class="iconfont icon-you-yuan"></i>
        </span>
        </div>
        <div class="subject-list">
          <ul>
            <li v-for="(item, index) in homeData.topicList" :key="item.id">
              <div class="img">
                <img :src="item.itemPicUrl" alt="">
              </div>
              <div class="info">
                <span>{{item.subtitle}}</span>
                <p>{{item.title}}</p>
                <span class="price">{{item.priceInfo}}元起</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <good-list />
      <div class="down-load-app">
        <span>下载APP</span>
        <span>电脑版</span>
        <p>网易公司版权所有 © 1997-2018</p>
        <p>食品经营许可证：JY13301080111719</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import NavList from '../../components/headerNav/headerNav'
  import Carousel from '../../components/carousel/Carousel'
  import ItemList from '../../components/itemList/ItemList'
  import PopularItemList from '../../components/popularItemList/PopularItemList'
  import GoodList from '../../components/goodList/GoodList'
  import MaskLayer from '../../components/maskLayer/MaskLayer'
  import ToTop from '../../components/toTop/ToTop'

  export default {
    data() {
      return {
        hours: null,
        minute: null,
        second: null,
      }
    },
    methods: {
      countDown() {
        let a = new Date();
        let aa = new Date(2018, 8, 14);
        this.second = parseInt((aa - a) / 1000 % 60);
        this.minute = parseInt((aa - a) / 1000 / 60 % 60);
        this.hours = parseInt((aa - a) / 1000 / 60 / 60 % 24);
      },
      toSearch () {
        this.$router.push('/search')
      }
    },
    mounted() {
      this.$store.dispatch('getBanner')
      this.$store.dispatch('getHomeData')
      setInterval(() => {
        this.countDown()
      }, 1000)
    },
    computed: {
      ...mapState(['homeData'])
    },
    watch: {
      homeData(value) {
        this.$nextTick(function () {
          new BScroll('.subject-list', {
            click: true,
            scrollX: true,
            eventPassthrough: true
          })
          window.scrollTo(0,0)
        });
      }
    },
    components: {
      NavList,
      Carousel,
      ItemList,
      PopularItemList,
      GoodList,
      MaskLayer,
      ToTop
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .header-top
    width 100%
    display flex
    flex-direction column
    position fixed
    top 0
    z-index 11
    background-color white
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
  .main
    margin-top: .805rem
    margin-bottom .5rem
    background-color #f4f4f4
    .promise
      background-color white
      display flex
      justify-content space-evenly
      height .36rem
      line-height .36rem
      margin-bottom .1rem
      .icon-item
        color: #b4282d
    .brander
      background-color white
      width 100%
      hight 2.93rem
      .title
        width 100%
        height .55rem
        text-align center
        line-height .55rem
      .brand-list
        margin 0 .08rem
        display flex
        flex-wrap wrap
        justify-content space-between
        .brand-item
          background-color #f4f4f4
          width 1.775rem
          height 1.28rem
          margin-bottom .04rem
          position relative
          img
            width 100%
            height 100%
            position absolute
            top: 0
            left: 0

          .info
            text-align left
            padding .1rem
            font-size 14px
            p
              margin .05rem 0
            span
              display inline-block
              width .32rem
              height .16rem
              text-align center
              line-height .16rem
              font-size .12rem
              color #b4a078
              border 1px solid #b4a078
              border-radius 2px

    .count-down
      width 100%
      height 1.9rem
      background-color white
      display flex
      justify-content space-evenly
      margin-bottom .1rem
      div
        margin .15rem 0
      .image
        width 1.6rem
        height 1.6rem
        position relative
        img
          width 100%
        .price
          width .48rem
          height .48rem
          background-color: #f59524
          border-radius 50%
          position absolute
          bottom 0
          right 0
          font-size .17rem
          box-sizing border-box
          padding-top .07rem
          color white
          .oldPrice
            text-decoration: line-through
      .down
        width 1.6rem
        height 1.6rem
        h3
          font-size .24rem
          margin-top .4rem
          margin-bottom .16rem
        span
          display inline-block
          width .31rem
          height .28rem
          line-height .28rem
          background-color: #333
          border-radius 2px
          font-size .21rem
          color white
        p
          font-size .12rem
          margin-top .2rem
    .weal
      width 100%
      height 1.5rem
      background url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg) no-repeat
      background-size 100% 100%
      margin-bottom .1rem
    .subject
      width 100%
      height 2.82rem
      background-color white
      margin-bottom .1rem
      .title
        width 100%
        height .55rem
        text-align center
        line-height .55rem
        font-size 16px
      .subject-list
        padding 0 .15rem .18rem .15rem
        overflow hidden
        ul
          width 8.925rem
          li
            width 2.875rem
            margin-right .1rem
            float: left
            .img
              margin-bottom .08rem
              img
                width 100%
                height 1.61rem
            .info
              text-align left
              position relative
              p
                font-size .12rem
                color #7f7f7f
                margin-top .05rem
              .price
                position absolute
                top 0
                right 0
                color #b4282d
    .down-load-app
      width 100%
      height 1.25rem
      background-color #414141
      color white
      box-sizing border-box
      padding .27rem .1rem .14rem
      span
        display inline-block
        width .86rem
        height .31rem
        border 1px solid #999
        border-radius 3px
        text-align center
        line-height .31rem
        margin-bottom: .15rem
        margin-right .1rem
      p
        font-size .12rem
        color: #999
        margin-bottom .08rem
</style>

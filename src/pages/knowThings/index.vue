<template>
  <div>
    <header-reuse />
    <to-top />
    <div class="main">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in knowData.banner" :key="index">
            <img :src="item.picUrl" alt="">
            <div class="info">
              <span>{{item.subTitle}}</span>
              <h3>{{item.desc}}</h3>
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>

      </div>
      <div class="article-list">
        <ul>
          <li v-for="(item, index) in knowData.column" :key="index">
            <div class="image">
              <img :src="item.picUrl" alt="">
              <span>{{item.articleCount}}</span>
            </div>
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
      <recommend :dataOne="knowData.recommendOne"
                 :dataTwo="knowData.recommendTwo"
                 :dataThree="knowData.recommendThree"/>
      <div class="ten-clock">
        <div class="title">
          十点一刻
        </div>
        <div class="topic">
          <ul>
            <li v-for="(item) in knowData.tenfifteen" :key="item.id">
              <h3>今日话题</h3>
              <h4>{{item.title}}</h4>
              <p>{{item.desc}}</p>
              <div>
                <img v-for="(avatar, index) in item.participantAvatar" :src="avatar" alt="" :key="index" v-if="avatar">
                <span>{{item.participantNum}}人参与话题</span>
              </div>
            </li>
            <li class="all">
              <span>查看全部话题</span>
              <span class="icon-item">
                <i class="iconfont icon-you-yuan"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <recommend :dataOne="knowData.zhenOne"
                 :dataTwo="knowData.zhenTwo"
                 :dataThree="knowData.zhenThree"/>
      <div class="look" v-if="knowData.yxLook">
        <div class="title">
          严选LOOK
        </div>
        <div class="image">
          <img :src="knowData.yxLook.picUrl" alt="">
        </div>
        <div class="comment">
          <div>
            <img :src="knowData.yxLook.avatar" alt="">
            <span>{{knowData.yxLook.nickname}}</span>
          </div>
          <p>{{knowData.yxLook.content}}</p>
        </div>
      </div>
      <div class="find-more">
        <div class="title">
          <span></span>
          <h4>更多精彩</h4>
          <span></span>
        </div>
        <ul>
          <li v-for="(item, index) in knowData.findMore" :key="index">
            <div class="image">
              <img :src="item.itemPicUrl" alt="">
            </div>
            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import HeaderReuse from '../../components/header/Header'
  import Recommend from '../../components/recommend/Recommend'
  import ToTop from '../../components/toTop/ToTop'
  export default {
    computed: {
      ...mapState(['knowData'])
    },

    mounted() {
      this.$store.dispatch('getKnowData')
    },
    watch: {
      knowData(value) {
        this.$nextTick(function () {
          new Swiper('.swiper-container', {
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 20,
            loop: true
          }),
            new BScroll('.article-list', {
              click: true,
              scrollX: true,
              eventPassthrough: true
            }),
            new BScroll('.topic', {
              click: true,
              scrollX: true,
              eventPassthrough: true
            })
        })
      }
    },
    components: {
      Recommend,
      HeaderReuse,
      ToTop
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .main
    width 100%
    background-color #f4f4f4
    margin-top .45rem
    margin-bottom .5rem
    .swiper-container
      background-color white
      width 100%
      height 100%
      padding .1rem 0
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          flex-wrap wrap
          position relative
          img
            width 100%
          .info
            box-sizing border-box
            padding .15rem 0
            background-color rgba(255, 255, 255, .9)
            width 2.33rem
            height .99rem
            position absolute
            top: 0
            right: 0
            left: 0
            bottom: 0
            margin auto
            span
              font-size .12rem
              color #7f7f7f
            h3
              font-size .16rem
              font-weight 700
              color #333
              margin-top .1rem
            p
              font-size .14rem
              margin-top .08rem
              color #333

    .article-list
      background-color white
      box-sizing border-box
      height 1.43rem
      width 100%
      padding .15rem
      overflow hidden
      margin-bottom .1rem
      ul
        width 7.52rem
        li
          float: left;
          width .82rem
          margin-right .12rem
          .image
            width 100%
            height .82rem
            position relative
            margin-bottom .1rem
            img
              width 100%
            span
              position absolute
              font-size .12rem
              color white
              right: .02rem
              top: .02rem

          span
            font-size .12rem
    .ten-clock
      width 100%
      box-sizing border-box
      padding 0 .15rem
      background-color white
      margin-bottom .1rem
      .title
        width 100%
        height .6rem
        font-size .16rem
        line-height .6rem
      .topic
        width 100%
        overflow hidden
        ul
          width 12.2rem
          li
            float: left
            width 2.9rem
            height 2.055rem
            background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png) no-repeat
            background-size 100% 100%
            box-sizing border-box
            padding .19rem .2rem .4rem
            margin-right .15rem
            h3
              font-size .12rem
              color #7f7f7f
              margin-bottom .2rem
            h4
              font-size .18rem
              font-weight 700
              margin-bottom .09rem
            p
              margin-bottom .2rem
            div
              width 100%

              img
                width .24rem
                height .24rem
                border-radius 50%
                vertical-align middle

          .all
            line-height 1.455rem
            font-size .16rem
            font-weight 700
            color: #7f7f7f
    .look
      background-color white
      width 100%
      .title
        width 100%
        height .6rem
        font-size .16rem
        line-height .6rem
      .image
        width 100%
        height 5rem
        img
          width 100%
          height 100%
      .comment
        width 100%
        height 1.15rem
        box-sizing border-box
        padding .12rem .15rem .23rem
        div
          text-align left
          margin-bottom .15rem
          img
            width .23rem
            height .23rem
            border-radius 50%
            vertical-align middle

        p
          color #7f7f7f
          font-size .13rem
          text-align left
          line-height 1.6
    .find-more
      width 100%
      box-sizing border-box
      padding 0 .2rem .2rem
      .title
        width 100%
        height .7rem
        line-height .7rem
        text-align left
        span
          display inline-block
          width 1.3rem
          height 1px
          background-color #d9d9d9
        h4
          display inline-block
          color: #333
          margin .05rem .05rem
      ul
        width 100%
        li
          width 100%
          height 2.49rem
          box-sizing border-box
          padding .12rem
          background-color white
          margin-bottom .1rem
          .image
            width 100%
            height 100%
            img
              width 100%
              height 1.8rem
          p
            margin-top -.2rem
            text-align left
</style>

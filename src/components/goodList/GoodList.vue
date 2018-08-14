<template>
  <div class="goods-list-container">
    <ul class="large-classify">
      <li class="large-list" v-for="(largeItem) in homeData.cateList" :key="largeItem.id">
        <div class="large-title">
          <span>{{largeItem.name}}</span>
        </div>
        <ul class="goods">
          <li class="goods-list" v-if="index < 7" v-for="(item, index) in largeItem.itemList" :key="item.id">

            <div class="image">
              <img :src="item.listPicUrl" alt="">
            </div>
            <div class="info">
              <div>
                {{item.simpleDesc}}
              </div>
              <p>{{item.name}}</p>
              <span>¥{{item.retailPrice}}</span>
            </div>
          </li>
          <li class="goods-list">
            <div class="more">
              <span>更多{{largeItem.name}}好物</span>
              <span class="icon-item">
                <i class="iconfont icon-you-yuan"></i>
              </span>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['homeData'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .goods-list-container
    width 100%
    margin-bottom .1rem
    .large-classify
      width 100%
      .large-list
        width 100%
        background-color white
        .large-title
          width 100%
          height .6rem
          line-height .6rem
        .goods
          width 100%
          display flex
          flex-wrap wrap
          justify-content space-evenly
          margin-bottom .1rem
        .goods-list
          width 1.725rem
          margin-bottom .08rem
          .more
            width 100%
            height 2.075rem
            font-size .19rem
            background-color #f4f4f4
            line-height 2.075rem
          .image
            width 100%
            background-color: #f4f4f4
            img
              width 100%
          .info
            text-align left
            div
              width 100%
              height .35rem
              background-color #F1ECE2
              color #9f8a60
              line-height .35rem
              font-size .14rem
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              margin-bottom .05rem
            p
              white-space nowrap
              text-overflow ellipsis
              overflow hidden
              margin-bottom .03rem
            span
              color #b4282d
              font-size .19rem
</style>

<template>
  <div class="item-list">
    <div class="title">
      <h3>新品首发</h3>
      <span class="all">查看全部</span>
    </div>
    <div class="list-container">
      <ul>
        <li v-if="homeData.newItemList" v-for="(item) in homeData.newItemList" :key="item.id">
          <div class="imgBox">
            <img :src="item.listPicUrl" alt="">
          </div>
          <span v-if="item.itemTagList[0]">{{item.itemTagList[0].name}}</span>
          <h4>{{item.name}}</h4>
          <p>{{item.simpleDesc}}</p>
          <h5>¥{{item.retailPrice}}</h5>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed:{
      ...mapState(['homeData'])
    },
    watch: {
      homeData(value) {
        this.$nextTick(function () {
          new BScroll('.list-container', {
            click: true,
            scrollX: true,
            eventPassthrough: true
          })
        })
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.item-list
  background-color white
  width 100%
  height 3.86rem
  margin-bottom .1rem
  .title
    box-sizing border-box
    width: 100%
    height 1.3rem
    margin-bottom .16rem
    background-color #eef5fc
    color #8ba0b6
    padding .4rem
    h3
      font-size .18rem
      font-weight 500
    .all
      display inline-block
      width 1.2rem
      height .28rem
      background-color #d8e5f1
      text-align center
      line-height .28rem
      margin-top .08rem
  .list-container
    width 100%
    overflow hidden
    ul
      width 12.4rem
      li
        float: left;
        width 1.4rem
        margin-left .15rem
        .imgBox
          width 100%
          height 1.4rem
          background-color #f4f4f4
          margin-bottom .06rem
          img
            width 100%
        span
          font-size .12rem
          background-color #e5686d
          color white
          padding .025rem .08rem
          margin-left .06rem
        h4
          width: 100%;
          margin .1rem 0
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        p
          color #7f7f7f
          margin-bottom .07rem
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        h5
          color #b4282d

</style>

<template>
  <div class="recommend" v-if="dataOne">
    <div class="title">为你推荐</div>
    <div class="image">
      <img :src="dataOne.picUrl" alt="">
      <span>{{dataOne.typeName}}</span>
    </div>
    <div class="info">
      <h3>{{dataOne.title}}</h3>
      <p>{{dataOne.subTitle}}</p>
      <span v-if="dataOne.priceInfo">{{dataOne.priceInfo}}元起</span>
    </div>
    <div class="small">
      <div class="left" v-if="dataTwo">
        <img v-if="dataTwo.avatar" :src="dataTwo.avatar" alt="">
        <span v-if="dataTwo.nickname">{{dataTwo.nickname}}</span>
        <h4>{{dataTwo.title}}</h4>
        <p>{{dataTwo.subTitle}}</p>
      </div>
      <div class="right" v-if="dataThree">
        <img :src="dataTwo.picUrl" alt="">
        <span>{{dataTwo.typeName}}</span>
      </div>
    </div>
    <div class="small">
      <div class="left">
        <img v-if="dataThree.avatar" :src="dataThree.avatar" alt="">
        <span v-if="dataThree.nickname">{{dataThree.nickname}}</span>
        <h4>{{dataThree.title}}</h4>
        <p>{{dataThree.subTitle}}</p>
      </div>
      <div class="right">
        <img :src="dataThree.picUrl" alt="">
        <span>{{dataThree.typeName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      dataOne: Object,
      dataTwo: Object,
      dataThree: Object,
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.recommend
  background-color white
  box-sizing border-box
  width 100%
  padding 0 .15rem
  .title
    width 100%
    height .6rem
    font-size .18rem
    line-height .6rem
  .image
    width auto
    height 1.93rem
    position relative
    img
      width 100%
      height 100%
    span
      display inline-block
      background-color white
      font-size .12rem
      width .65rem
      height .18rem
      line-height .18rem
      text-align center
      position absolute
      top .1rem
      left .1rem
      border-radius .09rem
  .info
    width 100%
    height .93rem
    box-sizing border-box
    padding .12rem .1rem .335rem
    border 1px solid #d9d9d9
    border-radius .05rem
    text-align  left
    position relative
    margin-bottom .15rem
    h3
      font-size .18rem
      margin-bottom .1rem
    p
      font-size .14rem
      color #7f7f7f
      text-overflow: ellipsis
      white-space: nowrap
      overflow: hidden
    span
      position absolute
      font-size .18rem
      top: .12rem
      right: .1rem
  .small
    width 100%
    height 1.37rem
    border 1px solid #d9d9d9
    display flex
    margin-bottom .15rem
    .left
      box-sizing border-box
      padding .2rem .15rem .2rem .1rem
      text-align left
      max-width 1.99rem
      img
        width .23rem
        border-radius 50%
      span
        font-size .12rem
      h4
        margin-top .125rem
        font-size .16rem
        margin-bottom .1rem
      p
        font-size .12rem
        color #7f7f7f
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
    .right
      flex-grow 22
      position relative
      img
        width 100%
        height 100%
      span
        display inline-block
        position absolute
        top .05rem
        left .08rem
        padding .03rem .08rem
        border-radius .09rem
        background-color white
        font-size .12rem
</style>

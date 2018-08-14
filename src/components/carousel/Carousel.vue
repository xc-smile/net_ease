<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(banner, index) in bannerList" :key="index">
        <img :src="banner.picUrl" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState(['bannerList'])
    },
    mounted () {

    },
    watch: {
      bannerList(value){
        this.$nextTick(function () {
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: true
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        img
          width 100%
</style>

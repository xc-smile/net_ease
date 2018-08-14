<template>
  <div v-show="isShow" @click="gotoTop()">
    <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png" alt="">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
      }
    },
    methods: {
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop > 1000){
          this.isShow = true
        }else{
          this.isShow = false
        }

      },
      gotoTop () {
        let distance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let step = distance/50;
        (function jump(){
          if(distance > 0){
            distance-=step;
            window.scrollTo(0,distance);
            setTimeout(jump,10)
          }
        })();
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  div
    width .41rem
    height .41rem
    position fixed
    right .2rem
    bottom .8rem
    z-index 111
    img
      width 100%
      height 100%
</style>

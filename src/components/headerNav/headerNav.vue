<template>
  <div class="header-nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in navList"
          @click="handleClick(index)" :key="index"
          :class="{active: index === initIndex}">
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        navList: ['推荐', '居家', '鞋包配饰', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
        initIndex: 0
      }
    },
    mounted () {
      this.$nextTick(() => {
        new BScroll('.header-nav', {
          click: true,
          scrollX: true
        })
      })
    },
    methods: {
      handleClick(index) {
        this.initIndex = index;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .header-nav
    width 100%
    overflow hidden
    .nav-list
      width 7.5rem
      .nav-item
        float: left
        padding 0 .08rem
        margin-left .2rem
        height .25rem
      .active
        color #b4282d
        position relative
        &:after{
          content ''
          left 0
          bottom 0
          position absolute
          width 100%
          height .02rem
          background-color #b4282d
        }
</style>

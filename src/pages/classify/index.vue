<template>
  <div>
    <header class="border-1px">
      <div @click="toSearch()">
        <span class="icon-item">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span>搜索物品,共123121款好物</span>
      </div>
    </header>
    <div class="main">
      <div class="classify-container">
        <div class="large-list">
          <ul>
            <li v-for="(list, index) in classifyData" :key="list.id"
                @click="handleClick(index)"
                :class="{active: index === activeIndex}">
              <router-link :to="`/classify/classifyitem/${list.id}`">{{list.name}}</router-link>
            </li>
          </ul>
        </div>
        <div class="small-list">
          <router-view :dataIndex="activeIndex"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        activeIndex: 0
      }
    },
    computed: {
      ...mapState(['classifyData'])
    },
    methods: {
      handleClick(index) {
        this.activeIndex = index
      },
      toSearch () {
        this.$router.push('/search')
      }
    },
    mounted () {
      this.$store.dispatch('getClassifyData')
    },
    components: {

    },
    watch: {
      classifyData: function (newValue) {
        this.$router.push('/classify/classifyitem/' + newValue[0].id);
        this.$nextTick(() => {
          new BScroll('.large-list', {
            click: true,
          }),
            new BScroll('.small-list', {
            click: true,
          })
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  header
    bottom-border-1px(#ededed)
    width 100%
    height .44rem
    box-sizing border-box
    padding .08rem .15rem
    position fixed
    top: 0
    background-color white
    z-index 11
    div
      width 100%
      height 100%
      background-color #ededed
      border-radius .05rem
      line-height .28rem
      color #666

  .main

    margin-bottom .5rem
    .classify-container
      display flex
      width 100%
      height 100%
      .large-list
        margin-top .45rem
        width .81rem
        height 5.72rem
        overflow hidden
        flex-shrink 0
        ul
          width 100%
          box-sizing border-box
          padding .2rem 0 0
          :nth-child(1)
            margin-top 0
          li
            width 100%
            height .25rem
            font-size .14rem
            margin-top .2rem
            line-height .25rem
          .active
            color #b4282d
            position relative
            font-size .18rem
            &:after
              content ''
              left 0
              top 0
              position absolute
              width .02rem
              height 100%
              background-color #b4282d
      .small-list
        flex-grow 2
        margin-top .45rem
        overflow hidden
        height 5.72rem
        box-sizing border-box
        padding .15rem .15rem .1rem
</style>

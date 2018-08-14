<template>
  <div class="item-box" v-if="classifyData[dataIndex]">
    <div class="image">
      <img :src="classifyData[dataIndex].bannerUrl" alt="">
    </div>
    <div class="list">
      <div class="title">
        {{classifyData[dataIndex].name}}
      </div>
      <div class="list-item">
        <ul ref="list">
          <li v-for="(item) in classifyData[dataIndex].subCateList">
            <img :src="item.wapBannerUrl" alt="">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    props: {
      dataIndex: Number
    },
    computed: {
      ...mapState(['classifyData'])
    },
    updated() {
      const ul = this.$refs.list;
      const items = this.classifyData[this.dataIndex].subCateList.length
      let count = Math.floor(items / 3)
      if (items % 3) {
        count++
      }

      ul.style.height = count * 1.08 + 'rem'
    },
    // watch: {
    //   classifyData: (value) => {
    //     this.$nextTick(() => {
    //       new BScroll('.small-list', {
    //         click: true,
    //       })
    //     })
    //   }
    // }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .item-box
    width 100%
    .image
      width 100%
      height .96rem
      img
        width 100%
        height 100%
    .list
      width 100%
      .title
        width 100%
        height .54rem
        line-height .54rem
        font-size .12rem
        color #333
      .list-item

        ul
          width 100%
          li
            float: left;
            width .72rem
            height 1.08rem
            margin-right .16rem
            img
              width 100%

</style>

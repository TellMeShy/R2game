<template>
  <div class="news">
    <div class="game-content">
      <div class="game-content-l">
        <Vrecommend></Vrecommend>
        <Vhotevents></Vhotevents>
        <Vgroup></Vgroup>
      </div>
      <div class="game-content-r">
        <div class="game-content-nav">首页>咨询>魔力新闻</div>
        <div class="game-content-details">
          <router-view></router-view>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Vrecommend from './component/recommend.vue'
  import Vhotevents from './component/hotevents.vue'
  import Vgroup from './component/group.vue'
export default {
  name: 'news',
  data () {
    return {
      detail:''
    }
  },
  components:{
    Vhotevents,Vgroup,Vrecommend
  },
  created:function () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
 .news
   padding-bottom 72px
   background #fbfbfb
  .game-content
    padding-top 30px
    width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    overflow hidden
    .game-content-l
      width: 310px;
      float: left;
    .game-content-r
      width: 850px;
      float: right;
      border: 1px solid #dbdbdb;
      .game-content-nav
        background #fbfbfb
        color #949494
        line-height 51px
        text-indent 30px
        height 51px
        border-bottom 1px solid #dbdbdb
      .game-content-details
        padding 39px 99px
        background #fff



</style>

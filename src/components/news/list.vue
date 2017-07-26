<template>
  <div class="newslist">
    <ul class="newslist-nav">
      <router-link to="/news/newsList/allNews">
        <li :class="{cur:current=='allNews'}">全部新闻</li>
      </router-link>
      <router-link to="/news/newsList/gameNews">
        <li :class="{cur:current=='gameNews'}">游戏新闻</li>
      </router-link>
      <router-link to="/news/newsList/activityNews">
        <li :class="{cur:current=='activityNews'}">活动新闻</li>
      </router-link>
      <router-link to="/news/newsList/afficheNews">
        <li :class="{cur:current=='afficheNews'}">游戏公告</li>
      </router-link>
      <router-link to="/news/newsList/strategy">
        <li :class="{cur:current=='strategy'}">精华攻略</li>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'newslist',
    data () {
      return {
        detail: '',
        current:'allNews',
      }
    },
    created:function () {
      if(/\/allNews/.test(this.$route.path)){
        this.current='allNews'
      }else if(/\/gameNews/.test(this.$route.path)){
        this.current='gameNews'
      }else if(/\/activityNews/.test(this.$route.path)){
        this.current='activityNews'
      }else if(/\/afficheNews/.test(this.$route.path)){
        this.current='afficheNews'
      }else if(/\/strategy/.test(this.$route.path)){
        this.current='strategy'
      }
    },
    watch:{
      '$route' (to, from) {
        if(/\/allNews/.test(this.$route.path)){
          this.current='allNews'
        }else if(/\/gameNews/.test(this.$route.path)){
          this.current='gameNews'
        }else if(/\/activityNews/.test(this.$route.path)){
          this.current='activityNews'
        }else if(/\/afficheNews/.test(this.$route.path)){
          this.current='afficheNews'
        }else if(/\/strategy/.test(this.$route.path)){
          this.current='strategy'
        }
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .newslist
    padding-top 20px
    .newslist-nav
      font-size 18px
      border-bottom 2px solid #dbdbdb
      height 30px
      li
        text-align center
        float left
        width 20%
        color #888888
        padding-bottom 10px
      .cur
        color #2a2a2a
        position relative
        &:after
          content ''
          left 0
          background #de3f05
          position absolute
          bottom -4px
          height 2px
          width 100%


</style>

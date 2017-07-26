<template>
  <div class="retrievePasswordMessage">
    <ul>
      <li class="li1">1.选择找回方式</li>
      <li class="li2">2.输入资料信息</li>
      <li class="li3">3.确认修改完成</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'choose',
  data () {
    return {

    }
  },
  components:{

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .retrievePasswordMessage
    line-height 1
    ul
      height 45px
      background url("../../../static/img/retrievePassword/nav.png")
      background-position-y -52px
      margin-bottom 58px
      li
        float left
        width 33.3%
        line-height 45px
        text-align center
        font-size 18px
        color #fff
      .li3
        color #636363
    dl
      overflow hidden
      padding-bottom 15px
      dt
        width 250px
        height 25px
        line-height 25px
        box-sizing border-box
        padding-right 14px
        color #626262
        text-align right
        float left
      dd
        a
          text-decoration: underline
        span
          display inline-block
          line-height 25px
          font-size 12px
          color #de4205
          i
            float left
            height 12px
            width 12px
            margin-left 17px
            margin-top 6px
            margin-right 4px
            background url("../../../static/img/myicon.png") 0 -133px no-repeat
        img
          width 146px
          height 46px
          display block
        button
          margin-top 6px
          width 125px
          height 41px
          box-sizing border-box
          background #fe7527
          border 1px solid #ee5602
          color #fff
          font-size 18px
        input
          box-sizing border-box
          border 1px solid #dbdbdb
          height 25px
          width 242px
        .code
          width 140px


</style>

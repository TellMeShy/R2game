<template>
  <div class="retrievePasswordSucce">
    <ul>
      <ul>
        <li class="li1">1.选择找回方式</li>
        <li class="li2">2.输入资料信息</li>
        <li class="li3">3.确认修改完成</li>
      </ul>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'retrievePasswordSucce',
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
  .retrievePasswordSucce
    line-height 1
    ul
      height 45px
      background url("../../../static/img/retrievePassword/nav.png")
      background-position-y -105px
      margin-bottom 76px
      li
        float left
        width 33.3%
        line-height 45px
        text-align center
        font-size 18px
        color #fff
    .hint
      text-align center
      font-size 14px
      line-height 18px
      color #616161
      .succe
        background url("../../../static/img/personage/sprite_user_icon.png")
        /*float left*/
        /*margin-left 200px*/
        display inline-block
        margin-right 8px
        vetical-align middle
        width 18px
        margin-bottom -3px
        height 18px
    .button
      border 1px solid #de3f05
      display inline-block
      margin-left 312px
      width auto
      margin-top 50px
      button
        color #fff
        box-sizing border-box
        padding 0 16px
        border 1px solid rgba(255,255,255,.4)
        height 34px
        background #de3f05

</style>

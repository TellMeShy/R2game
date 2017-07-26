<template>
  <div class="choose">
    <ul>
      <ul>
        <li class="li1">1.选择找回方式</li>
        <li class="li2">2.输入资料信息</li>
        <li class="li3">3.确认修改完成</li>
      </ul>
    </ul>
    <dl>
      <dt><div class="choose-email"></div></dt>
      <dd>
        <p>密保邮箱——最常用的密码找回方式</p>
        <router-link to="/retrievePassword/retrievePasswordMessage/retrievePasswordMemail"><button>找回密码</button></router-link>
      </dd>
    </dl>
    <dl>
      <dt><div class="choose-papers"></div></dt>
      <dd>
        <p>证件信息</p>
        <button>找回密码</button>
        <button class="examine">查看找回进度</button>
      </dd>
    </dl>
    <dl>
      <dt><div class="choose-pho"></div></dt>
      <dd>
        <p>认证手机——最快捷的密码找回方式</p>
        <router-link to="/retrievePassword/retrievePasswordMessage/retrievePasswordMpho"><button>找回密码</button></router-link>
      </dd>
    </dl>
    <dl>
      <dt><div class="choose-pepo"></div></dt>
      <dd>
        <p>人工申诉</p>
        <button>找回密码</button>
        <button class="examine">查看找回进度</button>
      </dd>
    </dl>

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
  .choose
    line-height 1
    ul
      height 45px
      background url("../../../static/img/retrievePassword/nav.png")
      margin-bottom 73px
      li
        float left
        width 33.3%
        line-height 45px
        text-align center
        font-size 18px
        color #fff
      .li2
        color #636363
      .li3
        color #636363
    dl
      float left
      width 50%
      height 62px
      margin-bottom 70px
      dt
        float left
        width 88px
        div
          width 70px
          height 62px
          background url(../../../static/img/retrievePassword/nav.png)
          background-position-y -177px
        .choose-papers
          background-position-y -249px
        .choose-pho
          background-position-y -321px
        .choose-pepo
          background-position-y -388px
      dd
        float left
        p
          font-size 16px
          color #2a2a2a
          padding-bottom 14px
        button
          box-sizing border-box
          border 1px solid #dbdbdb
          background #efefef
          color #616161
          height 31px
          padding 0 18px
          margin-right 16px




</style>

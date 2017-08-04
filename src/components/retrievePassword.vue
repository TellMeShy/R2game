<template>
  <div class="retrievePassword">
    <div class="Gl_BreadCrumbsBar">
      <div class="Gl_BreadGroup">
        <div class="breadNr">
          <span class="dqian">当前位置：</span>
          <span class="breadcrumbs">
                <a href="">魔力首页</a> &gt;
                <a href="">用户中心</a>
            </span>
        </div>
      </div>
    </div>
    <div class="retrievePassword-box">
      <div class="retrievePassword-header">
        <h4>找回密码</h4>
        <p>客服电话：0755-86700316|客服传真：0755-86700316</p>
      </div>
      <div class="retrievePassword-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'retrievePassword',
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
  .retrievePassword
    background #fbfbfb
    padding-bottom 58px
    .Gl_BreadCrumbsBar
      border-top: 1px solid #d4d4d4;
      border-bottom: 1px solid #d4d4d4;
      background #efefef
      .Gl_BreadGroup
        position: relative;
        width: 960px;
        margin: 0px auto;
        font-family: "微软雅黑","宋体";
        .breadNr
          font-size 12px
          line-height: 40px;
          color: #949494;
          a
            color: #949494;


    .retrievePassword-box
      box-sizing border-box
      width 960px
      margin auto
      .retrievePassword-header
        height 44px
        border-bottom 2px solid #de4205
        h4
          color #de4205
          line-height 44px
          font-size 18px
          float left
        p
          color #626262
          float right
          font-size 12px
          line-height 1
          padding-top 25px
    .retrievePassword-body
      background #fff
      height 1098px
      border 1px solid #dbdbdb
      border-top none
      padding 51px 121px 0px 117px

</style>

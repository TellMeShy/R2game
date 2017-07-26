<template>
  <div class="relievephoSucce">
    <h5>个人中心－手机解绑</h5>
    <div class="lan_Neirong">

      <!--操作步骤 区 开始-->
      <div class="StepBar">
        <p class="Step2zu sp2_1"><span class="stzi_1">绑定手机</span><span class="stzi_3">绑定成功</span></p>
      </div>
      <h6><i class="bind-sure"></i>您的帐号已解除手机号码绑定</h6>
      <!--<p class="bind-e-n">绑定的手机号码为：<a>{{pho}}</a></p>-->
      <router-link to="/personage/" class="button">返回平台</router-link>
    </div>

  </div>

</template>

<script>
export default {
  name: 'relievephoSucce',
  data () {
    return {
      menucheck:1,
      pho:''
    }
  },
  created:function () {
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .relievephoSucce
    h5
      padding: 0px 0px 10px 0px;
      border-bottom: 3px solid #de4205;
      font-size: 18px;
      color: #de4205;
      font-weight: bold;
    .lan_Neirong
        padding: 30px 40px;
        background: #fff;
        border: 1px solid #e1e1e1;
        border-top: none;
        min-height: 450px;
        _height: 450px;
        font-size: 14px;
      .StepBar
        padding: 0px 0px 10px 0px;
        .Step2zu
          height: 36px;
          line-height: 36px;
          color: #626262;
          span
            display: inline-block;
            background: #f2f2f0;
            text-align: center;
            vertical-align: top;
            width: 270px;
            background: url(../../../static/img/personage/arrow_icon.png) no-repeat 0 -44px;
          .stzi_1
            color #fff
            width 312px
            background-position 0 0
          .stzi_3
            color #fff
            width 312px
            background-position 0 -339px

      h6
        padding-top 46px
        padding-bottom 19px
        color #42a838
        font-size 20px
        line-height 24px
        font-weight normal
        .bind-sure
          float left
          width 24px
          height 24px
          padding-right 7px
          margin-left 202px
          background url("../../../static/img/personage/sprite_user_icon.png") no-repeat
          background-size: 38px auto;
      .bind-e-n
        line-height 1
        text-align center
        padding-bottom 38px
        a
          color #de4205
       .button
         display block
         margin 0 auto
         height 32px
         width 94px
         line-height 32px
         text-align center
         background #fe7527
         border 1px solid #ee5602
         color #ffe6df
      .change-bind
        margin-left 225px
</style>

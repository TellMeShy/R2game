<template>
  <div class="changephoSucce">
    <h5>个人中心－手机绑定</h5>
    <div class="lan_Neirong">

      <!--操作步骤 区 开始-->
      <div class="StepBar">
        <p class="Step2zu sp2_1"><span class="stzi_1">绑定手机</span><span class="stzi_3">绑定成功</span></p>
      </div>
      <h6><i class="bind-sure"></i>您的帐号已绑定手机号码</h6>
      <p class="bind-e-n">绑定的手机号码为：<a>{{pho}}</a></p>
      <router-link to="/personage/" class="button">返回平台</router-link>
    </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './../component/alert.vue'
export default {
  name: 'changephoSucce',
  data () {
    return {
      massagenew:'',
      menucheck:1,
      pho:''
    }
  },
  components:{
    Valert
  },
  created:function () {
    let name = 'userName='
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++)
    {
      let c = ca[i].trim();
      if (c.indexOf(name)==0)
      if(/@/.test(c.split('=')[1])){
        document.cookie="userName="+c.split('=')[1].replace('@','');
        window.location.reload();
      }
    }
    let url=weUrl+'?ct=userHome';
    let parmas={}
    this.$http.get(url,parmas)
      .then(function(data){
        if(data.body.state){
          var mobile = data.body.data.phone
          if (mobile.length > 7) {
            var new_mobile = mobile.substr(0, 3) + '****' + mobile.substr(7)
          }
          this.pho = new_mobile
        }else {
          this.onMassageChange(data.body.message)
        }

      },function(response){

      })
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .changephoSucce
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

<template>
  <div class="email3">
    <h5>个人中心－邮箱绑定</h5>
    <div class="lan_Neirong">

      <!--操作步骤 区 开始-->
      <div class="StepBar">
        <p class="Step3zu sp3_1">
          <span class="stzi_1">1. 绑定新邮箱</span>
          <!--<span class="icon_step_a"></span>-->
          <span class="stzi_4">2. 验证邮箱</span>
          <!--<span class="icon_step_b"></span>-->
          <span class="stzi_5">3. 邮箱绑定成功</span></p>
      </div>
      <h6><i class="bind-sure"></i>您的帐号已绑定邮箱</h6>
      <p class="bind-e-n">绑定的邮箱为：<a>{{email}}</a></p>
      <router-link to="/personage/changemail" class="button">修改绑定</router-link>

      <!--安全习惯区开始-->
      <div class="safeNoteQu">
        <p class="safe_bts">没有绝对的安全，只有养成良好的安全习惯，才能尽可能的保护帐号不会丢失。</p>
        <p> 如何养成良好的安全习惯：</p>
        <p> 1、安装知名杀毒软件，并保持及时更新。<br>
          2、不安装来历不明的软件或控件。<br>
          3、经常更换密码，且保持密码的安全强度。<br>
          4、帐号只可自己使用，不给予他人使用，不告诉他人密码。<br>
          5、密保资料妥善保管，不泄露给他人。</p>
      </div>
      <!--安全习惯区结束-->

    </div>
  </div>

</template>

<script>
export default {
  name: 'email3',
  data () {
    return {
      schedule:1,
      email:''
    }
  },
  created:function () {
    let url=weUrl+'?ct=userHome';
    let parmas={}
    this.$http.get(url,parmas)
      .then(function(data){
        var email = data.body.data.email
        if (String(email).indexOf('@') > 0) {
          var str = email.split('@'),
            _s = '';
          if (str[0].length > 3) {
            for (var i = 0; i < str[0].length - 3; i++) {
              _s += '*';
            }
          }
          var new_email = str[0].substr(0, 3) + _s + '@' + str[1]
        }
        this.email = new_email
      },function(response){

      })
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.email3
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
      .Step3zu
        color: #fff;
        height: 36px;
        line-height: 36px;
        span
          display: inline-block;
          text-align: center;
          vertical-align: top;
          background: url(../../../static/img/personage/arrow_icon.png) no-repeat 0 -93px;
        .stzi_1
          width: 208px;
        .stzi_4
          background-position 0 -239px
          width 209px
        .stzi_5
          background-position 0 -288px
          width 209px
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
      padding-bottom 44px
      a
        color #de4205
    .button
      display block
      width: 87px;
      height: 36px;
      line-height: 36px;
      color: #fff;
      border none
      margin 0 auto 6px
      padding: 0 0px;
      font-size: 12px;
      vertical-align: top;
      text-align: center;
      background: url(../../../static/img/personage/sprite_user_btn.png)no-repeat;
      overflow: hidden;
      cursor: pointer;
      background-position: 0 -55px;
    .safeNoteQu
      margin-top: 20px;
      padding: 20px 0px 10px 10px;
      line-height: 200%;
      color: #999999;
      font-size: 12px;
      border-top: 1px dashed #CCCCCC;
      .safe_bts
        padding: 0px 0px 10px 0px;
        font-size: 16px;
        color: #45a83b;
</style>

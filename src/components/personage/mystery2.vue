<template>
  <div class="mystery2">
    <h5>防沉迷系统－实名认证</h5>
    <div class="lan_Neirong">

      <!--操作步骤 区 开始-->
      <div class="StepBar">

      <div class="ZhengNoteZu">为保证账户安全，请填写您正确的登入密码</div>
      <!--证件提示区结束-->

      <!--邮箱绑定输入 区开始-->
      <div class="Mailbang01Group">
        <p>
          <span>登入密码：</span>
          <input type="password">
        </p>
        <router-link to="/personage/mystery3"><button>下一步</button></router-link>
      </div>
      <!--邮箱绑定输入 区结束-->

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
  </div>
</template>

<script>
export default {
  name: 'mystery2',
  data () {
    return {
      menucheck:1
    }
  },
  methods:{
    checkBox: function () {
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          data[arguments[n]]=arguments[0]
        }
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.mystery2
  h5
    padding: 0px 0px 10px 0px;
    border-bottom: 3px solid #de4205;
    font-size: 18px;
    color: #de4205;
    font-weight: bold;
  .lan_Neirong
    padding: 30px 40px;
    padding-top  18px
    background: #fff;
    border: 1px solid #e1e1e1;
    border-top: none;
    min-height: 450px;
    _height: 450px;
    font-size: 14px;
    .StepBar
      padding-bottom 10px
    .ZhengNoteZu
      margin-bottom: 13px;
      padding: 0px 0px 18px 10px;
      line-height: 200%;
      color: #999999;
      text-align: center;
      border-bottom: 1px dashed #CCCCCC;
    .Mailbang01Group
      padding: 10px 40px 10px 30px;
      p
        padding: 8px 0px 21px 0px;
        color: #7e7e7e;
        span
          display: inline-block;
          width: 150px;
          text-align: right;
        input
          border: 1px solid #dbdbdb;
          font-size: 14px;
          height: 20px;
          line-height: 20px;
          width: 240px;
          vertical-align: middle;
      button
        display block
        width: 87px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        border none
        margin-bottom 6px
        margin-left 155px
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

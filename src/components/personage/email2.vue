<template>
  <div class="email">
    <h5>个人中心－邮箱绑定</h5>
    <div class="lan_Neirong">

      <!--操作步骤 区 开始-->
      <div class="StepBar">
        <p class="Step3zu sp3_1">
          <span class="stzi_1">1. 绑定新邮箱</span>
          <!--<span class="icon_step_a"></span>-->
          <span class="stzi_4">2. 验证邮箱</span>
          <!--<span class="icon_step_b"></span>-->
          <span class="stzi_3">3. 邮箱绑定成功</span></p>
      </div>
      <!--<div class="bind-email" v-if="schedule==1">-->
        <!--<div class="ZhengNoteZu">为保证账户安全，请填写您常用的安全邮箱地址。</div>-->
        <!--<div class="Mailbang01Group">-->
          <!--<p><span>邮件地址：</span> <input type="text"></p>-->
          <!--<p class="verification"><span>验证码：</span> <input type="text"><img src="" alt=""> 看不清？<a>换一张</a></p>-->
          <!--<a @click="checkBox(2,'schedule')" class=""><button>下一步</button></a>-->
        <!--</div>-->
      <!--</div>-->
      <div class="emil2-message">
        <p>您要绑定的邮箱为:<a>{{email}}</a></p>
        <p>我们已向你的邮箱发送了认证邮件，请进入您的邮箱，点击激活链接，激活您的邮箱绑定。</p>
        <p>(激活链接有效时间为24小时)</p>
        <p>长期未收到邮件，请点击此处<router-link to="/personage/email">重新发送邮件</router-link></p>
        <div class="btn-box">
          <a target="_blank" :href="newUrl"><button>进入邮箱</button></a>
          <router-link to="/personage/email"><button class="again">重新填写</button></router-link>
        </div>
      </div>



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
  name: 'email',
  data () {
    return {
      newUrl:'',
      email:''
    }
  },
  created:function () {
    this.newUrl = sessionStorage.getItem('newUrl')
//    sessionStorage.removeItem('newUrl')
    let email = sessionStorage.getItem('email')
    if (String(email).indexOf('@') > 0) {
      let str = email.split('@'),
        _s = '';
      if (str[0].length > 3) {
        for (let i = 0; i < str[0].length - 3; i++) {
          _s += '*';
        }
      }
      let new_email = str[0].substr(0, 3) + _s + '@' + str[1]
      this.email = new_email
    }

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
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
      padding-bottom 10px
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
        .stzi_3
          background-position 0 -188px
          width 209px
          color: #626262;

     .bind-email
      .ZhengNoteZu
        margin-bottom: 13px;
        padding: 7px 0px 18px 10px;
        line-height: 200%;
        color: #999999;
        text-align: center;
        border-bottom: 1px dashed #CCCCCC;
      .Mailbang01Group
        padding: 10px 40px 10px 30px;
        p
          padding: 8px 0px 8px 0px;
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
        .verification
          input
            width 146px
          img
            width 95px
            height 30px
            vertical-align: middle;
            margin-left 3px
          a
            color #de4205
        button
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

  .emil2-message
      padding-top 20px
      p
        line-height 26px
        font-size 14px
        color #999
        a
          color #de4205
      .btn-box
        width 199px
        padding-top 26px
        overflow hidden
        margin auto
        button
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
          float left
          &:hover
            background-position: 0 -94px;
        .again
          float right
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

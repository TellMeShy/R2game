<template>
  <div class="changemail">
    <h5>个人中心－邮箱绑定</h5>
    <div class="lan_Neirong">

      <!--操作步骤 区 开始-->
      <div class="StepBar">
        <p class="Step3zu sp3_1">
          <span class="stzi_1">1. 发送邮件</span>
          <!--<span class="icon_step_a"></span>-->
          <span class="stzi_2">2. 验证邮箱</span>
          <!--<span class="icon_step_b"></span>-->
          <span class="stzi_3">3. 邮箱绑定成功</span></p>
      </div>
      <!--操作步骤 区 结束-->

      <!--证件提示区 开始-->
      <div class="ZhengNoteZu">为保证账户安全，请填写您旧的邮箱地址。</div>
      <!--证件提示区结束-->

      <!--邮箱绑定输入 区开始-->
      <div class="Mailbang01Group" @keyup="Enter($event)">
        <p><span>旧邮箱地址：</span> <input type="text" v-model="email"><a v-if="emailError">&nbsp;*请确认邮箱格式正确</a></p>
        <p>
          <span>登入密码：</span>
          <input  onfocus="this.type='password'" type="text"  autocomplete="off" v-model="password" ><a v-if="passwordError">&nbsp;*请确认密码格式正确</a>
        </p>
        <p class="verification"><span>验证码：</span> <input type="text" v-model="verify"><img :src="imgSrc" alt="" @click="changeImg"> 看不清？<a @click="changeImg">换一张</a></p>
        <button @click="sure">下一步</button>
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
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './../component/alert.vue'
export default {
  name: 'changemail',
  data () {
    return {
      massagenew:'',
      email:'',
      emailError:true,
      password:'',
      passwordError:true,
      imgSrc:weUrl+'?ct=user&ac=verify&id=1',
      verify:''
    }
  },
  components:{
    Valert
  },
  watch:{
    email(val){
      let x = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
      this.email = val.replace(/ /g,'')
      if(x.test(this.email)){
        this.emailError=false
      }else {
        this.emailError=true
      }
    },
    password(val){
      this.password = val.replace(/ /g,'')
      let x = /^[0-9a-zA-Z]*$/g
      if((x.test(this.password))&&(this.password.length>5)&&(this.password.length<21)&&(/[0-9]/.test(this.password))&&(/[a-zA-Z]/.test(this.password))){
        this.passwordError=false
      }else {
        this.passwordError=true
      }
    }
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    Enter:function (ev) {
      if(ev.keyCode == 13){
        this.sure()
      }
    },
    changeImg:function () {
      this.imgSrc=this.imgSrc+'1'
    },
   sure:function () {
        var that = this
     if(this.emailError||this.passwordError||(!this.verify)){
         return
     }
     let url=weUrl+'?ct=userHome&ac=changeMailSend';
     let parmas={
       params:{
         email :this.email,
         password:this.password,
         verify:this.verify
       }
     }
     this.$http.get(url,parmas)
       .then(function(data){
         if(data.body.state){
           var hash={
             'qq.com':'//mail.qq.com',
             'gmail.com': '//mail.google.com',
             'sina.com': '//mail.sina.com.cn',
             '163.com': '//mail.163.com',
             '126.com': '//mail.126.com',
             'yeah.net': '//www.yeah.net/',
             'sohu.com': '//mail.sohu.com/',
             'tom.com': '//mail.tom.com/',
             'sogou.com': '//mail.sogou.com/',
             '139.com': '//mail.10086.cn/',
             'hotmail.com': '//www.hotmail.com',
             'live.com': '//login.live.com/',
             'live.cn': '//login.live.cn/',
             'live.com.cn': '//login.live.com.cn',
             '189.com': '//webmail16.189.cn/webmail/',
             'yahoo.com.cn': '//mail.cn.yahoo.com/',
             'yahoo.cn': '//mail.cn.yahoo.com/',
             'eyou.com': '//www.eyou.com/',
             '21cn.com': '//mail.21cn.com/',
             '188.com': '//www.188.com/',
             'foxmail.coom': '//www.foxmail.com'
           };
           let url = this.email.split('@')[1];
           let newUrl = ''
           for (let key in hash){
             if(url == key){
               newUrl=hash[key]
               sessionStorage.setItem('newUrl',newUrl)
             }
           }
           sessionStorage.setItem('email',this.email)
           if(newUrl==''){
             sessionStorage.setItem('newUrl','http://www.baidu.com')
             this.$router.push('/personage/email2')
           }else {
             this.$router.push('/personage/email2')
           }
         }else {
           this.onMassageChange(data.body.message)
           this.imgSrc=this.imgSrc+'1'
         }
       },function(response){

       })
   }
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
        .stzi_2
          background-position 0 -140px
          width 209px
          color: #626262;
        .stzi_3
          background-position 0 -188px
          width 209px
          color: #626262;


    .ZhengNoteZu
      margin-bottom: 13px;
      padding: 7px 0px 18px 10px;
      line-height: 200%;
      color: #999999;
      text-align: center;
      border-bottom: 1px dashed #CCCCCC;
    .Mailbang01Group
      padding: 10px 40px 10px 30px;
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
      p
        padding: 8px 0px 8px 0px;
        color: #7e7e7e;
        a
          font-size 12px
          color #de4205
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
        margin 11px 0 6px 154px
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

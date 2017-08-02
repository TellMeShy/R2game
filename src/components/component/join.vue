<template>
  <div class="Vjoin">
    <div class="black-bg" v-if="popUp">
      <div>
        <h5>{{popUp}} <div v-on:click="popUpWindow(false)">×</div></h5>
        <div v-if="popUp=='账号登录'" class="" @keyup="toLogin($event)">
          <div class="logo"></div>
          <div class="username">
            <i class="icon icon-log"></i>
            <input class="userinput" type="text" placeholder="请输入账号" v-model="username" v-on:blur="checkLogUser(username,'userError')">
            <p v-if="userError"><i class="icon icon-exclamation"></i>5-20个小写英文字母或数字组成</p>
          </div>
          <div class="password">
            <i class="icon icon-password"></i>
            <input type="password"  autocomplete="off" class="userinput" placeholder="请输入密码" v-model="password" v-on:blur="checkPassword(password,'passwordError')">
            <p v-if="passwordError"><i class="icon icon-exclamation"></i>6-20个数字字母混合，不含空格键</p>
          </div>
          <div class="orther">
            <input type="checkbox" v-model="cookieUser">记住用户名
            <a @click="retrievePassword" class="hovera">忘记密码？</a>
          </div>
          <button v-on:click="login">登录</button>
          <p class="register">没有账号？请<a v-on:click="popUpWindow('快速注册')">注册</a></p>
          <!--<p class="ortherLogo">-->
            <!--其他登录方式-->
            <!--<i class="icon icon-xr"></i>-->
            <!--<i class="icon icon-wx"></i>-->
            <!--<i class="icon icon-qq"></i>-->
            <!--<i class="icon icon-tx"></i>-->
          <!--</p>-->
        </div>
        <div v-if="popUp=='快速注册'">
          <ul>
            <li v-bind:class="{current:register==1}" @mouseenter="hoverBox(1,'register')">通行证注册</li>
            <li v-bind:class="{current:register==2}" @mouseenter="hoverBox(2,'register')">手机号码注册</li>
          </ul>
          <div v-if="register==1" class="register-content" @keyup="toTraffic($event)" >
            <input type="text" placeholder="账号" v-model="registers.traffic.username" v-on:blur="checkUser(registers.traffic.username,'registers','traffic','userError')">
            <p class="error" v-bind:class="{istrue:!registers.traffic.userError}"><i class="icon icon-exclamation" v-if="registers.traffic.userError"></i>5-20位字母和数字混合</p>
            <input type="password" autocomplete="off"  placeholder="密码" v-model="registers.traffic.password" v-on:blur="checkPassword(registers.traffic.password,'registers','traffic','passwordError')">
            <p class="error" v-bind:class="{istrue:!registers.traffic.passwordError}"><i class="icon icon-exclamation" v-if="registers.traffic.passwordError"></i>6-20个数字字母混合，不含空格键</p>
            <input type="password" autocomplete="off"  placeholder="确认密码" v-model="registers.traffic.passwordSure" v-on:blur="checkPasswordSure(registers.traffic.passwordSure,registers.traffic.password)">
            <p class="error" v-bind:class="{istrue:!registers.traffic.passwordSureError}"><i class="icon icon-exclamation" v-if="registers.traffic.passwordSureError"></i>两次输入的密码不一致</p>
            <input type="text" placeholder="真实姓名" v-model="registers.traffic.name" v-on:blur="checkName(registers.traffic.name,'registers','traffic','nameError')">
            <p class="error" v-bind:class="{istrue:!registers.traffic.nameError}"><i class="icon icon-exclamation" v-if="registers.traffic.nameError"></i>请输入您的姓名，2至4个汉字，例如：张三</p>
            <input type="text" placeholder="身份证号码" v-model="registers.traffic.idcard" v-on:blur="checkIdcard(registers.traffic.idcard,'registers','traffic','idcardError')">
            <p class="error" v-bind:class="{istrue:!registers.traffic.idcardError}"><i class="icon icon-exclamation" v-if="registers.traffic.idcardError"></i>请准确填写身份证号码</p>
            <div class="verification">
              <input type="text" v-model="registers.traffic.verify" v-on:blur="checkVerify(registers.traffic.verify,'registers','traffic','verifyError')">
              <img :src="registers.imgSrc" alt="" @click="changeImg">
              <a class="icon icon-re" @click="changeImg"></a>
            </div>
            <p class="error" v-bind:class="{istrue:!registers.traffic.verifyError}"><i class="icon icon-exclamation" v-if="registers.traffic.verifyError"></i>请输入验证码</p>
            <p class="agreement"><input type="checkbox" class="check" v-model="registers.traffic.agree"><a>阅读并同意魔力通行证注册协议</a></p>
            <button v-on:click="registersTraffic">快速注册</button>
            <p class="register">已注册？请<a v-on:click="popUpWindow('账号登录')">登录</a></p>
            <!--<p class="ortherLogo">-->
              <!--其他登录方式-->
              <!--<i class="icon icon-xr"></i>-->
              <!--<i class="icon icon-wx"></i>-->
              <!--<i class="icon icon-qq"></i>-->
              <!--<i class="icon icon-tx"></i>-->
            <!--</p>-->
          </div>
          <div v-if="register==2" class="register-content"  @keyup="toPho($event)">
            <input type="text" placeholder="手机号码" v-model="registers.pho.phoNum" v-on:blur="checkPhoNum(registers.pho.phoNum,'registers','pho','phoNumError')">
            <p class="error" v-bind:class="{istrue:!registers.pho.phoNumError}"><i class="icon icon-exclamation" v-if="registers.pho.phoNumError"></i>请输入正确的手机号</p>
            <div class="verification">
              <input type="text" placeholder="验证码" v-model="registers.pho.verify" v-on:blur="checkVerify(registers.pho.verify,'registers','pho','verifyError')">
              <img :src="registers.imgSrc" alt="" @click="changeImg">
              <a class="icon icon-re" @click="changeImg"></a>
            </div>
            <p class="error" v-bind:class="{istrue:!registers.pho.verifyError}"><i class="icon icon-exclamation" v-if="registers.pho.verifyError"></i>请输入验证码</p>
            <div class="getMessage">
              <input type="text" placeholder="手机验证码" v-model="registers.pho.phoverify" @blur="phoverifyblur">
              <div class="getMessageBtb" @click="getMessage" v-if="!phoTime">获取验证码</div>
              <div v-if="phoTime" class="getMessageBtbNo">请稍等{{phoTime}}秒</div>
            </div>
            <p class="error" v-bind:class="{istrue:registers.pho.phoverify||(!registers.pho.check)}"><i class="icon icon-exclamation" v-if="(!registers.pho.phoverify)&&(registers.pho.check)"></i>请输短信入验证码</p>
            <input type="password" autocomplete="off"  placeholder="密码" v-model="registers.pho.password" v-on:blur="checkPassword(registers.pho.password,'registers','pho','passwordError')">
            <p class="error" v-bind:class="{istrue:!registers.pho.passwordError}"><i class="icon icon-exclamation" v-if="registers.pho.passwordError"></i>6-20个数字字母混合，不含空格键</p>
            <input type="password" autocomplete="off"  placeholder="确认密码" v-model="registers.pho.passwordSure" v-on:blur="checkPasswordSure1(registers.pho.passwordSure,registers.pho.password)">
            <p class="error" v-bind:class="{istrue:!registers.pho.passwordSureError}"><i class="icon icon-exclamation" v-if="registers.pho.passwordSureError"></i>两次输入的密码不一致</p>
            <input type="text" placeholder="真实姓名" v-model="registers.pho.name" v-on:blur="checkName(registers.pho.name,'registers','pho','nameError')">
            <p class="error" v-bind:class="{istrue:!registers.pho.nameError}"><i class="icon icon-exclamation" v-if="registers.pho.nameError"></i>请输入您的姓名，2至4个汉字，例如：张三</p>
            <input type="text" placeholder="身份证号码" v-model="registers.pho.idcard" v-on:blur="checkIdcard(registers.pho.idcard,'registers','pho','idcardError')">
            <p class="error" v-bind:class="{istrue:!registers.pho.idcardError}"><i class="icon icon-exclamation" v-if="registers.pho.idcardError"></i>请准确填写身份证号码</p>

            <p class="agreement"><input type="checkbox" class="check" v-model="registers.pho.agree"><a>阅读并同意魔力通行证注册协议</a></p>
            <button v-on:click="registersPho">快速注册</button>
            <p class="register">已注册？请<a v-on:click="popUpWindow('账号登录')">登录</a></p>
            <!--<p class="ortherLogo">-->
              <!--其他登录方式-->
              <!--<i class="icon icon-xr"></i>-->
              <!--<i class="icon icon-wx"></i>-->
              <!--<i class="icon icon-qq"></i>-->
              <!--<i class="icon icon-tx"></i>-->
            <!--</p>-->
          </div>
        </div>
      </div>
    </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './alert.vue'
export default {
  name: 'Vjoin',
  components:{
    Valert
  },
  props: ['webpopUp'],
  data () {
    return {
      massagenew:'',
      popUp:this.webpopUp,
      username:'',
      phoTime:'',
      password:'',
      userError:false,
      passwordError:false,
      cookieUser:false,
      register:1,
      registers:{
        imgSrc:weUrl+'?ct=user&ac=verify&id=1',
        traffic:{
          username:'',
          userError:false,
          password:'',
          passwordError:false,
          passwordSure:'',
          passwordSureError:false,
          name:'',
          nameError:false,
          idcard:'',
          idcardError:false,
          agree:false,
          verify:'',
          verifyError:false,
        },
        pho:{
          check:'',
          phoNum:'',
          phoNumError:false,
          password:'',
          passwordError:false,
          passwordSure:'',
          passwordSureError:false,
          name:'',
          nameError:false,
          idcard:'',
          idcardError:false,
          agree:false,
          verify:'',
          verifyError:false,
          phoverify:''
        }
      }
    }
  },
  created:function () {
    if(sessionStorage.getItem('userName')){
      this.username = sessionStorage.getItem('userName')
    }else {
      this.username = ''
    }
    if(localStorage.getItem('time')){
      let that = this
      this.phoTime = localStorage.getItem('time')
      that.settime = setInterval(function () {
        that.phoTime--
        localStorage.setItem('time',that.phoTime)
        if(that.phoTime <= 0) {
          that.phoTime=''
          localStorage.removeItem('time')
          clearInterval(that.settime);
        }

      },1000)
    }
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    phoverifyblur:function () {
      this.registers.pho.check = true
    },
    toLogin:function(ev){
      if(ev.keyCode == 13){
        this.login()
      }
    },
    toPho:function(ev){
      if(ev.keyCode == 13){
        this.registersPho()
      }
    },
    toTraffic:function(ev){
      if(ev.keyCode == 13){
        this.registersTraffic()
      }
    },
    checkBox: function () {
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          data[arguments[n]]=arguments[0]
        }
      }

    },
    retrievePassword:function () {
      this.popUp= ''
      this.$router.push('/retrievePassword')
    },
    changeImg:function () {
      this.registers.imgSrc=this.registers.imgSrc+'1'
    },
    hoverBox: function () {
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          data[arguments[n]]=arguments[0]
        }
      }
    },
    popUpWindow:function (a) {        //弹窗
      this.popUp=a
    },
    checkUser:function () {         //检测用户名
      var x = /^[0-9a-zA-Z]*$/g
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          if(arguments[0].length<5||arguments[0].length>20){
            data[arguments[n]] = true
          }else if(x.test(arguments[0])&&(/[0-9]/.test(arguments[0]))&&(/[a-zA-Z]/.test(arguments[0]))) {
            data[arguments[n]] = false
          }else {
            data[arguments[n]] = true
          }
        }
      }
    },
    checkLogUser:function () {         //检测用户名
      var x = /^[0-9a-zA-Z]*$/g
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          if(arguments[0].length<5||arguments[0].length>20){
            data[arguments[n]] = true
          }else if(x.test(arguments[0])){
            data[arguments[n]] = false
            return
          }else {
            data[arguments[n]] = true
          }
        }
      }
    },
    checkPassword:function () {      //检测密码
      var x = arguments[0].replace(/ /g, "");
      var y = /^[0-9a-zA-Z]*$/g
      var data = this
      for (var n=1;n<=arguments.length;n++) {
        if (arguments.length - n > 1) {
          data = data[arguments[n]]
        }
        else {
          if(x.length<6||x.length>20){
            data[arguments[n]] = true
          } else if((y.test(x))&&(/[a-zA-Z]/.test(x))&&(/[0-9]/.test(x))){
            data[arguments[n]] = false
          }else{
            data[arguments[n]] = true
          }
        }
      }
    },
    checkPasswordSure:function (a,b) {      //确认密码相同
      this.registers.traffic.passwordSureError = (!(b==a))
    },
    checkPasswordSure1:function (a,b) {      //确认密码相同
      this.registers.pho.passwordSureError = (!(b==a))
    },
    checkName:function () {                 //检测名字
      var x = /^[\u4e00-\u9fa5]+$/g
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          if(arguments[0].length<2||arguments[0].length>4){
            data[arguments[n]] = true
          }else if(x.test(arguments[0])){
            data[arguments[n]] = false
          }else {
            data[arguments[n]] = true
          }
        }
      }
    },
    checkIdcard:function () {             //检测身份证
      var x = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9X]$/
      var y = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          if(x.test(arguments[0])||y.test(arguments[0])){
            data[arguments[n]] = false
          }else {
            data[arguments[n]] = true
          }
        }
      }
    },
    checkVerify: function () {
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          if(arguments[0].length>0){
            data[arguments[n]] = false
          }else {
            data[arguments[n]] = true
          }
        }
      }
    },
    checkPhoNum:function () {
      var x = /^1[34578]\d{9}$/
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          if(x.test(arguments[0])){
            data[arguments[n]] = false
          }else {
            data[arguments[n]] = true
          }
        }
      }
    },
    getMessage:function () {          //获取手机短信
      if(!this.registers.pho.phoNumError&&this.registers.pho.phoNum!=''){
        let url=weUrl+'?ct=user&ac=sendInfo';
        let parmas={
          params:{
            phone:this.registers.pho.phoNum,
            type:1
          }
        }
        this.$http.get(url,parmas)
          .then(function(data){
            if(data.body.state){
              localStorage.setItem('time',60)
              this.phoTime = 60
              if(localStorage.getItem('time')){
                let that = this
                this.phoTime = localStorage.getItem('time')
                that.settime = setInterval(function () {
                  that.phoTime--
                  localStorage.setItem('time',that.phoTime)
                  if(that.phoTime <= 0) {
                    that.phoTime=''
                    localStorage.removeItem('time')
                    clearInterval(that.settime);
                  }

                },1000)
              }
            }else {
              this.onMassageChange(data.body.message)
            }
          },function(response){

          })
      }
    },
    login:function () {                 //登入账号
      if(this.userError||this.passwordError||this.username==''||this.password==''){
        this.checkLogUser(this.username)
        this.checkPassword(this.password)
        return
      }
      if(this.cookieUser){
        localStorage.setItem('userName',this.username)
      }
      let url=weUrl+'?ct=user&ac=login';
      let parmas={
        params:{username:this.username,password:this.password}
      }
      this.$http.get(url,parmas)
        .then(function(data){
          if(data.body.state){
            this.isLogin = this.username
            document.cookie="userName="+this.username;
            this.popUpWindow(false)
            window.location.reload();
          }else {
            this.onMassageChange(data.body.message)
          }
        },function(response){

        })

    },
    registersTraffic:function () {
      if(this.registers.traffic.userError||this.registers.traffic.passwordError||this.registers.traffic.passwordSureError||this.registers.traffic.nameError||this.registers.traffic.idcardError||!this.registers.traffic.verify||!this.registers.traffic.passwordSure){
        this.checkUser(this.registers.traffic.username,'registers','traffic','userError')
        this.checkPassword(this.registers.traffic.password,'registers','traffic','passwordError')
        this.checkPasswordSure(this.registers.traffic.passwordSure,this.registers.traffic.password)
        this.checkName(this.registers.traffic.name,'registers','traffic','nameError')
        this.checkIdcard(this.registers.traffic.idcard,'registers','traffic','idcardError')
        this.checkVerify(this.registers.traffic.verify,'registers','traffic','verifyError')
        return
      }
      if(!this.registers.traffic.agree){
        this.onMassageChange('请阅读并同意游族通行证注册协议!')
        return
      }
      this.$http.get(weUrl+'?ct=user&ac=checkVerify',{params:{verify:this.registers.traffic.verify}})
        .then(function(data){
          if(data.body.state){
            let url=weUrl+'?ct=user&ac=register';
            let parmas={
              params:{
                username:this.registers.traffic.username,
                password:this.registers.traffic.password,
                cname:this.registers.traffic.name,
                idcard:this.registers.traffic.idcard,
              }
            }
            this.$http.get(url,parmas)
              .then(function(data){
                if(data.body.state){
                  this.popUp='账号登录'
                }else {
                  this.onMassageChange(data.body.message)
                }
              },function(response){

              })
          }else {
            this.onMassageChange('验证码错误')
            this.registers.imgSrc=this.registers.imgSrc+'1'
          }
        },function(response){

        })

    },
    registersPho:function () {
      this.registers.pho.check=true;
      if(this.registers.pho.phoNumError||this.registers.pho.passwordError||this.registers.pho.passwordSureError||this.registers.pho.nameError||this.registers.pho.idcardError||!this.registers.pho.verify||!this.registers.pho.passwordSure||!this.registers.pho.phoverify){
        this.checkPhoNum(this.registers.pho.phoNum,'registers','pho','phoNumError')
        this.checkPassword(this.registers.pho.password,'registers','pho','passwordError')
        this.checkPasswordSure1(this.registers.pho.passwordSure,this.registers.pho.password)
        this.checkName(this.registers.pho.name,'registers','pho','nameError')
        this.checkIdcard(this.registers.pho.idcard,'registers','pho','idcardError')
        this.checkVerify(this.registers.pho.verify,'registers','pho','verifyError')
        return
      }
      if(!this.registers.pho.agree){
        this.onMassageChange('请阅读并同意游族通行证注册协议!')
        return
      }
      this.$http.get(weUrl+'?ct=user&ac=checkVerify',{params:{verify:this.registers.pho.verify}})
        .then(function(data){
          if(data.body.state){
            let url=weUrl+'?ct=user&ac=register';
            let parmas={
              params:{
                username:this.registers.pho.phoNum,
                password:this.registers.pho.password,
                cname:this.registers.pho.name,
                idcard:this.registers.pho.idcard,
                phoneVerify :this.registers.pho.phoverify
              }
            }
            this.$http.get(url,parmas)
              .then(function(data){
                if(data.body.state){
                  this.popUp='账号登录'
                }else {
                  this.onMassageChange(data.body.message)
                }
              },function(response){

              })
          }else {
            this.onMassageChange('验证码错误')
            this.registers.imgSrc=this.registers.imgSrc+'1'
          }
        },function(response){

        })

    }
  },
  watch: {
    username(val){
      this.username = val.replace(/ /g, "");
    },
    password(val){
      this.password = val.replace(/ /g, "");
    },
    'registers.traffic.username'(val){
      this.registers.traffic.username = val.replace(/ /g, "");
    },
    'registers.traffic.password'(val){
      this.registers.traffic.password = val.replace(/ /g, "");
    },
    'registers.traffic.passwordSure'(val){
      this.registers.traffic.passwordSure = val.replace(/ /g, "");
    },
    'registers.traffic.name'(val){
      this.registers.traffic.name = val.replace(/ /g, "");
    },
    'registers.traffic.idcard'(val){
      this.registers.traffic.idcard = val.replace(/ /g, "");
    },
    'registers.traffic.verify'(val){
      this.registers.traffic.verify = val.replace(/ /g, "");
    },
    'registers.pho.phoNum'(val){
      this.registers.pho.phoNum = val.replace(/ /g, "");
    },
    'registers.pho.password'(val){
      this.registers.pho.password = val.replace(/ /g, "");
    },
    'registers.pho.passwordSure'(val){
      this.registers.pho.passwordSure = val.replace(/ /g, "");
    },
    'registers.pho.name'(val){
      this.registers.pho.name = val.replace(/ /g, "");
    },
    'registers.pho.idcard'(val){
      this.registers.pho.idcard = val.replace(/ /g, "");
    },
    'registers.pho.verify'(val){
      this.registers.pho.verify = val.replace(/ /g, "");
    },
    'registers.pho.phoverify'(val){
      this.registers.pho.phoverify = val.replace(/ /g, "");
    },
    webpopUp(val) {
      this.popUp = val;//新增result的watch，监听变更并同步到myResult上
    },
    popUp(val){
      //xxcanghai 小小沧海 博客园
      this.$emit("on-popUp-change",val);//③组件内对myResult变更后向外部发送事件通知
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>

<template>
  <div class="retrievePasswordMemail">
    <div v-if="step==1">
      <dl>
        <dt>R2通行证:</dt>
        <dd>
          <input type="text" v-model="uesrname">
          <span v-if="uesrnameError"><i></i>请填写R2通行证</span>
        </dd>
      </dl>
      <dl>
        <dt>密保邮箱:</dt>
        <dd>
          <input type="text" v-model="email">
          <span v-if="emailError"><i></i>请填写密保邮箱</span>
        </dd>
      </dl>
      <dl>
        <dt>验证码:</dt>
        <dd>
          <input type="text" class="code" v-model="verify">&nbsp;看不清？<a @click="changeImg">换一张</a>
          <span v-if="!verify"><i></i>请填写验证码</span>
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <img :src="imgSrc" alt="" @click="changeImg">
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd><button @click="routerTo">下一步</button></dd>
      </dl>
    </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>
</template>

<script>
  import Valert from './../../component/alert.vue'
export default {
  name: 'retrievePasswordMemail',
  data () {
    return {
      massagenew:'',
      uesrname:'',
      uesrnameError:true,
      email:'',
      emailError:true,
      verify:'',
      step:1,
      imgSrc:weUrl+'?ct=user&ac=verify&id=1',
    }
  },
  components:{
    Valert
  },
  watch:{
    uesrname(val){
      this.uesrname = val.replace(/ /g, "");
      var x = /^[0-9a-zA-Z]*$/g
      if(val.length<5||val.length>20){
        this.uesrnameError = true
      }else if(x.test(arguments[0])){
        this.uesrnameError  = false
      }else {
        this.uesrnameError  = true
      }
    },
    email(val){
      let x = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
      this.email = val.replace(/ /g,'')
      if(x.test(this.email)){
        this.emailError=false
      }else {
        this.emailError=true
      }
    },
    verify(val){
      this.verify = val.replace(/ /g, "");
    }
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    routerTo:function () {
        if (this.uesrnameError||this.emailError||(!this.verify)){
            return
        }
      let url=weUrl+'?ct=user&ac=emailFindPassword';
      let parmas={
        params:{
          email:this.email,
          username:this.uesrname,
          verify:this.verify
        }
      }
      this.$http.get(url,parmas)
        .then(function(data){
          if(data.body.state){
            var hash={
              'qq.com':'http://mail.qq.com',
              'gmail.com': 'http://mail.google.com',
              'sina.com': 'http://mail.sina.com.cn',
              '163.com': 'http://mail.163.com',
              '126.com': 'http://mail.126.com',
              'yeah.net': 'http://www.yeah.net/',
              'sohu.com': 'http://mail.sohu.com/',
              'tom.com': 'http://mail.tom.com/',
              'sogou.com': 'http://mail.sogou.com/',
              '139.com': 'http://mail.10086.cn/',
              'hotmail.com': 'http://www.hotmail.com',
              'live.com': 'http://login.live.com/',
              'live.cn': 'http://login.live.cn/',
              'live.com.cn': 'http://login.live.com.cn',
              '189.com': 'http://webmail16.189.cn/webmail/',
              'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
              'yahoo.cn': 'http://mail.cn.yahoo.com/',
              'eyou.com': 'http://www.eyou.com/',
              '21cn.com': 'http://mail.21cn.com/',
              '188.com': 'http://www.188.com/',
              'foxmail.coom': 'http://www.foxmail.com'
            };
            let url = this.email.split('@')[1];
            let newUrl = ''
            for (let key in hash){
              if(url == key){
                newUrl=hash[key]
                sessionStorage.setItem('newUrl',newUrl)
                this.$router.push('/retrievePassword/retrievePasswordSucce/retrievePasswordEmSucce')
              }
            }
            if(newUrl==''){
              sessionStorage.setItem('newUrl','http://www.baidu.com')
              this.$router.push('/retrievePassword/retrievePasswordSucce/retrievePasswordEmSucce')
            }
          }else {
            this.imgSrc = this.imgSrc+1
            this.onMassageChange(data.body.message)
          }
        },function(response){

        })


    },
    changeImg:function () {
      this.imgSrc = this.imgSrc+1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">



</style>

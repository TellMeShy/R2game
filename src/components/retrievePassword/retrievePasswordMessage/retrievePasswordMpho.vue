<template>
  <div class="retrievePasswordMpho">
    <div v-if="step==1" @keyup="Enter($event)">
      <!--<dl>-->
        <!--<dt>R2通行证:</dt>-->
        <!--<dd>-->
          <!--<input type="text" v-model="uesrname">-->
          <!--<span v-if="uesrnameError"><i></i>请填写正确的R2通行证</span>-->
        <!--</dd>-->
      <!--</dl>-->
      <dl>
        <dt>手机号码绑定:</dt>
        <dd>
          <input type="text" v-model="pho">
          <span v-if="phoError"><i></i>请填写正确的手机号码绑定</span>
        </dd>
      </dl>
      <dl>
        <dt>输入验证码:</dt>
        <dd>
          <input type="text" v-model="verify">
          <span v-if="!verify"><i></i>请输入验证码</span>
        </dd>
      </dl>
      <dl>
        <dt></dt>
        <dd><img :src="imgSrc" alt="" @click="changeImg"></dd>
      </dl>
      <dl>
        <dt></dt>
        <dd><button @click="next">下一步</button></dd>
      </dl>
    </div>
    <div v-if="step==2">
      <dl>
        <dt>收到验证码:</dt>
        <dd><input type="text" v-model="$verify"><span v-if="!$verify"><i></i>请输入短信验证码</span></dd>
      </dl>
      <dl>
        <dt></dt>
        <dd>
          <a v-if="!phoTime" @click="getMessage">重新发送验证码</a>
          <a v-if="phoTime" class="wait">已发送，请稍等{{phoTime}}</a>
        </dd>
      </dl>
      <dl>
        <dt>新的登录密码:</dt>
        <dd><input type="password" v-model="password"><span v-if="passwordError"><i></i>6-20个数字字母混合，不含空格键</span></dd>
      </dl>
      <dl>
        <dt>确认登录密码:</dt>
        <dd><input type="password" v-model="passwordSure"><span v-if="passwordSure!=password"><i></i>两次输入的密码不一致</span></dd></dd>
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
  name: 'choose',
  data () {
    return {
      massagenew:'',
      phoTime:'',
      pho:'',
      verify:'',
      phoError:true,
      step:1,
      imgSrc:weUrl+'?ct=user&ac=verify&id=1',
      password:'',
      passwordError:true,
      passwordSure:'',
      $verify:''
    }
  },
  components:{
    Valert
  },
  created:function () {
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
  watch:{
    pho(val){
      this.pho = val.replace(/ /g, "");
      var x = /^1[34578]\d{9}$/
      if(x.test(val)){
        this.phoError=false
      }else {
        this.phoError=true
      }
    },
    verify(val){
      this.verify = val.replace(/ /g, "");
    },
    password(val){
      this.password = val.replace(/ /g,'')
      let x = /^[0-9a-zA-Z]*$/g
      if((x.test(this.password))&&(this.password.length>5)&&(this.password.length<21)&&(/[0-9]/.test(this.password))&&(/[a-zA-Z]/.test(this.password))){
        this.passwordError=false
      }else {
        this.passwordError=true
      }
    },
    passwordSure(val){
      this.passwordSure = val.replace(/ /g, "");
    }
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    Enter:function (ev) {
      if(ev.keyCode == 13){
        this.next ()
      }
    },
    next:function () {
      if((!this.phoError)&&this.verify){
        this.$http.get(weUrl+'?ct=user&ac=checkVerify',{params:{verify:this.verify}})
          .then(function(data){
            if(data.body.state){
              let url=weUrl+'?ct=user&ac=sendInfo';
              let parmas={
                params:{
                  phone:this.pho,
                  type:3
                }
              }
              this.$http.get(url,parmas)
                .then(function(data){
                  if(data.body.state){
                    this.step = 2
                    localStorage.setItem('time',60)
                    this.phoTime = 60
                    if(localStorage.getItem('time')) {
                      let that = this
                      this.phoTime = localStorage.getItem('time')
                      that.settime = setInterval(function () {
                        that.phoTime--
                        localStorage.setItem('time', that.phoTime)
                        if (that.phoTime <= 0) {
                          that.phoTime = ''
                          localStorage.removeItem('time')
                          clearInterval(that.settime);
                        }

                      }, 1000)
                    }
                  }else {
                    this.onMassageChange(data.body.message)
                  }
                },function(response){

                })

            }else {
              this.onMassageChange('验证码错误')
              this.imgSrc=this.imgSrc+'1'
            }
          },function(response){

          })
      }

    },
    routerTo:function () {
        if(this.passwordError||(this.passwordSure!=this.password)||(!this.$verify)){
            return
        }
      let url=weUrl+'?ct=user&ac=findPsw';
      let parmas={
        params:{
          phone:this.pho,
          password:this.password,
          verify:this.$verify
        }
      }
      this.$http.get(url,parmas)
        .then(function(data){
          if(data.body.state){
            this.$router.push('/retrievePassword/retrievePasswordSucce/retrievePasswordPSucce')
          }else {
            this.onMassageChange(data.body.message)
          }
        },function(response){

        })

    },
    changeImg:function () {
      this.imgSrc = this.imgSrc+1
    },
    getMessage:function () {
      if(!this.phoError){
        let url=weUrl+'?ct=user&ac=sendInfo';
        let parmas={
          params:{
            phone:this.pho,
            type:3
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
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

#app
  .wait
    text-decoration none
    cursor none
    color #dbdbdb


</style>

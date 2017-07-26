<template>
  <div class="changePassword">
    <div @keyup="Enter($event)">
      <dl>
        <dt>收到验证码:</dt>
        <dd><div class="emverify">{{token}}</div></dd>
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
  name: 'changePassword',
  data () {
    return {
      user_id:'',
      token:'',
      password:'',
      passwordError:true,
      passwordSure:'',
      verify:'',
      imgSrc:weUrl+'?ct=user&ac=verify&id=1',
    }
  },
  components:{
    Valert
  },
  created:function () {
    let key = location.href.split('?user_id=')[1].split('&token=');
    this.user_id = key[0]
    this.token = key[1]
  },
  watch:{
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
        this.routerTo ()
      }
    },
    routerTo:function () {
        if(this.passwordError||(this.passwordSure!=this.password)||(!this.verify)){
            return
        }
      let url=weUrl+'?ct=user&ac=emailFindPasswordCheck';
      let parmas={
        params:{
          phone:this.pho,
          password:this.password,
          verify:this.verify,
          token:this.token,
          user_id:this.user_id
        }
      }
      this.$http.get(url,parmas)
        .then(function(data){
          if(data.body.state){
            this.$router.push('/retrievePassword/retrievePasswordSucce/retrievePasswordESucce')
          }else {
            this.imgSrc = this.imgSrc+1

            this.onMassageChange(data.body.message)
          }
        },function(response){

        })

    },
    changeImg:function () {
      this.imgSrc = this.imgSrc+1
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
  /*.changePassword*/
  .emverify
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width 77px
    background #fff8d1
    text-align center
    display inline-block
    line-height 25px
    height 25px

</style>

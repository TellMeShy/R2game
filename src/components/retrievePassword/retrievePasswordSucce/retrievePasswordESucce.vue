<template>
  <div id="retrievePasswordESucce">
    <div class="step">
      <p class="hint">
        <i class="succe"></i>您的新的密码已修改完毕，请用新密码重新登入
      </p>
      <div class="button"><button class="login" @click="popUpWindow('账号登录')">重新登录</button>  </div>
      <Vjoin :webpopUp="popUp" @on-popUp-change="onPopUpChange"></Vjoin>
    </div>
  </div>
</template>

<script>
  import Vjoin from './../../../components/component/join.vue'
export default {
  name: 'retrievePasswordESucce',
  data () {
    return {
      popUp:''
    }
  },
  components:{
    Vjoin
  },
  methods:{
    popUpWindow:function (a) {        //弹窗
      this.popUp=a
    },
    onPopUpChange:function (val) {    //接受弹窗传值
      this.popUp=val
    },
  },
  created:function () {
    let name = 'userName='
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++)
    {
      let c = ca[i].trim();
      if (c.indexOf(name)==0){
        this.$router.push("/")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  #retrievePasswordESucce
    .step
      p
        font-size 14px
      .button
        margin-left 296px
        margin-right 16px
      >button
        height 38px
        border 1px solid #dbdbdb
        background #efefef
        color #626262
        width 61px
      .login
        margin 0 auto


</style>

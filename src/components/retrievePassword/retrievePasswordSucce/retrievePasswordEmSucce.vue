<template>
  <div id="retrievePasswordEmSucce">
    <div class="step" v-if="!bindE">
      <p class="hint">
        <i class="succe"></i>我们已向您的绑定邮箱发送了密码修改确认邮件，请速至邮箱，点击确认链接。注意链接有效时间为24小时！
      </p>
      <div class="button"><a :href="newUrl"><button>进入邮箱</button></a></div><router-link to="/retrievePassword/retrievePasswordMessage/retrievePasswordMemail"><button>返回</button></router-link>
    </div>
  </div>
</template>

<script>
  import Vjoin from './../../../components/component/join.vue'
export default {
  name: 'retrievePasswordEmSucce',
  data () {
    return {
      bindE:false,
      popUp:'',
      newUrl:''
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
    this.newUrl = sessionStorage.getItem('newUrl')
    sessionStorage.removeItem('newUrl')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  #retrievePasswordEmSucce
    .step
      p
        font-size 14px
      .button
        margin-left 296px
        margin-right 16px
      >a
        button
          height 38px
          border 1px solid #dbdbdb
          background #efefef
          color #626262
          width 61px
      .login
        margin 0 auto


</style>

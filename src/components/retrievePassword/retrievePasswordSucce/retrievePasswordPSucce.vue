<template>
  <div class="retrievePasswordPSucce">
    <p class="hint">
      <i class="succe"></i>您的新密码已修改完毕，请用新密码重新进行登入
    </p>
    <div class="button"><button @click="popUpWindow('账号登录')">重新登入</button></div>
    <Vjoin :webpopUp="popUp" @on-popUp-change="onPopUpChange"></Vjoin>
  </div>
</template>

<script>
  import Vjoin from './../../../components/component/join.vue'
export default {
  name: 'retrievePasswordPSucce',
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
    if(sessionStorage.getItem('userName')){
      this.$router.push("/")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>

<template>
  <div class="mystery">
    <h5>防沉迷系统－实名认证</h5>
    <div class="lan_Neirong">
      <h6><i></i>帐号未实名认证，需要登记！</h6>
      <p>您的帐号如果还没有进行实名认证，请登记进行认证。</p>
      <router-link to="/personage/mystery2"><button>我要登记验证</button></router-link>
      <div class="safeNoteQu">
        <p class="safe_bts">没有绝对的安全，只有养成良好的安全习惯，才能尽可能的保护帐号不会丢失。</p>
        <p> 如何养成良好的安全习惯：</p>
        <p> 1、安装知名杀毒软件，并保持及时更新。<br>
          2、不安装来历不明的软件或控件。<br>
          3、经常更换密码，且保持密码的安全强度。<br>
          4、帐号只可自己使用，不给予他人使用，不告诉他人密码。<br>
          5、密保资料妥善保管，不泄露给他人。</p>
      </div>
    </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './../component/alert.vue'
  export default {
  name: 'mystery',
  data () {
    return {
      massagenew:'',
    }
  },
  components:{
    Valert
  },
  created:function () {
    let url=weUrl+'?ct=userHome';
    let parmas={}
    this.$http.get(url,parmas)
      .then(function(data){
        this.data = data.body.data
        if(this.data.idcard){
          this.$router.push('/personage/mysterySucce')
        }

      },function(response){

      })
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .mystery
    h5
      padding: 0px 0px 10px 0px;
      border-bottom: 3px solid #de4205;
      font-size: 18px;
      color: #de4205;
      font-weight: bold;
    .lan_Neirong
      padding: 35px 40px;
      background: #fff;
      border: 1px solid #e1e1e1;
      border-top: none;
      min-height: 450px;
      _height: 450px;
      font-size: 14px;
      h6
        font-size 18px
        font-weight normal
        line-height 26px
        height 26px
        color #424242
        i
          margin-right 13px
          margin-left 119px
          float left
          width 26px
          height 26px
          background: url(../../../static/img/personage/sprite_user_icon.png)no-repeat;
          background-size: 41px auto;
          background-position-y -39px
      >p
        padding-top 16px
        padding-bottom 21px
        line-height 1
        padding-left 158px
        color #949494
      button
        display block
        width: 87px;
        height: 36px;
        line-height: 36px;
        color: #fff;
        border none
        margin-left 158px
        padding: 0 0px;
        font-size: 12px;
        vertical-align: top;
        text-align: center;
        background: url(../../../static/img/personage/sprite_user_btn.png)no-repeat;
        overflow: hidden;
        cursor: pointer;
        background-position: 0 -55px;
        &:hover
          background-position: 0 -94px;
      .safeNoteQu
        margin-top: 57px;
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

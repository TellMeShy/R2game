<template>
  <div class="password">
    <h5>个人中心－修改密码</h5>
    <div class="password-content">
      <div class="password-form">
        <p class="tian_ha">
          <span class="tian_sx">原始密码：</span>
          <span class="tian_mu">
                    <input type="password" style="display: none">
                    <input name="oldpw" type="password" class="in_mus" id="oldpw" value="" v-model="oldPassword" @blur="checkPassword(oldPassword,'oldPasswordError')">
                    <span class="error" v-if="oldPasswordError">&nbsp;*6-20个数字字母混合</span>
                    <span id="oinfo" class="">&nbsp;</span>
            <!---->
                </span>
        </p>
        <p class="tian_ha">
          <span class="tian_sx">新密码：</span>
          <span class="tian_mu">
                    <input name="newpw" type="password" class="in_mus" id="textfield2" v-model="newPassword" @blur="checkPassword(newPassword,'newPasswordError')">
                    <span class="error" v-if="newPasswordError">&nbsp;*6-20个数字字母混合</span>
                </span>
        </p>
        <!--<p class="tian_ha">-->
          <!--<span class="tian_sx">密码强度：</span>-->
          <!--<span id="passlevel" class="PasswordLevel lvp_2" style="text-indent:0px;">&nbsp;</span>中-->
          <!--&nbsp;&nbsp;&nbsp; <span id="passlevel_msg"></span>-->
          <!--&lt;!&ndash;<span class="PasswordLevel lvp_1">低</span>&ndash;&gt;-->
        <!--</p>-->
        <p class="tian_ha">
          <span class="tian_sx">新密码确认：</span>
          <span class="tian_mu">
                    <input name="newpw_repeat" type="password" class="in_mus" id="textfield3" v-model="newPasswordcheck">
                    <span class="error" v-if="newPasswordcheck!=newPassword">&nbsp;*两次输入密码不同</span>
                </span>
        </p>
        <p class="tian_btn_ha">
          <span class="tian_sx"> </span>
          <a class="btnsu t_a" @click="sure"><span class="zi">确定</span></a>
          <a href="" class="btnsu t_b"><span class="zi">取消</span></a>
        </p>
      </div>
      <div class="editPassNoteGroup">
        <p class="edp_bt"> 修改密码说明：</p>
        <p> 1、一旦您修改了通行证密码，请您以新密码登录游戏。<br>
          2、温馨提示：为了您的帐号安全，密码最好不要设置成生日、电话号码、车牌和门牌号码。<br>
          3、若您已绑定手机，每次密码修改成功后，我们将以短信形式将修改信息发送至您的绑定手机。<a href="/phone/index">绑定手机&gt;&gt;</a></p>
      </div>
    </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './../component/alert.vue'
  export default {
  name: 'password',
  data () {
    return {
      massagenew:'',
      newPasswordError:true,
      oldPasswordError:true,
      oldPassword:'',
      newPassword:'',
      newPasswordcheck:'',
    }
  },
  components:{
    Valert
  },
  watch:{
    oldPassword(val){
      this.oldPassword = val.replace(/ /g, "");
    },
    newPassword(val){
      this.newPassword = val.replace(/ /g, "");
    },
    newPasswordcheck(val){
      this.newPasswordcheck = val.replace(/ /g, "");
    },
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
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
    sure:function () {
      if(this.newPasswordError||this.oldPasswordError||(this.newPasswordcheck!=this.newPassword)){

      }else {
        let url=weUrl+'?ct=userHome&ac=alterPsw';
        let parmas={
          params:{
            password :this.oldPassword,
            npassword:this.newPassword
          }
        }
        this.$http.get(url,parmas)
          .then(function(data){
            if(data.body.state){
              this.onMassageChange('密码修改成功')
              this.$router.push({path:'/personage'})
            }else {
              this.onMassageChange(data.body.message)
            }
          },function(response){

          })
      }
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
  .password-content
    padding: 30px 40px;
    background: #fff;
    border: 1px solid #e1e1e1;
    border-top: none;
    min-height: 450px;
    font-size: 14px;
    .password-form
      padding: 10px 40px 10px 40px;
      .error
        color #de4205
        font-size 12px
      .tian_ha
        padding: 8px 0px 8px 0px;
        color: #7e7e7e;
        .tian_sx
          display: inline-block;
          width: 150px;
          text-align: right;
        .PasswordLevel
          margin-left: 5px;
          display: inline-block;
          width: 150px;
          height: 20px;
          line-height: 50px;
          font-size: 0px;
          background: url(../../../static/img/personage/level_bg.png) no-repeat;
          overflow: hidden;
          vertical-align: middle;
        .lvp_2
          background-position: 0px -18px;
        .tian_mu
          input
            width 242px
            border: 1px solid #dbdbdb;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            width: 240px;
            vertical-align: middle;
      .tian_btn_ha
        padding: 13px 0px 6px 0px;
        .tian_sx
          display: inline-block;
          width: 150px;
          text-align: right;
        .btnsu
          display: inline-block;
          padding: 0 0px;
          font-size: 12px;
          vertical-align: top;
          text-align: center;
          background: url(../../../static/img/personage/sprite_user_btn.png)no-repeat;
          overflow: hidden;
          cursor: pointer;
        .t_a
          width: 87px;
          height: 36px;
          line-height: 36px;
          color: #fff;
          margin-right: 12px;
          background-position: 0 -55px;
        .t_b
          width: 112px;
          height: 36px;
          line-height: 36px;
          color: #626262;
          background-position: 0 -211px;

    .editPassNoteGroup
      margin-top: 33px;
      padding: 20px 0px 10px 10px;
      line-height: 200%;
      color: #999999;
      font-size: 12px;
      border-top: 1px dashed #CCCCCC;
      a
        text-decoration: none;
        color: #de4205;
</style>

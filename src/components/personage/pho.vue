<template>
  <div class="pho">
    <h5>个人中心－手机绑定</h5>
    <div class="lan_Neirong">

      <!--操作步骤 区 开始-->
      <div class="StepBar">
        <p class="Step2zu sp2_1"><span class="stzi_1">绑定手机</span><span class="stzi_2">绑定成功</span></p>
      </div>
      <!--操作步骤 区 结束-->

      <!--证件提示区 开始-->
      <div class="ZhengNoteZu">通过手机找回密码，一天只能发送两次注册码，超出将无法继续找回。</div>
      <!--证件提示区结束-->

      <!--手机绑定 输入 区开始-->
      <div class="telbangShuruGroup">
        <form @keyup="Enter($event)">
          <p class="tian_ha">
            <span class="tian_sx">魔力登录密码：</span>
            <span class="tian_mu"><input type="password" v-model="password"></span>
          </p>
          <p v-if="passwordError" class="error">*请输入正确的密码格式</p>
          <p class="tian_ha">
            <span class="tian_sx">请输入手机号码：</span>
            <span class="tian_mu"><input type="text" v-model="pho"></span>
            <span class="tian_warn" id="new_number_info">为了帐号安全，请填写本人手机号码</span>
          </p>
          <p v-if="phoError" class="error">*请输入正确的手机号</p>
          <!--验证-->
          <p class="tian_ha" id="showCaptcha">
            <span class="tian_sx">请输入验证码：</span>
            <span class="tian_mu">
                                <input type="text" v-model="verify1">
                            </span>
            <span class="tian_mu">
                                <img :src="imgSrc" alt="" @click="changeImg">

                            </span>
          </p>
          <p v-if="!verify1" class="error">*请输入验证码</p>

          <p class="tian_ha">
            <span class="tian_sx">请输入短信验证码：</span>
            <span class="tian_mu"> <input name="code" type="text" class="in_mus in_short" id="textfield" v-model="verify"> <div class="t_a_smallNO" v-if="phoTime"><div>请稍等{{phoTime}}S</div></div> <a class="btnsu t_a_small" title="提交" @click="getMessage" v-if="!phoTime"><span class="zi">获取验证码</span></a></span>
          </p>
          <p v-if="!verify" class="error">*请输入短信验证码</p>
          <p class="tian_btn_ha"><span class="tian_sx"> </span><a class="btnsu t_a"><span class="next" @click="goRouter">立即绑定</span></a> </p>
        </form>
      </div>
      <!--手机绑定 输入 区结束-->

    </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './../component/alert.vue'
export default {
  name: 'pho',
  data () {
    return {
      massagenew:'',
      password:'',
      passwordError:true,
      pho:'',
      phoError:true,
      menucheck:1,
       imgSrc:weUrl+'?ct=user&ac=verify&id=1',
      verify:'',
      verify1:'',
      phoTime:''
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
    password(val){
      this.password = val.replace(/ /g,'')
      let x = /^[0-9a-zA-Z]*$/g
      if((x.test(this.password))&&(this.password.length>5)&&(this.password.length<21)&&(/[0-9]/.test(this.password))&&(/[a-zA-Z]/.test(this.password))){
        this.passwordError=false
      }else {
        this.passwordError=true
      }
    },
    verify(val){
      this.verify = val.replace(/ /g, "");
    } ,
    verify1(val){
      this.verify1 = val.replace(/ /g, "");
    },
    pho(val){
      this.pho = val.replace(/ /g, "");
      let x = /^1[34578]\d{9}$/
      if(x.test(val)){
        this.phoError=false
      }else {
        this.phoError=true
      }
    }
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    getMessage:function () {
     if(!this.phoError){
       let url=weUrl+'?ct=user&ac=sendInfo';
       let parmas={
         params:{
           phone:this.pho,
           type:2
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
    changeImg:function () {
      this.imgSrc=this.imgSrc+'1'
    },
    Enter:function (ev) {
      if(ev.keyCode == 13){
        this.next ()
      }

    },
    goRouter:function () {
      if(this.verify&&this.verify1&&this.pho&&(!this.phoError)&&(!this.passwordError)){
        this.$http.get(weUrl+'?ct=user&ac=checkVerify',{params:{verify:this.verify1}})
          .then(function(data){
            if(data.body.state){
              let url=weUrl+'?ct=userHome&ac=bindPhone';
              let parmas={
                params:{
                  phone:this.pho,
                  verify:this.verify,
                  password:this.password
                }
              }
              this.$http.get(url,parmas)
                .then(function(data){
                  if(data.body.state){
                    this.$router.push({path:'/personage/phoSucce'})
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .pho
    .ZhengNoteZu
      margin-bottom: 13px;
      padding: 7px 0 18px 10px;
      line-height: 200%;
      color: #999;
      text-align: center;
      border-bottom: 1px dashed #ccc;
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
        padding: 0px 0px 10px 0px;
        .Step2zu
          height: 36px;
          line-height: 36px;
          color: #626262;
          span
            display: inline-block;
            background: #f2f2f0;
            text-align: center;
            vertical-align: top;
            width: 270px;
            background: url(../../../static/img/personage/arrow_icon.png) no-repeat 0 -44px;
          .stzi_1
            color #fff
            width 312px
            background-position 0 0
    .telbangShuruGroup
      p
        padding: 8px 0px 8px 0px;
        color: #7e7e7e;
        .tian_sx
          display: inline-block;
          width: 150px;
          text-align: right;
        .tian_mu
          input
            border: 1px solid #dbdbdb;
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            width: 240px;
            vertical-align: middle;
          img
            width 77px
            height 25px
            vertical-align: middle;
          .t_a_smallNO
            width 76px
            text-align center
            height 25px
            display: inline-block;
            font-size: 12px;
            background #cfcfcf
            color #fcfcfc
            border 1px solid #cfcfcf
            >div
              height 100%
              width 100%
              box-sizing border-box
              border 1px solid #e1e1e1
          .t_a_small
            display: inline-block;
            padding: 0 0px;
            font-size: 12px;
            vertical-align: middle;
            text-align: center;
            background: url(../../../static/img/personage/sprite_user_btn.png)no-repeat;
            overflow: hidden;
            cursor: pointer;
            width: 76px;
            height: 25px;
            line-height: 25px;
            color: #fff;
            background-position: 0 0;
            &:hover
              background-position 0 -27px
        .next
          display: inline-block;
          padding: 0 0px;
          font-size: 12px;
          vertical-align: top;
          text-align: center;
          background: url(../../../static/img/personage/sprite_user_btn.png)no-repeat;
          overflow: hidden;
          cursor: pointer;
          width: 87px;
          height: 36px;
          line-height: 36px;
          color: #fff;
          background-position: 0 -55px;
          &:hover
            background-position 0 -94px
      .error
        margin-top -5px
        color #de4205
        font-size 12px
        line-height 1px
        padding-left 150px


</style>

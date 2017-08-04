<template>
  <div class="relievepho">
    <h5>个人中心－手机解绑</h5>
    <div class="lan_Neirong">

      <!--操作步骤 区 开始-->
      <div class="StepBar">
        <p class="Step2zu sp2_1"><span class="stzi_1">绑定手机</span><span class="stzi_2">绑定成功</span></p>
      </div>
      <!--操作步骤 区 结束-->

      <!--证件提示区 开始-->
      <div class="ZhengNoteZu">为保证账号安全，请先通过对已绑定手机的验证。</div>
      <!--证件提示区结束-->

      <!--手机绑定 输入 区开始-->
      <div class="telbangShuruGroup">
        <form>
          <p class="tian_ha">
            <span class="tian_sx">已绑定的手机号码为：</span>
            <span class="tian_mu"><a class="pho">{{phoshow}}</a></span>
          </p>
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
          <p class="tian_btn_ha"><span class="tian_sx"> </span><a class="btnsu t_a"><span class="next" @click="goRouter">解除绑定</span></a> </p>
        </form>
      </div>
      <!--手机绑定 输入 区结束-->
      <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
    </div>

  </div>

</template>

<script>
  import Valert from './../component/alert.vue'
export default {
  name: 'relievepho',
  data () {
    return {
      massagenew:'',
      imgSrc:weUrl+'?ct=user&ac=verify&id=1',
      verify:'',
      verify1:'',
      phoTime:'',
      pho:'',
      phoshow:''
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
    let url=weUrl+'?ct=userHome';
    let parmas={}
    this.$http.get(url,parmas)
      .then(function(data){
        this.pho = data.body.data.phone
        var mobile = data.body.data.phone
        if (mobile.length > 7) {
          var new_mobile = mobile.substr(0, 3) + '****' + mobile.substr(7)
        }
        this.phoshow = new_mobile
      },function(response){

      })
  },
  watch:{
    verify(val){
      this.verify = val.replace(/ /g, "");
    } ,
    verify1(val){
      this.verify1 = val.replace(/ /g, "");
    },
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    changeImg:function () {
      this.imgSrc=this.imgSrc+'1'
    },
    getMessage:function () {
      if(!this.phoError&&this.verify1){
        let url=weUrl+'?ct=user&ac=sendInfo';
        let parmas={
          params:{
            verify:this.verify1,
            phone:this.pho,
            type:4
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
    goRouter:function () {
      if(this.verify1&&this.verify){
        this.$http.get(weUrl+'?ct=user&ac=checkVerify',{params:{verify:this.verify1}})
          .then(function(data){
            if(data.body.state){
              this.$http.get(weUrl+'?ct=userHome&ac=mvBind',{params:{verify:this.verify}})
                .then(function(data){
                  if(data.body.state){
                    this.$router.push({path:'/personage/relievephosucce'})
                  }else {
                    this.onMassageChange('验证码错误')
                    this.imgSrc=this.imgSrc+'1'
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
  .relievepho
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
          .pho
            color #de4205
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
            height 23px
            display: inline-block;
            font-size: 12px;
            background #cfcfcf
            color #fcfcfc
            padding 0
            vertical-align: middle;
            border 1px solid #cfcfcf
            margin 0
            >div
              line-height 23px
              height 23px
              width 100%
              box-sizing border-box
              border 1px solid #e1e1e1
              margin 0
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

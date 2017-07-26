<template>
  <div class="person">
    <h5>个人资料</h5>
    <div class="person-c">
      <div class="person-c-pho">
        <p class="photo_pic">
          <img v-bind:src="data.user_img" alt="" v-if="data.user_img" id="preview">
          <img src="../../../static/img/personage/default.jpg" alt="" v-if="!data.user_img" id="preview">
        </p>
        <button onclick="path.click()" v-if="!imgsv">上传头像</button>
        <button @click="saveimg" v-if="imgsv">保存头像</button>
        <!--<input type="button" value="浏览" onclick="path.click()" style="border:1px solid #ccc;background:#fff">-->
        <!--<input type="file" id="path" style="display:none" onchange="upfile.value=this.value">-->
        <form ref="form" enctype="multipart/form-data"  method="post" style="display: none">
          <input type="file" name="file" @change="imgPreview()" style="display: none" id="path" ref="path"/>
        </form>
      </div>
      <router-link to="/personage/password" class="change-password">修改密码</router-link>
      <div class="person-massage">
        <dl>
          <dt>登录昵称：</dt>
          <dd>{{data.name}}</dd>
        </dl>
        <dl>
          <dt>安全等级：</dt>
          <dd :class="'safetyLevel-'+safety"></dd>
        </dl>
        <dl>
          <dt>登入时间：</dt>
          <dd>{{data.last_login}}</dd>
        </dl>
        <dl>
          <dt>IP地址：</dt>
          <dd>{{data.reg_ip}}</dd>
        </dl>
      </div>
      <div class="button-box">
        <button class="recharge-btn">立即充值</button>
        <router-link to="/personage/modified"><button class="change-massage-btn">修改个人信息</button></router-link>
      </div>
    </div>
    <div class="ZhuangtaiGroup">
      <div class="ztaibox zt_a">
        <div class="zta_tu">
          <p class="zta_bt">实名认证</p>
          <p class="zta_see" v-if="!data.idcard">
            <span class="icon_rz_warn">&nbsp;</span>
            <span class="rz_b">未绑定</span>
            <span class="caozuo"><router-link to="/personage/mystery2" class="as">绑定</router-link></span>
          </p>
          <p class="zta_see" v-if="data.idcard">
            <span class="icon_rz_ok">&nbsp;</span>
            <span class="rz_a">已认证</span>
            <span class="caozuo"><router-link to="/personage/mysterySucce" class="as">查看</router-link></span>
          </p>
        </div>
        <div class="zta_zhu">用于帐号防沉迷认证和密码遗失时重置密码</div>
      </div>
      <div class="ztaibox zt_b">
        <div class="zta_tu">
          <p class="zta_bt">绑定邮箱</p>
          <p class="zta_see" v-if="!data.email">
            <span class="icon_rz_warn">&nbsp;</span>
            <span class="rz_b">未绑定</span>
            <span class="caozuo"><router-link to="/personage/email" class="as">绑定</router-link></span>
          </p>
          <p class="zta_see" v-if="data.email">
            <span class="icon_rz_ok">&nbsp;</span>
            <span class="rz_a">已认证</span>
            <span class="caozuo"><router-link to="/personage/bindMail" class="as">查看</router-link></span>
          </p>
        </div>
        <div class="zta_zhu">用于忘记密码或账号被盗时快速重置密码，如需修改当前绑定邮箱，点击<router-link to="/personage/email">修改绑定</router-link>。</div>
      </div>
      <div class="ztaibox zt_c">
        <div class="zta_tu">
          <p class="zta_bt">手机绑定</p>
          <p class="zta_see" v-if="!data.phone">
            <span class="icon_rz_warn">&nbsp;</span>
            <span class="rz_b">未绑定</span>
            <span class="caozuo"><router-link to="/personage/pho" class="as">绑定</router-link></span>
          </p>
          <p class="zta_see" v-if="data.phone">
            <span class="icon_rz_ok">&nbsp;</span>
            <span class="rz_a">已认证</span>
            <span class="caozuo"><router-link to="/personage/phoSucce" class="as">查看</router-link></span>
          </p>
        </div>
        <div class="zta_zhu">用于密码修改时短信提示和密码遗失时重置密码，如需解除当前绑定手机，点击<router-link to="/personage/relievepho">解除绑定</router-link>。</div>
      </div>
      <div class="clear"></div>
    </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './../component/alert.vue'
export default {
  name: 'person',
  data () {
    return {
      massagenew:'',
      data:{},
      safety:0,
      headportrait:'',
      imgsv:false,
      file:''
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
        if(this.data.email){
          this.safety++
        }
        if(this.data.idcard){
          this.safety++
        }
        if(this.data.phone){
          this.safety++
        }
      },function(response){

      })
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    imgPreview:function (fileDom) {
      if (window.FileReader) {
        var reader = new FileReader();
      } else {
        this.onMassageChange("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
      }
      var that = this
      //获取文件
      var file = this.$refs.path.files[0];
      var imageType = /^image\//;
      //是否是图片
      if (!imageType.test(file.type)) {
        this.onMassageChange("请选择图片！");
        return;
      }
      //读取完成
      reader.onload = function(e) {
        //获取图片dom
        var oData = new FormData()
        oData.append("file",file)
        that.file = oData
        var img = document.getElementById("preview");
        //图片路径设置为读取的图片
        img.src = e.target.result;
        that.imgsv =true
//        let url='http://www.r2games.com.cn/?ct=userHome&ac=upUserImg';
//        let parmas={params:{
//          img:img.src
//        }}
//        that.$http.post(url,parmas)
//          .then(function(data){
//            if(data.body.state){
//
//            }else {
//              alert(data.body.message)
//            }
//          },function(response){
//
//          })
      };
      reader.readAsDataURL(file);
    },
    saveimg:function () {
//        var that = this
//        $.ajax({
//          type:'POST',
//          url:'http://www.r2games.com.cn/?ct=userHome&ac=upUserImg',
//          data:this.file,
//          processData:false,
//          contentType:false,
//          success:function (data) {
//
//          }
//        })
      let url=weUrl+'?ct=userHome&ac=upUserImg';
      let that = this
      this.$http.post(url,that.file)
        .then(function(data){
          if(data.body.state){
            that.imgsv =false
          }else {
            this.onMassageChange(data.body.message)
          }

        },function(response){

        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .person
    h5
      padding: 0px 0px 10px 0px;
      border-bottom: 3px solid #de4205;
      font-size: 18px;
      color: #de4205;
      font-weight: bold;
    .person-c
      position: relative;
      padding: 20px 40px;
      border: 1px solid #e1e1e1;
      border-top: none;
      min-height: 212px;
      .person-c-pho
        position: absolute;
        left: 50px;
        top: 35px;
        width: 130px;
        height: 147px;
        border: 1px solid #e1e1e1;
        text-align: center;
        .photo_pic
          padding: 10px 0px 7px 0px;
          img
            width 90px
            height 88px
            border-radius 45px
        button
          width: 76px;
          height: 25px;
          line-height: 25px;
          color: #626262;
          border 1px solid  #e1e1e1
          background none
          font-size 12px
          cursor pointer
          &:hover
            background #eee

      .change-password
        left: 78px;
        top: 194px;
        position absolute
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        text-decoration: none;
        width: 76px;
        height: 25px;
        line-height: 25px;
        color: #fff;
        background-position: 0 0;
        padding: 0 0px;
        font-size: 12px;
        text-align: center;
        background: url(../../../static/img/personage/sprite_user_btn.png)no-repeat;
        border none
        cursor: pointer;
        &:hover
          background-position-y -27px
      .person-massage
        padding: 0px 50px 0px 180px;
        font-size: 14px;
        color: #353535;
        dl
          padding: 10px 0px;
          overflow hidden
          dt
            float left
            width: 100px;
            text-align: right;
            padding-right: 5px;
          dd
            float left
          .safetyLevel-1
            margin-left: 5px;
            display: inline-block;
            width: 150px;
            height: 20px;
            line-height: 50px;
            font-size: 0px;
            background: url(../../../static/img/personage/level_bg.png) no-repeat 0 9px;
            overflow: hidden;
            vertical-align: middle;
          .safetyLevel-2
            margin-left: 5px;
            display: inline-block;
            width: 150px;
            height: 20px;
            line-height: 50px;
            font-size: 0px;
            background: url(../../../static/img/personage/level_bg.png) no-repeat 0 9px;
            overflow: hidden;
            background-position-y -15px
          .safetyLevel-3
            margin-left: 5px;
            display: inline-block;
            width: 150px;
            height: 20px;
            line-height: 50px;
            font-size: 0px;
            background: url(../../../static/img/personage/level_bg.png) no-repeat 0 9px;
            overflow: hidden;
            background-position-y -36px


      .button-box
        position: absolute;
        left: 450px;
        top: 190px;
        width: 300px;
        .recharge-btn
          border none
          display: inline-block;
          padding: 0 0px;
          font-size: 12px;
          vertical-align: top;
          text-align: center;
          background: url(../../../static/img/personage/sprite_user_btn.png) no-repeat;
          overflow: hidden;
          cursor: pointer;
          width: 87px;
          height: 36px;
          line-height: 36px;
          color: #fff;
          background-position: 0 -55px;
          &:hover
            background-position: 0 -94px;
        .change-massage-btn
          color: #626262;
          border none
          display: inline-block;
          padding: 0 0px;
          font-size: 12px;
          vertical-align: top;
          text-align: center;
          background: url(../../../static/img/personage/sprite_user_btn.png) no-repeat;
          overflow: hidden;
          cursor: pointer;
          width: 112px;
          height: 36px;
          line-height: 36px;
          margin: 0 8px;
          background-position: 0 -211px;
          &:hover
            background-position: 0 -250px;

    .ZhuangtaiGroup
      padding: 20px 0px 20px 10px;
      border: 1px solid #e1e1e1;
      margin-top: 10px;
      overflow hidden
      .ztaibox
        float: left;
        height: 112px;
        padding: 5px 25px 0px 25px;
        .zta_tu
          padding: 0px 0px 10px 70px;
          background: url(../../../static/img/personage/user_icon_userzu.png) no-repeat;
          .zta_bt
            color: #626262;
            font-size: 16px;
          .zta_see
            padding: 5px 0px 0px 0px;
            .icon_rz_warn
              width 22px
              display: inline-block;
              height: 19px;
              line-height: 50px;
              font-size: 0px;
              background: url(../../../static/img/personage/sprite_user_icon.png) no-repeat;
              overflow: hidden;
              vertical-align: middle;
              background-position: 0px -26px;
            .icon_rz_ok
              width 22px
              display: inline-block;
              height: 19px;
              line-height: 50px;
              font-size: 0px;
              background: url(../../../static/img/personage/sprite_user_icon.png) no-repeat;
              overflow: hidden;
              vertical-align: middle;
            .rz_b
              font-size: 12px;
              text-align: left;
              color: #999999;
            .rz_a
              font-size: 12px;
              text-align: left;
              color: #65ac04;
            .caozuo
              padding: 0px 0px 0px 15px;
              font-size 12px
              a
                color: #de4205;
        .zta_zhu
          color: #bcbcbc;
          line-height: 17px;
          font-size 12px
      .zt_a
        width: 176px;
        .zta_tu
          background-position: 0 -60px;
      .zt_b
        width: 180px;
        border-left: 1px solid #e1e1e1;
        border-right: 1px solid #e1e1e1;
        .zta_tu
          background-position: 0 -130px;
      .zt_c
        width 188px
        .zta_tu
          background-position: 0 -200px;

</style>

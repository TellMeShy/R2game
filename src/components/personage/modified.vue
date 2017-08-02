<template>
  <div class="modified">
    <h5>个人中心－修改个人信息</h5>
    <div class="email-box">
      <div class="email-box-l">
        <div class="person-c-pho">
          <p class="photo_pic">
            <img v-bind:src="data.user_img" alt="" v-if="data.user_img&&(data.user_img!='\'\'')" id="preview">
            <img src="../../../static/img/personage/default.jpg" alt="" v-if="(!data.user_img)||(data.user_img=='\'\'')" id="preview">
        </p>
          <button onclick="path.click()" v-if="!imgsv">上传头像</button>
          <button @click="saveimg" v-if="imgsv">保存头像</button>
          <!--<input type="button" value="浏览" onclick="path.click()" style="border:1px solid #ccc;background:#fff">-->
          <!--<input type="file" id="path" style="display:none" onchange="upfile.value=this.value">-->
          <input type="file" name="file" @change="imgPreview()" style="display: none" id="path" ref="path"/>
        </div>
      </div>
      <div class="email-box-r">
        <h6>完善资料 <i></i></h6>
        <dl>
          <dt>账号:</dt>
          <dd><div class="input">{{data.username}}</div></dd>
        </dl>
        <p>*账户不可修改</p>
        <dl>
          <dt>昵称:</dt>
          <dd><input type="text" class="input" v-model="name"></dd>
        </dl>
        <dl>
          <dt>性别:</dt>
          <dd>
            <input type="radio" class="check" v-model="sex" value="1" >男
            <input type="radio" class="check" v-model="sex" value="2">女
            <input type="radio" class="check" v-model="sex" value="0">保密

          </dd>
        </dl>
        <dl>
          <dt>生日:</dt>
          <dd><div class="input">{{day}}</div></dd>
        </dl>
        <p>*生日填写后不能修改</p>
        <dl>
          <dt>QQ:</dt>
          <dd><input type="text" class="input" v-model="qq"></dd>
        </dl>
        <dl>
          <dt>学历:</dt>
          <dd>
            <select name="selected" class="input" v-model="edu">
              <option value="0">请选择</option>
              <option value="1">初中以下</option>
              <option value="2">初中</option>
              <option value="3">高中/中专</option>
              <option value="4">大专</option>
              <option value="5">本科</option>
              <option value="6">硕士</option>
              <option value="7">博士及以上</option>
            </select>
          </dd>
        </dl>
        <dl>
          <dt>行业:</dt>
          <dd>
          <dd>
          <!--<select v-model="selected">-->
            <!--<option v-for="item in items" v-bind:value="item.value">{{item.text}}</option>-->
          <!--</select>-->
          <select name="selected" class="input" v-model="job">
            <option value="0">请选择</option>
            <option value="1">学生</option>
            <option value="2">政府机关</option>
            <option value="3">军警</option>
            <option value="4">教育科研</option>
            <option value="5">经商</option>
            <option value="6">建筑 </option>
            <option value="7">金融保险 </option>
            <option value="8">制造/供货商 </option>
            <option value="9">房地产 </option>
            <option value="10">信息 </option>
            <option value="11">服务 </option>
            <option value="12">农渔牧 </option>
            <option value="13">家庭主妇 </option>
            <option value="14">医疗 </option>
            <option value="15">法律 </option>
            <option value="16">流通/零售 </option>
            <option value="17">交通/运输 </option>
            <option value="18">旅游 </option>
            <option value="19">娱乐 </option>
            <option value="20">出版 </option>
            <option value="21">传媒 </option>
            <option value="22">营销 </option>
            <option value="23">医生 </option>
            <option value="24">其他 </option>
            <option value="25">待业中</option>
            </select>
          </dd>
        </dl>
        <dl>
          <dt>月收入:</dt>
          <dd>
            <select name="selected" class="input" v-model="income">
              <option value="0">请选择</option>
              <option value="1">1000~3000元/月</option>
              <option value="2">3000~5000元/月</option>
              <option value="3">5000~8000元/月</option>
              <option value="4">8000~12000元/月</option>
              <option value="5">12000~15000元/月</option>
              <option value="6">15000~20000元/月</option>
              <option value="7">20000~30000元/月</option>
              <option value="8">30000元以上/月</option>
              <option value="9">其他</option>
            </select>
          </dd>
        </dl>
        <!--<dl>-->
          <!--<dt>所在地:</dt>-->
          <!--<dd>-->
            <!--<select name="selected" class="input">-->
              <!--<option value="a">A</option>-->
              <!--<option value="b">B</option>-->
              <!--<option value="c">C</option>-->
            <!--</select>-->
            <!--<select name="selected" class="input">-->
              <!--<option value="a">A</option>-->
              <!--<option value="b">B</option>-->
              <!--<option value="c">C</option>-->
            <!--</select>-->
          <!--</dd>-->
        <!--</dl>-->
        <dl>
          <dt></dt>
          <dd>
            <button class="btn" @click="sure">确定</button>
            <router-link to="/personage/"><button>取消</button></router-link>
          </dd>
        </dl>
      </div>
    </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './../component/alert.vue'
  export default {
  name: 'modified',
  data () {
    return {
      massagenew:'',
      data:'',
      job:0,
      income:0,
      edu:0,
      day:'',
      sex:'',
      name:'',
      qq:'',
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
        if(data.body.state){
          this.data = data.body.data
          this.name = data.body.data.name
          this.sex = data.body.data.sex
          this.qq = data.body.data.qq
          this.edu = data.body.data.edu
          this.income = data.body.data.income
          this.job = data.body.data.job
          var idCard = data.body.data.idcard
          var birthday = "";
          if(idCard != null && idCard != "") {
            if (idCard.length == 15) {
              birthday = "19" + idCard.substr(6, 6);
            } else if (idCard.length == 18) {
              birthday = idCard.substr(6, 8);

            }

            this.day = birthday.replace(/(.{4})(.{2})/, "$1-$2-");
          }
        }else {
            this.onMassageChange(data.body.message)
        }
        },function(response){

      })
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    imgPreview:function (fileDom) {
        var that = this
      if (window.FileReader) {
        var reader = new FileReader();
      } else {
        that.onMassageChange("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
      }
      var oData = new FormData()
      //获取文件
      var file = this.$refs.path.files[0];
      oData.append("file",file)
      that.file = oData
      var imageType = /^image\//;
      //是否是图片
      if (!imageType.test(file.type)) {
        that.onMassageChange("请选择图片！");
        return;
      }
      //读取完成
      reader.onload = function(e) {
        //获取图片dom
        var img = document.getElementById("preview");
        //图片路径设置为读取的图片
        img.src = e.target.result;
        that.imgsv =true
      };
      reader.readAsDataURL(file);
    },
    saveimg:function () {

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
    },
    sure:function () {
      let url=weUrl+'?ct=userHome&ac=perfectUserInfo';
      let parmas={params:{
        name:this.name,
        sex:this.sex,
        qq:this.qq,
        edu:this.edu,
        income:this.income,
        job:this.job,
      }}
      this.$http.get(url,parmas)
        .then(function(data){
        if(data.body.state){
          this.$router.push('/personage/')
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
.modified
  h5
    padding: 0px 0px 10px 0px;
    border-bottom: 3px solid #de4205;
    font-size: 18px;
    color: #de4205;
    font-weight: bold;
  .email-box
    background #fff
    border: 1px solid #e1e1e1;
    padding-left 50px
    padding-top 34px
    border-top: none;
    padding-bottom 27px
    overflow hidden
    .email-box-l
      width 188px
      float left
      .person-c-pho
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

    .email-box-r
      width 486px
      float left
      h6
        position relative
        line-height 1
        font-size 16px
        padding-bottom 11px
        border-bottom 1px solid #e1e1e1
        &:after
          position absolute
          display block
          background #de3f05
          content ''
          height 2px
          bottom 0
          left 0
          width 69px
      p
        padding-left 70px
        color  #de4205
        line-height 1
        font-size 12px
        margin-top -3px
      dl
        padding 9px 0
        overflow hidden
        dt
          text-align right
          float left
          width 57px
          margin-right 11px
        dd
          float left
          .input
            height 27px
            box-sizing border-box
            border 1px solid #dbdbdb
            padding-left 10px
            width 165px
          .check
            margin-left 5px
          button
            width: 87px;
            height: 36px;
            line-height: 36px;
            overflow: hidden;
            cursor: pointer;
            font-size: 12px;
            display: inline-block;
            border none
            margin-right: 8px;
            vertical-align: top;
            text-align: center;
            background: url(../../../static/img/personage/sprite_user_btn.png) no-repeat;
            background-position: 0 -133px;
            &:hover
              background-position: 0 -172px;
          .btn
            color: #fff;
            background-position: 0 -55px;
            &:hover
              background-position: 0 -94px;

</style>

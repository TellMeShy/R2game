<template>
  <div id="app">
    <header>
      <div class="header">
        <router-link to="/"><h1 class="left r2logo"></h1></router-link>
        <ul class="left">
          <li @click="navClick(1)" v-bind:class="{current:1==currentNum}"><router-link to="/">首页</router-link></li>
          <li @click="navClick(2)" v-bind:class="{current:2==currentNum}"><router-link to="/game">游戏</router-link></li>
          <!--<li @click="navClick(3)" v-bind:class="{current:3==currentNum}"><router-link to="/recharge">充值</router-link></li>-->
          <!--<li @click="navClick(4)" v-bind:class="{current:4==currentNum}"><router-link to="/f3">客服</router-link></li>-->
          <!--<li @click="navClick(5)" v-bind:class="{current:5==currentNum}"><router-link to="/f3">礼包</router-link></li>-->
          <!--<li @click="navClick(6)" v-bind:class="{current:6==currentNum}"><router-link to="/f3">论坛</router-link></li>-->
        </ul>
        <div class="r2list right">
          <div class="r2list-button">
            <i class="icon-mgame"></i><span>魔力游戏</span>
          </div>
          <div class="top-gameBox cd">

            <a href="" class="top-ad" target="_blank" v-html="headimg"></a>
            <div class="top-lst">
              <div class="m-topGame">
                <h2 class="title web-title">手机游戏</h2>
                <ul class="u-gameLst cd">
                  <li v-for="(i,index) in list">
                    <a target="_blank" v-if="i.url" :href="i.url">
                      <span>{{i.title}}</span>
                      <i class="icon" :class="{'hot':i.type2==1,'new':i.type2==2}"></i>
                    </a>
                    <a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')">
                      <span>{{i.title}}</span>
                      <i class="icon" :class="{'hot':i.type2==1,'new':i.type2==2}"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <!--<a href="" class="o-btnBig u-topBtn">查看更多</a>-->
            </div>
          </div>
        </div>
        <div class="header-login" id="toploginForm">
          <router-link v-if="isLogin" class="login" to="/personage">{{isLogin}}</router-link>
          <a v-if="!isLogin" title="登录" v-on:click="popUpWindow('账号登录')">登录</a> |
          <a title="注册" v-on:click="popUpWindow('快速注册')" v-if="!isLogin">注册</a>
          <a title="注销" v-on:click="logout()"  v-if="isLogin">注销</a>
        </div>

      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="footer">
        <ul>
          <li>健康游戏忠告</li>
          <li>抵制不良游戏</li>
          <li>拒绝盗版游戏</li>
          <li>注意自我保护</li>
          <li>谨防受骗上当</li>
          <li>适度游戏益脑</li>
          <li>沉迷游戏伤身</li>
          <li>合理安排时间</li>
          <li>享受健康生活</li>
        </ul>
        <div class="footer-b">
          <div class="footer-b-l">
            <a href="">
              <div class="logo"></div>
            </a>
          </div>
          <div class="footer-b-r">
            <ul class="footer-b-r-nav">
              <li class="first"><a href="http://corporate.r2games.com/?ac=about" target="_blank">关于R2</a></li>
              <li><a href="http://ch.r2games.com.cn/index.html#/game" target="_blank">魔力无线</a></li>
              <li><a href="http://corporate.r2games.com/?ac=contact" target="_blank">联系我们</a></li>
              <li><a href="http://corporate.r2games.com/join/" target="_blank">加入我们</a></li>
              <li><a href="http://corporate.r2games.com/?ac=contact" target="_blank">客服中心</a></li>
              <li><a href="http://corporate.r2games.com/?ac=contact" target="_blank">商务合作</a></li>
              <li><a href="javascript:;" @click="onAgreementChange('魔力数娱-用户协议')">用户许可协议</a></li>
              <li><a href="javascript:;" @click="onAgreementChange('魔力数娱-隐私政策')">隐私协议</a></li>
            </ul>
            <p class="recommend">
              <span>推荐游戏:</span>
              <a v-html="recommended"></a>
              <!--<span class="recommend-g"><a href="">{{i}}</a></span>-->
            </p>
            <p class="footer-laster">
              <!--<a>备案号：310104100000789</a>-->
              <!--<a>深B2-521054745号</a>-->
              <a>粤ICP备17047652号-1</a>
              <a>粤网文 [2017] 3918-769号</a>
              <!--<a>新出网证(沪)字33号</a>-->
              <a>深圳魔力数娱网络科技有限公司 ©版权所有</a>
            </p>

          </div>
        </div>
      </div>
    </footer>
    <Vjoin :webpopUp="popUp" @on-popUp-change="onPopUpChange"></Vjoin>
    <Vagreement :agreement="agreementnew" @on-agreement-change="onAgreementChange"></Vagreement>
    <!--<Valert></Valert>-->
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  import Vjoin from './components/component/join.vue'
  import Valert from './components/component/alert.vue'
  import Vagreement from './components/component/agreement.vue'
  Vue.use(VueResource);
  export default {
    name: 'app',
    components:{
      Vjoin,Valert,Vagreement
    },
    data () {
      return {
        agreementnew:"",
        currentNum: 1,
        isLogin:false,
        popUp:'',
        recommended:'',
        path:'',
        list:'',
        headimg:''
      }
    },
    watch:{
      '$route' (to, from) {
        if((/\/game/.test(this.$route.path))&&!(/\/game.+/.test(this.$route.path))){
          this.currentNum=2
        }else if(/\/recharge/.test(this.$route.path)){
          this.currentNum=3
        }else {
          this.currentNum=1
        }
      }
    },
    created:function () {
      var name = 'userName='
      var ca = document.cookie.split(';');
      for(var i=0; i<ca.length; i++)
      {
        var c = ca[i].trim();
        if (c.indexOf(name)==0)
            this.isLogin = c.split('=')[1]
      }
      if((/\/game/.test(this.$route.path))&&!(/\/game.+/.test(this.$route.path))){
        this.currentNum=2
      }else if(/\/recharge/.test(this.$route.path)){
        this.currentNum=3
      }else {
        this.currentNum=1
      }
      this.$http.get(weUrl+'recommended/index.html')
        .then(function(data){
          this.recommended=data.body
        },function(response){

        })
      this.$http.get(weUrl+'headimg/index.html')
        .then(function(data){
         this.headimg=data.body
        },function(response){

        })
      this.$http.get(weUrl+'list/index.html')
        .then(function(data){
          var basic = data.bodyText.substring(0, data.bodyText.lastIndexOf(','))+']';
          this.list=JSON.parse(basic)
        },function(response){

        })
    },
    methods:{
      onAgreementChange:function (val) {
        this.agreementnew=val
      },
      onMassageChange:function (val) {
        this.massagenew=val
      },
      onPopUpChange:function (val) {    //接受弹窗传值
        this.popUp=val
      },
      logout:function(){               //注销
        document.cookie="userName=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT";

        this.isLogin = ''
        this.$router.push({path:'/'})
        window.location = 'http://www.r2games.com.cn/?ct=user&ac=logout'
      },
      popUpWindow:function (a) {        //弹窗
        this.popUp=a
      },
      navClick: function (a) {            //nav选择
        this.currentNum = a
      },
    },
  }
</script>

<style lang="stylus">
  @import "../static/css/reset.css";

  header
    height 73px
    box-shadow 0 0 7px rgba(0,0,0,0.3)
    .header
      height 73px
      /*overflow hidden*/
      position relative
      .r2logo
        margin-top 7px
        height 55px
        width 168px
        background url("../static/img/icon.png") 0 1px no-repeat
      >ul
        margin-left 132px
        overflow hidden
        .current
          &::after
            width 100%
          a
            color #de4205
        li
          position relative
          text-align center
          width 90px
          height 73px
          line-height 73px
          float: left
          cursor pointer
          &::after
            content ''
            display block
            height 2px
            background #de4205
            position absolute
            bottom 0
            width 0
            transition .5s all
          &:hover::after
            width 100%
          &:hover a{
            color #de4205
          }
          a
            width 100%
            height 100%
            color #000
            display block
            font-size 18px
      .header-login
        float right
        color #808080
        line-height 70px
        .login
          color #de4205
        a
          font-size 14px
          color #808080
          padding 0 5px
          cursor pointer
          &:hover
            color #de4205
      .r2list
        /*position relative*/
        margin-top 22px
        .r2list-button
          width 103px
          height 28px
          line-height 28px
          font-size 14px
          box-sizing border-box
          border 1px solid #dbdbdb
          margin-left 25px
          cursor pointer
        &:hover
          padding-bottom 23px
        &:hover .r2list-button
          background linear-gradient(#fff,#f1f1f1)
          color #e36445
        &:hover .top-gameBox
          display block
          background #fff
          position absolute
          top 73px
          width 1200px
          right 0
          z-index 51
          height 289px
        &:hover .r2list-button >i
          background-position -102px -116px
        i
          float left
          width 6px
          height 8px
          margin  10px 7px 0 15px
          background url("../static/img/icon.png")no-repeat -63px -116px;
        .top-gameBox
          display block
          background #fff
          position absolute
          top 73px
          width 1200px
          right 0
          z-index 51
          height 0px
          transition all .5s
          overflow hidden
          .top-ad
            width 490px
            height 289px
            float left
            overflow hidden
          .top-lst
            width:654px;
            float:left;
            border-left:1px solid #e9e9e9;
            .m-topGame
              width:654px;
              float:left;
              margin:14px 17px 0 25px;
              height:372px;
              .title
                color #de4205
                font:bold 16px/35px "Microsoft Yahei",Arial;
                border-bottom:2px solid #de4205;
              .u-gameLst
                padding-top:17px;
                font-size:13px;
                li
                  float:left;
                  width:25%;
                  line-height 25px
                  a
                    margin-bottom:5px;
                    color:#505050;
                    display:block;
                    clear:both;
                    height:25px
                    i
                      display:inline-block;width:16px;height:12px;margin-left:10px;
                      background-position:-1000px -1000px;
                    .new
                      background-position:-69px -114px;
                    .hot
                      background-position:-85px -114px;
                    &:hover
                      color:#de4205

  footer
    .footer
      padding-top 40px
      >ul
        overflow hidden
        border-bottom 1px solid #e7e7e7
        padding 20px 0
        li
          color #7b7b7b
          float left
          padding 0 24px
      .footer-b
        font-size 13px
        padding 5px 0 20px 0
        overflow hidden
        .footer-b-l
          float left
          width 310px
          .logo
            float right
            margin-top 20px
            margin-right 40px
            width 168px
            height 55px
            background url("../static/img/icon.png")
        .footer-b-r
          width 849px
          float left
          .footer-b-r-nav
            color #c8c8c8
            overflow hidden
            padding 20px 0 5px
            margin-left -19px
            span
              color #de4205
            li
              float left
              color #000
              padding 0 19px
              border-left 1px solid #dbdbdb
              a
                color #000
                font-size 13px
                &:hover
                  color #de4205
            .first
              border none
          .recommend
            line-height 17px
            overflow hidden
            padding 5px 0
            color #de4205
            span
              float left
            .recommend-g
              padding 0 10px
              a
                color #de4205
          .footer-laster
            width 800px
            line-height 23px
            a
              margin-right 10px
  .black-bg
    height 100%
    width 100%
    position fixed
    background rgba(0,0,0,.5)
    top 0
    left 0
    z-index 100
    >div
      margin 100px auto
      width 408px
      background #de3f05
      border-radius 5px 5px 0 0
      h5
        height 50px
        background url("../static/img/myicon.png") no-repeat 26px 0px
        font-size 24px
        line-height 60px
        text-align center
        font-weight normal
        color #fff
        position relative
        padding-bottom 0
        div
          cursor pointer
          position absolute
          right 0
          top 0
          font-size 28px
          line-height 28px
          margin-right 22px
          margin-top 9px
      >div
        background #ffffff
        padding 20px 43px
        .logo
          width 130px
          height  37px
          background url("../static/img/icon.png")
          background-size 150px auto
          margin 0 auto 20px
        .username
          position relative
          .icon-log
            width 20px
            height 20px
            position absolute
            left 10px
            top 10px
            background-position: -55px -132px;
          input
            background #f5f5f5
            height 36px
            border 1px solid #c5c4c4
            padding 0 30px
            width 260px
            border-radius 4px
            font-size 14px
            line-height 36px
            margin-bottom 5px
          p
            font-size 12px
            line-height 12px
            color  #de4205
            .icon-exclamation
              width 16px
              height 16px
              float left
              background-position 0 -133px
        .password
          padding-top 10px
          position relative
          .icon-password
            width 20px
            height 20px
            position absolute
            left 10px
            top 20px
            background-position: -81px -132px;
          input
            background #f5f5f5
            height 36px
            border 1px solid #c5c4c4
            padding 0 30px
            width 260px
            border-radius 4px
            font-size 14px
            line-height 36px
            margin-bottom 5px
          p
            font-size 12px
            line-height 12px
            color  #de4205
            .icon-exclamation
              width 16px
              height 16px
              float left
              background-position 0 -133px
        .orther
          padding-top 10px
          padding-bottom 15px
          color #605f67
          font-size 14px
          line-height 16px
          a
            float right
        button
          width 100%
          height 42px
          line-height 42px
          background #9dd429
          color #fff
          font-size 18px
          border none
          border-radius 3px
          text-align center
        .register
          color #605f67
          margin-top 14px
          line-height 21px
          text-align center
          a
            color #de4205
            cursor pointer
        .ortherLogo
          color #605f67
          margin-top 14px
          line-height 24px
          text-align center
          .icon
            width: 26px;
            height: 26px;
            display: inline-block;
            vertical-align: middle;
            margin 0 2px
          .icon-xr
            background-position 0 -101px
          .icon-wx
            background-position -31px -101px
          .icon-qq
            background-position -62px -101px
          .icon-tx
            background-position -93px -101px
        ul
          width 308px
          margin 14px auto 10px
          display block
          overflow hidden
          li
            color: #a3a3a3;
            float: left;
            border-bottom: 2px solid #bebebe;
            width: 154px;
            text-align: center;
            font-size: 16px;
            line-height: 38px;
            cursor: pointer;
          .current
            color: #de4205;
            border-bottom: 2px solid #de4205;
        .register-content
          input
            width: 286px;
            padding: 0 10px;
            border: 1px solid #b6b6b6;
            height: 30px;
            line-height: 30px;
            outline: 0;
            border-radius: 3px;
            background: #fff;
            margin-bottom 5px
            margin-top 10px
          .error
            font-size 12px
            line-height 12px
            color  #de4205
            .icon-exclamation
              width 16px
              height 16px
              float left
              background-position 0 -133px
          .istrue
            color #aeaeae
          .getMessage
            padding-top 10px
            padding-bottom 5px
            width 308px
            overflow hidden
            input
              margin 0
              width 155px
              float left
            .getMessageBtb
              float right
              height: 30px;
              line-height: 28px;
              border: 1px solid #f18f00;
              cursor: pointer;
              text-align: center;
              color: #f18f00;
              font-size: 14px;
              border-radius: 3px;
              display: inline-block;
              background: #fff;
              width: 117px;
            .getMessageBtbNo
              float right
              height: 30px;
              line-height: 28px;
              border: 1px solid #ccc;
              cursor: pointer;
              text-align: center;
              color: #ccc;
              font-size: 14px;
              border-radius: 3px;
              display: inline-block;
              background: #fff;
              width: 117px;
          .verification
            line-height 0
            overflow hidden
            padding-top 10px
            width 308px
            padding-bottom 5px
            input
              height 32px
              width 125px
              float left
              margin 0
              margin-right 10px
            img
              width 117px
              height 30px
              float left
              cursor pointer
            .icon-re
              cursor pointer
              width  23px
              float left
              height 20px
              margin-top 6px
              background-position: -106px -132px;
          .agreement
            padding-top 10px
            width  308px
            .check
              margin: 3px 3px 3px 4px;
              width 13px
              height 13px
            a
              color #605f67
              cursor pointer

</style>

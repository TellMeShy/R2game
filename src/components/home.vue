<template>
  <div class="home">
    <div class="web-login-box" v-if="!isLogin" @keyup="Enter($event)">
      <div class="login-box">
        <h4><router-link to="/details/001">登录魔力通行证</router-link></h4>
        <div><i></i><input type="text" placeholder="账号" v-model="username" v-on:blur="checkLogUser(username,'userError')"></div>
        <p v-if="userError" class="error"><i class="icon icon-exclamation"></i>*5-20个小写英文字母或数字组成</p>
        <div class="password"><i></i><input onfocus="this.type='password'" type="text"  autocomplete="off" placeholder="密码" v-model="password" v-on:blur="checkPassword(password,'passwordError')"></div>
        <p v-if="passwordError" class="error"><i class="icon icon-exclamation"></i>*6-20个数字字母混合，不含空格键</p>
        <p class="orther"><input type="checkbox" v-model="cookieUser">记住用户名 <a @click="retrievePassword">忘记密码？</a></p>
        <button v-on:click="login">登录</button>
        <button class="register" @click="popUpWindow('快速注册')">免费注册</button>
      </div>
    </div>
    <Vswipe></Vswipe>
    <div class="home-content">
      <div>
        <div class="home-content-l">
          <VserverList></VserverList>
          <!--<VgameGift></VgameGift>-->
          <!--<div class="m-borBox m-inews">-->
            <!--<h2 class="m-title cd">-->
              <!--<p class="u-tit">新闻公告</p>-->
              <!--<router-link to="/news/newsList/allNews" class="more hovera">+更多&gt;</router-link>-->
            <!--</h2>-->
            <!--<ul class="u-newsLst">-->
              <!--<li v-for="(i,index) in news">-->
                <!--<router-link :to="{path:'/news/detail',query: {key:i.url}}" :title="i.title">{{i.title}}</router-link>-->
                <!--<span class="">{{i.time}}</span>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
          <Vgroup></Vgroup>
        </div>
        <div class="m-boxRight">
          <!--精品手游-->
          <div class="m-rBox m-pageGame">
            <h2 class="m-title cd">
              <i class="bor"></i>
              <p class="u-tit">精品手游</p>
              <router-link to="/game" class="more hovera">+更多&gt;</router-link>
            </h2>
            <div class="u-pageGame cd">
              <ul>
                <li v-for="i in BoutiqueGame">
                  <div class="gameImg">
                    <a target="_blank" :href="i.url" v-if="i.url"><img :src="i.img" :alt="i.title"></a>
                    <a target="_blank" v-if="!i.url" @click="onMassageChange('敬请期待')"><img :src="i.img" :alt="i.title"></a>
                  </div>
                  <ul class="gameTxt">
                    <li>
                      <p class="title">
                        <span :title="i.title">{{i.title}}</span>
                        <i class="icon" :class="{'new':i.type2==2,'hot':i.type2==1}"></i>
                      </p>
                      <p class="slink">
                        <a target="_blank" :href="i.url" v-if="i.url">官网</a><a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')">官网</a>|<a target="_blank" :href="i.gift" v-if="i.gift">礼包</a><a target="_blank"  @click="onMassageChange('敬请期待')" v-if="!i.gift">礼包</a>
                      </p>
                    </li>
                    <li>
                      <p class="stxt">类型：{{i.type}}</p>
                      <a target="_blank" class="o-btnBig">下载游戏
                        <div>
                          <a target="_blank" :href="i.Android" v-if="i.Android">
                            <i class="icon Android"></i>
                          </a>
                          <a target="_blank" @click="onMassageChange('敬请期待')" v-if="!i.Android">
                            <i class="icon Android"></i>
                          </a>
                          <a target="_blank" :href="i.Ios" v-if="i.Ios">
                            <i class="icon ios"></i>
                          </a>
                          <a target="_blank" @click="onMassageChange('敬请期待')" v-if="!i.Ios">
                            <i class="icon ios"></i>
                          </a>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!--热门手游-->
          <div class="m-rBox h-pageGame">
            <h2 class="m-title cd">
              <i class="bor"></i>
              <p class="u-tit">热门手游</p>
              <router-link to="/game" class="more hovera">+更多&gt;</router-link>
            </h2>
            <div class="u-mobileLst cd">
              <ul>
                <li v-for="i in HotGame">
                <a target="_blank" :href="i.url" v-if="i.url" class="gameImg"><img :src="i.pic" :alt="i.title"></a>
                <a target="_blank" v-if="!i.url" @click="onMassageChange('敬请期待')" class="gameImg"><img :src="i.pic" :alt="i.title"></a>
                <div class="gameBox">
                <a target="_blank" :href="i.url" v-if="i.url" :title="i.title">{{i.title}}</a>
                <a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')" :title="i.title">{{i.title}}</a>
                <p class="stxt">类型：{{i.type}}</p>
                <p class="slink">
                <a target="_blank" :href="i.url" v-if="i.url">官网</a>
                <a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')">官网</a> |
                <a target="_blank" :href="i.gift" v-if="i.gift">礼包</a>
                <a target="_blank" @click="onMassageChange('敬请期待')" v-if="!i.gift">礼包</a>
                </p>
                <div class="btn">
                <p>应用下载</p>
                <p class="hover">
                <a target="_blank" rel="nofollow" :href="i.Android" class="and" v-if="i.Android"><i></i></a>
                <a target="_blank" rel="nofollow" @click="onMassageChange('敬请期待')" class="and" v-if="!i.Android"><i></i></a>
                <a target="_blank" rel="nofollow" :href="i.Ios" class="ios" v-if="i.Ios"><i></i></a>
                <a target="_blank" rel="nofollow" @click="onMassageChange('敬请期待')" class="ios" v-if="!i.Ios"><i></i></a>
                </p>
                </div>
                </div>
                </li>
              </ul>
            </div>
          </div>
          <!--活动中心-->
          <!--<div class="m-rBox activity-center">-->
            <!--<h2 class="m-title cd">-->
              <!--<i class="bor"></i>-->
              <!--<p class="u-tit">活动中心</p>-->
              <!--<router-link to="/news/newsList/activityNews" class="more hovera">+更多&gt;</router-link>-->
            <!--</h2>-->
            <!--<div class="u-adLst cd">-->
              <!--<router-link target="_blank" :to="{path:'/news/detail',query: {key:i.url}}" :title="i.title" v-for="i in actioncenter">-->
                <!--<img :src="i.img" :alt="i.title">-->
                <!--<i class="hover"></i>-->
              <!--</router-link>-->
              <!--&lt;!&ndash;<a target="_blank" href="">&ndash;&gt;-->
              <!--&lt;!&ndash;<img src="" alt="">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="hover"></i>&ndash;&gt;-->
              <!--&lt;!&ndash;</a>&ndash;&gt;-->
              <!--&lt;!&ndash;<a target="_blank" href="">&ndash;&gt;-->
              <!--&lt;!&ndash;<img src="" alt="">&ndash;&gt;-->
              <!--&lt;!&ndash;<i class="hover"></i>&ndash;&gt;-->
              <!--&lt;!&ndash;</a>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->
          <!-- // -->
        </div>
      </div>
      <div class="m-rBox game-center">
        <h2 class="m-title cd">
          <i class="bor"></i>
          <p class="u-tit">游戏中心</p>
          <router-link to="/game" class="more hovera">+更多&gt;</router-link>
        </h2>
        <div>
          <p>手机游戏</p>
          <ul>
            <a target="_blank" :href="i.url" v-if="i.url" v-for="i in gamelist">
              <li>
                <span>{{i.title}}</span>
                <i :class="{'hot':i.type2==1,'new':i.type2==2}"></i>
              </li>
            </a>
            <a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')" v-for="i in gamelist">
              <li>
                <span>{{i.title}}</span>
                <i :class="{'hot':i.type2==1,'new':i.type2==2}"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
    <Vjoin :webpopUp="popUp" @on-popUp-change="onPopUpChange"></Vjoin>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>

import Vswipe from './component/swipe.vue'
import Valert from './component/alert.vue'
import VserverList from './component/serverList.vue'
import Vgroup from './component/group.vue'
import Vjoin from './component/join.vue'
import VgameGift from './component/gameGift.vue'
export default {
  name: 'home',
  components:{
    Vswipe,VserverList,Vgroup,Vjoin,VgameGift,Valert
  },
  data () {
    return {
      massagenew:'',
      actioncenter:'',
      gamelist:'',
      news:'',
      BoutiqueGame:'',
      HotGame:'',
      isLogin:false,
      popUp:'',
      username:'',
      password:'',
      userError:false,
      passwordError:false,
      cookieUser:false,
    }
  },
  watch:{
    username(val){
      this.username=val.replace(/ /g, "");
    },
    password(val){
      this.password=val.replace(/ /g, "");
    }
  },
  created:function () {
    if(localStorage.getItem('userName')){
      this.username = localStorage.getItem('userName')
    }else {
      this.username = ''
    }
    let name = 'userName='
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++)
    {
      let c = ca[i].trim();
      if (c.indexOf(name)==0)
        this.isLogin = c.split('=')[1]
    }
    let url=weUrl+'boutique/index.html';
    this.$http.get(url)
      .then(function(data){
        var basic = data.bodyText.substring(0, data.bodyText.lastIndexOf(','))+']]';
        basic = basic.replace(/,\s*]/g,']')
        this.BoutiqueGame=JSON.parse(basic)[0]
        this.gamelist = JSON.parse(basic)[1]
//        this.news=JSON.parse(basic)[1]
//        this.actioncenter = JSON.parse(basic)[2]
//        this.gamelist = JSON.parse(basic)[3]
      },function(response){

      })
    this.$http.get(weUrl+'hotgame/index.html')
      .then(function(data){
        var basic = data.bodyText.substring(0, data.bodyText.lastIndexOf(','))+']';
        this.HotGame=JSON.parse(basic)
      },function(response){

      })
  },
  methods: {
    onMassageChange:function (val) {
      this.massagenew=val
    },
    retrievePassword:function () {
      this.popUp= ''
      this.$router.push('/retrievePassword')
    },
    onPopUpChange:function (val) {    //接受弹窗传值
      this.popUp=val
    },
    hoverBox: function () {
      var data = this;
      for (var n = 1; n <= arguments.length; n++) {
        if (arguments.length - n > 1) {
          data = data[arguments[n]]
        } else {
          data[arguments[n]] = arguments[0]
        }
      }
    },
    popUpWindow: function (a) {        //弹窗
      this.popUp = a
    },
    checkLogUser:function () {         //检测用户名
      var x = /^[0-9a-zA-Z]*$/g
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          if(arguments[0].length<5||arguments[0].length>20){
            data[arguments[n]] = true
          }else if(x.test(arguments[0])){
            data[arguments[n]] = false
            return
          }else {
            data[arguments[n]] = true
          }
        }
      }
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
    Enter:function(ev){
      if(ev.keyCode == 13){
        this.login()
      }
    },
    login: function () {                 //登入账号
      if (this.userError || this.passwordError || this.username == '' || this.password == '') {
        this.checkLogUser(this.username)
        this.checkPassword(this.password)
        return
      }
      if (this.cookieUser) {
        localStorage.setItem('userName', this.username)
      }
      let url = weUrl+'?ct=user&ac=login';
      let parmas = {
        params: {username: this.username, password: this.password}
      }
      this.$http.get(url, parmas)
        .then(function (data) {
          if (data.body.state) {
            this.isLogin = this.username
            document.cookie="userName="+this.username;
            this.popUpWindow(false)
            window.location.reload();
          } else {
            this.onMassageChange(data.body.message)
          }
        }, function (response) {

        })

    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .home
    padding-bottom 72px
    .gameImg
      cursor pointer
    background #FBFBFB
    position relative
    .web-login-box
      z-index 50
      height 0
      width: 1200px;
      margin: 0 auto;
      position absolute
      top 60px
      left 0px
      right 0px
      .login-box
        width: 244px;
        /*height: 356px*/
        border: 1px solid #cdd6e4;
        border-top: 2px solid #de4205;
        background: #fff;
        padding: 0 33px;
        h4
          font-size: 18px;
          color: #000;
          line-height: 78px;
          font-weight normal;
        div
          padding-bottom 6px
          position relative
          i
            display block
            width 38px
            background #f5f5f5 url("../../static/img/login.png") no-repeat 0px -4px
            height 39px
            position absolute
            left 1px
            top 1px
          input
            height 41px
            width 100%
            box-sizing border-box
            border 1px solid #c5c4c4
            border-radius 3px
            padding-left 38px
            background #f5f5f5
        .password
          i
            background-position 1px -44px
        p
          font-size 12px
          line-height 12px
          color #6a6868
          padding-bottom 20px
        .orther
          padding-top 17px
          a
            float right
            font-size 12px
            line-height 12px
            color #6a6868
            &:hover
              color #de4205
        .error
          color  #de4205
          padding-bottom 10px
        button
          height 40px
          width 100%
          border none
          font-size 16px
          color #fff
          border-radius 3px
          background #de4205
          margin-bottom  13px
        .register
          background #9dd428
          margin-bottom  35px
    .home-content
      padding-top 30px
      overflow hidden
      width: 1200px;
      margin: 0 auto;
      >div
        overflow hidden
      .home-content-l
        width: 310px;
        float: left;
        .o-btn
          display: inline-block;
          border: 1px solid #de4205;
          border-radius: 1px;
          text-align: center;
          width: 57px;
          height: 24px;
          cursor pointer
          color: #de4205;
          margin-top: 15px;
          line-height: 24px;
          &:hover
            background #de4205
            color #fff
        .m-inews
          border: 1px solid #cdd6e4
          margin-top: 29px
          background: #fff
          padding-bottom 25px
          .m-title
            height: 50px;
            position: relative;
            font-weight: 400;
            .u-tit
              font-size: 18px;
              line-height: 50px;
              padding-left 26px
            .more
              font-size: 14px;
              position: absolute;
              right: 20px;
              top: 17px;
              color: #000;
              &:hover
                color :#de4205
          .u-newsLst
            padding-bottom 10px
            overflow hidden
            li
              float: left;
              font-size: 13px;
              color: #7d7d7d;
              clear: both;
              width: 285px;
              margin-left: 23px;
              height: 31px;
              line-height 31px
              padding-left: 3px;
              overflow hidden
              a
                float left
                color: #7d7d7d;
                height: 29px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width 180px
                &:hover
                  color :#de4205
              span
                float right
                font-size 12px
                width 75px

      .m-boxRight
        width: 850px;
        float: right;
        .m-pageGame
          min-height: 608px;
          .u-pageGame
            margin-left: -20px;
            >ul
              >li
                float: left;
                width: 176px;
                margin: 20px 0 0 33px;
                height: 248px;
                background: #f8f8f8;
                div
                  height: 183px;
                  position: relative;
                  img
                    width 176px
                    height 183px
                .gameTxt
                  width: 176px;
                  height: 73px;
                  border-top: 0;
                  padding: 10px 0 5px;
                  li
                    float: none;
                    margin: 0 0 0 9px;
                    width: auto;
                    height: auto;
                    clear: both;
                    .title
                      float: left;
                      width: 45%;
                      font-size: 12px;
                      font-weight: bold;
                      overflow: hidden;
                      height: 28px;
                      span
                        cursor pointer
                        float: left;
                        width: 56px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                      &:hover
                        color #de4205
                      .icon
                        float: left;
                        background: url(../../static/img/icon.png) no-repeat 1000px 1000px;
                        display: inline-block;
                        width: 14px;
                        height: 10px;
                        margin-top: 2px;
                        margin-left: 5px;
                      .new
                        background-position: -70px -115px;
                      .hot
                        background-position: -85px -115px;

                    .slink
                      a
                        padding: 0 7px;
                        color: #000;
                        &:hover
                          color #de4205
                    .stxt
                      font-size: 9px;
                      float: left;
                      color: #8d8d8d;
                      line-height: 19px;
                      width: 56%;
                      margin-top: 5px;
                    .o-btnBig
                      float left
                      width 71px
                      height 19px
                      text-align center
                      line-height 19px
                      color  #de4205
                      border 1px solid #de4205
                      margin-top 2px
                      border-radius 10px
                      position relative
                      >div
                        width 71px
                        height 0
                        overflow hidden
                        border-radius 10px
                        transition .5s all
                        .icon
                          float left
                          width 50%
                          height 100%
                        .Android
                          background #99cc03 url("../../static/img/icon.png") no-repeat
                          background-position: -150px -113px;
                        .ios
                          background #fbfbfb url("../../static/img/icon.png") no-repeat
                          background-position: -108px -113px;

                      &:hover
                        background #de4205
                        color #fff
                      &:hover div
                        height 19px

        .h-pageGame
          min-height: 388px;
          margin-top: 39px;
          .u-mobileLst
            overflow hidden
            ul
              li
                float: left;
                width: 262.33333px;
                height: 128px;
                padding: 25px 0 0 20px;
                margin: -1px 0 0 -1px;
                img
                  height 111px
                  width 111px
                  margin-right 24px
                  float left
                .gameBox
                  float: left;
                  width: 115px;
                  line-height: 22px;
                  a
                    color: #000;
                    &:hover
                      color #de4205
                  .stxt
                    font-size: 13px;
                    color: #8d8d8d;
                  .slink
                    font-size: 13px;
                    margin: 0 0 6px -5px;
                    a
                      padding: 0 5px;

                  .btn
                    display: block;
                    width: 83px;
                    height: 27px;
                    line-height: 27px;
                    text-align: center;
                    font-weight: bold;
                    color: #fff;
                    border: 1px solid #e96a00;
                    background: #de4205;
                    border-radius: 2px;
                    cursor: pointer;
                    position: relative;
                    &:hover .hover
                      height: 27px;
                    .hover
                      height 0
                      transition .5s all
                      width: 83px;
                      border-radius: 2px;
                      a
                        width 50%
                        height 100%
                        display block
                        float left
                      .and
                        background #99cc03 url("../../static/img/icon.png") no-repeat
                        background-position: -101px -87px;
                      .ios

                        background #fbfbfb url("../../static/img/icon.png") no-repeat
                        background-position: -143px -87px;

       .game-center
          margin-top 35px
          h2
            background #f3f3f3
            border-bottom 1px solid #dbdbdb
          >div
            padding 35px 22px 58px 60px
            p
              font-size 18px
              line-height 1
              color #de4205
              padding-bottom 8px
              margin-bottom 6px
              border-bottom 2px solid #de4205
            ul
              overflow hidden
              li
                float left
                width 14%
                padding-top 17px
                font-size 13px
                line-height 1
                span
                  display inline-block
                i
                  margin-left 14px
                  display inline-block
                  width 18px
                  height 13px
                .hot
                  background url("../../static/img/myicon.png") 0 -155px
                .new
                  background url("../../static/img/myicon.png") 0 -177px
  .activity-center
          margin-top: 39px;
          .u-adLst
            overflow hidden
            padding: 4px 0 35px;
            margin-left: 3px;
            a
              display: block;
              width: 254px;
              height: 227px;
              float: left;
              margin-left: 20px;
              position: relative;
              img
                width 254px
                height 227px
              .hover
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
                top: 0;
                left: 0;
                transition 1s all
                &:hover
                  background rgba(0,0,0,.5)

        .m-rBox
          border: 1px solid #dbdbdb;
          background: #fff;
          .m-title
            border-top: 1px solid #dedee3;
            height: 50px;
            position: relative;
            font-weight: 400;
            .bor
              height: 1px;
              background: #de4205;
              width: 113px;
              display: block;
              position: absolute;
              top: -1px;
              left: 0;
            .u-tit
              font-size: 18px;
              line-height: 50px;
              padding-left: 20px;
            .more
              font-size: 14px;
              position: absolute;
              right: 20px;
              top: 15px;
              color: #000;

</style>

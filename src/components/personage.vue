<template>
  <div class="personage">
    <div class="Gl_BreadCrumbsBar">
      <div class="Gl_BreadGroup">
        <div class="breadNr">
          <span class="dqian">当前位置：</span>
          <span class="breadcrumbs">
                <a href="">魔力首页</a> &gt;
                <a href="">用户中心</a>
            </span>
        </div>
      </div>
    </div>
    <div class="personage-c-box">
      <div class="personage-c">
        <div class="personage-c-l">
          <dl class="personage-list">
            <dt>用户中心</dt>
            <dd>
              <ul>
                <li class="list personage-list1" v-bind:class="{cur:list==1}" @click="checkBox(1,'list')"><router-link to="/personage/">个人中心</router-link></li>
                <!--<li class="list personage-list2" v-bind:class="{cur:list==2}" @click="checkBox(2,'list')"><router-link to="/personage/record">查询记录</router-link></li>-->
                <!--<li class="list personage-list3" v-bind:class="{cur:list==3}" @click="checkBox(3,'list')"><router-link to="/personage/news">消息中心</router-link></li>-->
                <!--<li class="list personage-list4" v-bind:class="{cur:list==4}" @click="checkBox(4,'list')"><router-link to="/personage/paypal">paypal账户</router-link></li>-->
                <li class="list personage-list5" v-bind:class="{cur:list==5}" @click="checkBox(5,'list')"><router-link to="/personage/mystery">防沉迷系统</router-link></li>
              </ul>
            </dd>
          </dl>
          <dl class="personage-baibao">
            <dt>自助百宝箱</dt>
            <dd>
              <ul>
                <!--<li @click="popUpWindow('快速注册')">注册通行证</li>-->
                <li>我要充值</li>
                <!--<router-link to="/retrievePassword"><li>找回密码</li></router-link>-->
                <router-link to="/personage/modified"><li>修改资料</li></router-link>
                <li>自助提问</li>
                <li>在线提问</li>
              </ul>
            </dd>
          </dl>
          <div class="zuokefuGroup">
            <div class="zuokefutel">
              <p>电话：400 668 9919 </p>
              <p>传真：021-33676520</p>
              <p>邮箱：<a href="">R2games@.com </a></p>
            </div>
          </div>
        </div>
        <div class="personage-c-r">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <Vjoin :webpopUp="popUp" @on-popUp-change="onPopUpChange"></Vjoin>
  </div>

</template>

<script>
  import Vjoin from './../components/component/join.vue'
export default {
  name: 'personage',
  data () {
    return {
      list:1,
      isLogin:false,
      popUp:'',
    }
  },
  components:{
    Vjoin
  },
  methods:{
    checkBox: function () {
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          data[arguments[n]]=arguments[0]
        }
      }

    },
    popUpWindow:function (a) {        //弹窗
      this.popUp=a
    },
    onPopUpChange:function (val) {    //接受弹窗传值
      this.popUp=val
    },


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .personage
    padding-bottom 125px
    background #fbfbfb
    .Gl_BreadCrumbsBar
      border-top: 1px solid #d4d4d4;
      border-bottom: 1px solid #d4d4d4;
      background #efefef
      .Gl_BreadGroup
        position: relative;
        width: 960px;
        margin: 0px auto;
        font-family: "微软雅黑","宋体";
        .breadNr
          font-size 12px
          line-height: 40px;
          color: #949494;
          a
            color: #949494;


    .personage-c-box
      padding-top: 13px;
      overflow: hidden;
      background #fbfbfb
      .personage-c
        width: 960px;
        margin: 0px auto;
        font-family: Microsoft Yahei;
        color: #000;
        line-height: 180%;
        .personage-c-l
          float: left;
          width: 210px;
          .personage-list
            border: 1px solid #e1e1e1;
            border-bottom: none;
            margin-bottom: 10px;
            dt
              background: #efefef;
              border-bottom: 1px solid #dbdbdb;
              height: 36px;
              line-height: 36px;
              overflow: hidden;
              padding: 0 15px;
              font-size: 14px;
              color: #373737;
              text-align: center;
            dd
              ul
                .list
                  font-size: 14px;
                  padding: 9px 0;
                  border-bottom: 1px solid #e7e7e7;
                  overflow: hidden;
                  height: 31px;
                  a
                    background: url(../../static/img/personage/user_icon.png) no-repeat;
                    display: block;
                    height: 31px;
                    line-height: 31px;
                    padding: 0 8px 0 76px;
                    color: #626262;
                .cur
                  a
                    background: #de4205 url(../../static/img/personage/user_icon_hover.png) no-repeat;
                    color #fff
                .personage-list1
                  a
                    &:hover
                      background: #de4205 url(../../static/img/personage/user_icon_hover.png) no-repeat;
                      color #fff
                      background-position: 43px 5px;
                    background-position: 43px 5px;
                .personage-list2
                  a
                    &:hover
                      background: #de4205 url(../../static/img/personage/user_icon_hover.png) no-repeat;
                      color #fff
                      background-position: 43px -40px;
                    background-position: 43px -40px;
                .personage-list3
                  a
                    &:hover
                      background: #de4205 url(../../static/img/personage/user_icon_hover.png) no-repeat;
                      color #fff
                      background-position: 43px -82px;
                    background-position: 43px -82px;
                .personage-list4
                  a
                    &:hover
                      background: #de4205 url(../../static/img/personage/user_icon_hover.png) no-repeat;
                      color #fff
                      background-position: 43px -132px;
                    background-position: 43px -132px;
                .personage-list5
                  a
                    &:hover
                      background: #de4205 url(../../static/img/personage/user_icon_hover.png) no-repeat;
                      color #fff
                      background-position: 43px -188px;
                    background-position: 43px -188px;

          .personage-baibao
            border: 1px solid #e1e1e1;
            dt
              background: #efefef;
              border-bottom: 1px solid #dbdbdb;
              height: 36px;
              line-height: 36px;
              overflow: hidden;
              padding: 0 15px;
              font-size: 14px;
              color: #373737;
              text-align: center;
            dd
              ul
                padding: 3px 0px 3px 3px;
                li
                  display: inline-block;
                  margin: 2px 1px 2px 1px;
                  height: 37px;
                  text-align: center;
                  line-height: 37px;
                  border: 1px solid #fc8e55;
                  border-bottom: 2px solid #fc8e55;
                  background: #ffd3ba;
                  color: #626262;
                  width: 95px;
                  cursor pointer
                  &:hover
                    background #de4205
                    color #fff

          .zuokefuGroup
            border: 1px solid #e1e1e1;
            border-top: none;
            background: #f4f4f4;
            padding: 10px;
            .zuokefutel
              padding: 0px 0px 0px 59px;
              background: url(../../static/img/personage/user_icon_userzu.png) no-repeat 0px 9px;
              color: #777;
              line-height: 145%;
              font-size 12px
              a
                color: #777;
        .personage-c-r
          float: right;
          width: 726px;
          color: #353535;

</style>

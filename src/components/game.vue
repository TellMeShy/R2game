<template>
  <div class="game">
    <Vswipe></Vswipe>
    <div class="game-content">
      <div class="game-content-l">
        <VserverList></VserverList>
        <!--<Vhotevents></Vhotevents>-->
        <Vgroup></Vgroup>
      </div>
      <div class="game-content-r">
        <h5>手机游戏</h5>
        <div class="u-gameBox" v-for="(i,index) in list" v-if="(pagecur-1)*4<=index && index<pagecur*4">
          <div class="gameLst cd">
            <p class="page-img">
              <img :src="i.pic" alt="">
              <a target="_blank" :href="i.url" v-if="i.url" class="gamelogo "></a>
              <a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')" class="gamelogo "></a>
            </p>
            <div class="gameTxt cd">
              <ul class="gameInfo">
                <li class="name"><a target="_blank" :href="i.url" v-if="i.url" class="u-n">{{i.title}}</a><a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')" class="u-n">{{i.title}}</a><span class="u-i">类型：{{i.type}}</span></li>

                <li class="info" v-html="i.body"></li>
                <li class="btn">
                  <a target="_blank" :href="i.url" v-if="i.url" class="g-btnBig">进入官网</a>
                  <a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')" class="g-btnBig">进入官网</a>
                  <ul class="download">
                    <a target="_blank" :href="i.Android" v-if="i.Android"><li class="download_a"></li></a>
                    <a target="_blank" @click="onMassageChange('敬请期待')" v-if="!i.Android"><li class="download_a"></li></a>
                    <a target="_blank" :href="i.Ios" v-if="i.Ios"><li class="download_i"></li></a>
                    <a target="_blank" @click="onMassageChange('敬请期待')" v-if="!i.Ios"><li class="download_i"></li></a>
                  </ul>
                  <!--<a target="_blank" href="" class="o-btnBig">开始游戏</a>-->
                </li>
              </ul>
              <ul class="gameCode">
                <li class="img_box">
                  <a target="_blank" :href="i.url" v-if="i.url"><img :src="i.sImg" alt="" width="46" height="46"></a>
                  <a target="_blank"  v-if="!i.url" @click="onMassageChange('敬请期待')"><img :src="i.sImg" alt="" width="46" height="46"></a>
                </li>
                <li class="code">{{i.title}}</li>
                <li><a target="_blank" :href="i.gift" class="g-btnBig" v-if="i.gift">领取礼包</a></li>
                <li><a target="_blank" @click="onMassageChange('敬请期待')" class="g-btnBig" v-if="!i.gift">领取礼包</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="page">
          <div class="page-index" @click="checkPage(0)">首页</div>
          <div @click="checkPage(pagecur-2)">上一页</div>
          <div v-for="(i,index) in page" :class="{cur:(index+1)==pagecur}" @click="checkPage(index)" v-if="pagecur==1&&(index+1)>=pagecur&&(index+1)<=(pagecur+2)" >{{index+1}}</div>
          <div v-for="(i,index) in page" :class="{cur:(index+1)==pagecur}" @click="checkPage(index)" v-if="pagecur>1&&pagecur<page&&(index+1)>=(pagecur-1)&&(index+1)<=(pagecur+1)" >{{index+1}}</div>
          <div v-for="(i,index) in page" :class="{cur:(index+1)==pagecur}" @click="checkPage(index)" v-if="page!=1&&pagecur==page&&(index+1)>=(pagecur-2)&&(index+1)<=pagecur" >{{index+1}}</div>
          <div @click="checkPage(pagecur)">下一页</div>
          <div @click="checkPage(page-1)">末页</div>
          <div>{{pagecur}}/{{page}}页</div>
          <input type="number" v-model="selectpage">
          <a @click="checkPage(selectpage-1)">跳转</a>
        </div>
      </div>
      <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
    </div>
  </div>
</template>

<script>
  import Vswipe from './component/swipe.vue'
  import VserverList from './component/serverList.vue'
  import Vgroup from './component/group.vue'
  import Vhotevents from './component/hotevents.vue'
  import Valert from './component/alert.vue'
export default {
  name: 'game',
  data () {
    return {
      massagenew:'',
      list:'',
      pagecur:1,
      page:'',
      selectpage:'',
    }
  },
  components:{
    Vswipe,VserverList,Vgroup,Vhotevents,Valert
  },
  methods:{
    onMassageChange:function (val) {
      this.massagenew=val
    },
    checkPage:function (a) {
      if(a<0){
          a=0
      }else if(a>=this.page){
        a=this.page-1
      }
      this.pagecur = a+1
    }
  },
  watch:{
    selectpage(val){
        if(val<=0){
            this.selectpage =1
        }else if(val>this.page){
          this.selectpage = this.page
        }
    },
  },
  created:function(){
    this.$http.get(weUrl+'list/index.html')
    .then(function(data){
      var basic = data.bodyText.substring(0, data.bodyText.lastIndexOf(','))+']';
      this.list=JSON.parse(basic)
      this.page = Math.ceil(this.list.length/4)
    },function(response){

    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
 .game
   padding-bottom 72px
   background #fbfbfb
  .game-content
    padding-top 30px
    width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 5;
    overflow hidden
    .game-content-l
      width: 310px;
      float: left;
    .game-content-r
      width: 850px;
      float: right;
      border: 1px solid #dbdbdb;
      h5
        background: #efefef repeat-x;
        border-bottom: 1px solid #dbdbdb;
        height: 51px;
        padding-bottom 0
        font: 18px/49px "Microsoft YaHei";
        color: #454545;
        text-align: center;
      .u-gameBox
        background: #fff;
        .gameLst
          width: 804px;
          height: 200px;
          display: block;
          margin: 0 auto;
          padding-top: 30px;
          .page-img
            position: relative;
            width: 198px;
            height: 198px;
            float: left;
            background: #e1e1e1;
            border: 1px solid #dbdbdb;
            border-right: 0;
            z-index 1
            img
              position: absolute;
              top: 45px;
              left: 45px;
              z-index: 2;
              height 111px
              width 111px
            .gamelogo
              position: absolute;
              z-index: 5;
              top: 0;
              width: 100%;
              height: 100%;
              line-height: 211px;
              text-align: center;
              vertical-align: middle;
              display block
              &:hover
                background rgba(0,0,0,.7)

          .g-btnBig
            width: 105px;
            height: 32px;
            float: left;
            display: block;
            color: #000;
            font-weight: bold;
            line-height: 32px;
            text-align: center;
            margin-top: 5px;
            border 1px solid #ccc
            border-radius 16px
            &:hover
              border-radius 16px
              background #de3f05
              border-color #de3f05
              color #fff
          .gameTxt
            border: 1px solid #efefef;
            background: #fff;
            width: 602px;
            height: 198px;
            float: left;
           .download
             float right
             width 105px
             height 32px
             border 1px solid #dddddd
             border-radius 16px
             li
               height 100%
               float left
               box-sizing border-box
               width 50%
               border-radius 16px 0 0 16px
               background url("../../static/img/myicon.png") -207px -63px
               &:hover
                background #eee url("../../static/img/myicon.png") -207px -63px
             .download_i
                background-position-x  -269px
                border-left 1px solid #dddddd
                border-radius 0 16px 16px 0
                &:hover
                  background-position-x  -269px
            .gameInfo
              padding: 20px 25px;
              width: 422px;
              float: left;
              li
                .u-n
                  font-weight: bold;
                  font-size: 16px;
                  display: inline-block;
                  width: 50%;
                  float: left;
                .u-i
                  float: right;
                  font-size: 12px;
                  display: inline-block;
                  color: #8d8d8d;
              .name
                height 28px
                line-height 28px
              .info
                color: #7c7c7c;
                padding: 5px 0;
                font-size: 13px;
                line-height 23.4px
                height: 90px;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
          .gameCode
            float: left;
            width: 129px;
            height: 158px;
            border-left: 1px solid #efefef;
            text-align: center;
            padding: 42px 0 0;
            position: relative;
            .img_box
              width: 46px;
              height: 47px;
              background: #ececec;
              margin: 0 auto;
            .code
              font-size: 13px;
              margin: 26px 0 19px;
            .g-btnBig
               margin: 0 14px 0;
               &:hover
                 border-radius 16px
                 background #de3f05
                 border-color #de3f05
                 color #fff

      .page
        padding-left 147px
        margin-top 30px
        margin-bottom 39px
        overflow hidden
        input
          height 34px
          width 42px
          box-sizing border-box
          background #fbfbfb
          color #7d7d7d
          text-align center
          border 1px solid #e8e8e8
        .cur
          background #de3f05
          color #fff
          border-color #ff4400
        >a
          padding-left 15px
        >div
          margin-right 10px
          height 34px
          padding 0 15px
          cursor pointer
          box-sizing border-box
          background #fbfbfb
          color #7d7d7d
          border 1px solid #e8e8e8
          line-height 34px
          font-size 14px
          float left


</style>

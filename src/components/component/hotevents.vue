<template>
  <div class="Vhotevents">
    <div class="m-borBox m-hotEvents">
      <h2 class="m-title cd">
        <p class="u-tit">热门活动</p>
        <router-link to="/news/newsList/activityNews" target="_blank" class="more">+更多&gt;</router-link>
      </h2>
      <div class="u-Hot">
        <div class="swiper">
          <div class="swiper-box" v-bind:style="{transform :'translateX('+page*-264+'px)'}">
            <router-link target="_blank" :to="{path:'/news/detail',query: {key:i.url}}" :title="i.title" v-for="(i,index) in list" v-if="index<=2"><img :src="i.img" :alt="i.title" width="264" height="130"></router-link>
          </div>
        </div>
        <div class="pagebtn">
          <span @click="toPage(0)" v-bind:class="{cur:page==0}"></span>
          <span @click="toPage(1)" v-bind:class="{cur:page==1}"></span>
          <span @click="toPage(2)" v-bind:class="{cur:page==2}"></span>
        </div>
        <!--<div class="hiSlider-pages">-->
        <!--<a href="" class="active">1</a>-->
        <!--<a href="" class="">2</a>-->
        <!--<a href="" class="">3</a>-->
        <!--</div>-->
      </div>
      <!-- // -->
      <ul class="u-newsLst">
        <li v-for="(i,index) in list">
          <i :class="'num_'+(1+index)">{{index+1}}</i><router-link target="_blank" :to="{path:'/news/detail',query: {key:i.url}}" :title="i.title">{{i.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vhotevents',
  data () {
    return {
      list:'',
      page:0
    }
  },
  created:function () {
    this.$http.get(weUrl+'preferential/index.html')
      .then(function(data){
        var basic = data.bodyText.substring(0, data.bodyText.lastIndexOf(','))+']';
        basic = basic.replace(/<p>/g,'')
        basic = basic.replace(/<\/p>/g,'')
        this.list=JSON.parse(basic)
      },function(response){

      })
    var _self = this
    setInterval(function () {
      if(_self.page==2){
        _self.page=0
        return
      }
      _self.page++
    },3000)
  },
  methods:{
    toPage:function (a) {
      this.page=a
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .m-hotEvents
    border: 1px solid #cdd6e4;
    margin-top: 29px;
    background: #fff
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
    .u-Hot
      height: 160px;
      .swiper
        height 130px
        width 264px
        margin auto
        overflow hidden
        .swiper-box
          height 100%
          width 300%
      .pagebtn
        height 25px
        padding-left 128px
        padding-top 6px
        box-sizing border-box
        span
          float left
          height 13px
          width 13px
          border-radius 7px
          background #b2b2b2
          margin-right 7px
        .cur
          background #de3f05
    ul
      li
        font-size: 13px;
        color: #7d7d7d;
        clear: both;
        width: 270px;
        margin-left: 23px;
        height: 31px;
        padding-left: 3px;
        i
          font-style normal
          display: inline-block;
          height: 18px;
          width: 18px;
          line-height: 18px;
          border-radius: 50%;
          color: #fff;
          text-align: center;
          background: #aaa;
          margin-right: 14px;
        .num_1
          background #f47900
        .num_2
          background #00b1f4
        .num_3
          background #fd5f9a
        a
          width 229px
          text-overflow:ellipsis;
          white-space:nowrap;
          overflow:hidden;
          color: #7d7d7d;
</style>

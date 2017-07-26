<template>
  <ul class="newslist-list strategy">
    <li v-for="(i,index) in list" v-if="(pagecur-1)*8<=index && index<pagecur*8">
      <router-link :to="{path:'/news/detail',query: {key:i.url}}" :title="i.title"><h6>{{i.title}}</h6></router-link>
      <p>{{i.time}}<router-link :to="{path:'/news/detail',query: {key:i.url}}" :title="i.title">查看详情></router-link></p>
    </li>
    <div class="page">
      <div class="page-index" @click="checkPage(0)">首页</div>
      <div @click="checkPage(pagecur-2)">上一页</div>
      <div v-for="(i,index) in page" :class="{cur:(index+1)==pagecur}" @click="checkPage(index)" v-if="pagecur==1&&(index+1)>=pagecur&&(index+1)<=(pagecur+2)" >{{index+1}}</div>
      <div v-for="(i,index) in page" :class="{cur:(index+1)==pagecur}" @click="checkPage(index)" v-if="pagecur>1&&pagecur<page&&(index+1)>=(pagecur-1)&&(index+1)<=(pagecur+1)" >{{index+1}}</div>
      <div v-for="(i,index) in page" :class="{cur:(index+1)==pagecur}" @click="checkPage(index)" v-if="page!=1&&pagecur==page&&(index+1)>=(pagecur-2)&&(index+1)<=pagecur" >{{index+1}}</div>
      <div @click="checkPage(pagecur)">下一页</div>
      <div @click="checkPage(page-1)">末页</div>
      <span>{{pagecur}}/{{page}}页</span>
      <input type="number" v-model="selectpage">
      <a @click="checkPage(selectpage-1)">跳转</a>
    </div>
  </ul>
</template>

<script>

  export default {
    name: 'strategy',
    data () {
      return {
        list:'',
        pagecur:1,
        page:'',
        selectpage:'',
      }
    },
    methods:{
      checkPage:function (a) {
        if(a<0){
          a=0
        }else if(a>=this.page){
          a=this.page-1
        }
        this.pagecur = a+1
      }
    },
    created:function () {
      this.$http.get(weUrl+'allnews/strategy/index.html')
        .then(function(data){
          var basic = data.bodyText.substring(0, data.bodyText.lastIndexOf(','))+']';
          basic = basic.replace(/<p>/g,'')
          basic = basic.replace(/<\/p>/g,'')
          this.list=JSON.parse(basic)
          this.page = Math.ceil(this.list.length/8)
        },function(response){

        })
    },
    watch: {
      selectpage(val){
        if (val <= 0) {
          this.selectpage = 1
        } else if (val > this.page) {
          this.selectpage = this.page
        }
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .newslist-list
    li
      padding 28px 0
      border-bottom 1px dashed #ebebeb
      h6
        background url("../../../../static/img/myicon.png") -413px -91px no-repeat
        padding-left 18px
        line-height 1
        font-size 18px
        font-weight normal
        margin-bottom 18px
        &:hover
          background-position-y -68px
          color #de3f05
      p
        padding-left 18px
        line-height 14px
        color #555555
        font-size 14px
        a
          float right
          color #de3f05
    .page
      box-sizing border-box
      padding-top 41px
      height 75px
      padding-left 15px !important
      line-height 34px
      input
        height 32px !important
        width 40px
        background #fbfbfb
        line-height 32px
        text-align center
        border 1px solid #e8e8e8
      span
        float left
        margin-right 10px
      div
        float left
        margin-right 10px
        padding 0 15px
        background #fbfbfb
        line-height 32px
        border 1px solid #e8e8e8
        height 32px
      .cur
        border-color #fd4400
        color #fff
        background #de3f05


</style>

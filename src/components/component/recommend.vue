<template>
  <div class="Vrecommend">
    <div class="m-borBox m-gameGift">
      <h2 class="m-title cd">
        <p class="u-tit">推荐游戏</p>
        <a href="javascript:;" class="more" @click="changelist">换一换&gt;</a>
      </h2>
      <div class="u-gameGiftLst ulist">
        <ul>
          <li v-for="(i,index) in list" v-if="(index+1)<=4*listcur&&(index+1)>4*(listcur-1)" >
            <a target="_blank" :href="i.giftbag" class="name-pic"><img :src="i.img" :alt="i.title"></a>
            <p class="recommendgame">
              <a target="_blank" :href="i.url">{{i.title}}</a>
              <span>{{i.time}}</span>
            </p>
            <a target="_blank" :href="i.giftbag" class="o-btn">领取&gt;</a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Vrecommend',
  data () {
    return {
      list:'',
      listcur:1,
      listpage:''
    }
  },
  methods:{
    changelist:function () {
      if(this.listpage>this.listcur){
        this.listcur++
      }else {
        this.listcur = 1
      }
    }
  },
  created:function () {
    this.$http.get(weUrl+'recommend/index.html')
      .then(function(data){
        let basic = data.bodyText.substring(0, data.bodyText.lastIndexOf(','))+']';
        this.list=JSON.parse(basic)
        this.listpage = Math.ceil(this.list.length/4)
      },function(response){

      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.Vrecommend
  .m-gameGift
    border: 1px solid #cdd6e4;
    margin-top: 29px;
    background: #fff;
    padding: 0 17px;
    .m-title
      height: 50px;
      position: relative;
      font-weight: 400;
      .u-tit
        font-size: 18px;
        line-height: 50px;
        padding-left:3px
      .more
        font-size: 14px;
        position: absolute;
        color: #000;
        top:17px
        right 0
        &:hover
          color #de4205

    .u-gameGiftLst
      padding-bottom: 5px;
      height: 289px;
      overflow: hidden;
      ul
        li
          height: 46px;
          border-bottom: 1px solid #d2d3da;
          padding: 13px 8px;
          overflow hidden
          img
            float left
            width 47px
            height 47px
            margin-right 17px
          .recommendgame
            float: left;
            padding-right: 4px;
            width: 130px;
            a
              line-height 1
              display block
              font-size:14px
              margin-top 11px
              margin-bottom  7px
              color: #000;
              &:hover
                color :#de4205
            span
              font-size 12px
              color #00b1f4


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
</style>

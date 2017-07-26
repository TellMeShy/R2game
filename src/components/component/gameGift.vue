<template>
  <div class="VgameGift">
    <div class="m-borBox m-gameGift">
    <h2 class="m-title cd">
      <p class="u-tit">游戏礼包</p>
      <a href="javascript:;" class="more" @click="changeGift">换一换&gt;</a>
    </h2>
    <div class="u-gameGiftLst ulist">
      <ul>
        <li v-for="(i,index) in giftbag" v-if="(index+1)<=4*giftbagcur&&(index+1)>4*(giftbagcur-1)">
          <a target="_blank" :href="i.giftbag" class="name-pic"><img :src="i.img" :alt="i.title"></a>
          <p class="gift">
            <a target="_blank" :href="i.url">{{i.title}}</a>
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
  name: 'VgameGift',
  data () {
    return {
      giftbag:'',
      giftbagPage:'',
      giftbagcur:1,
    }
  },
  created:function () {
    this.$http.get(weUrl+'giftbag/index.html')
      .then(function(data){
        var basic = data.bodyText.substring(0, data.bodyText.lastIndexOf(','))+']';
        basic = basic.replace(/<p>/g,'')
        basic = basic.replace(/<\/p>/g,'')
        this.giftbag=JSON.parse(basic)
        this.giftbagPage = Math.ceil(this.giftbag.length/4)
      },function(response){
      })
  },
  methods:{
    changeGift:function () {
      if(this.giftbagPage>this.giftbagcur){
        this.giftbagcur++
      }else {
        this.giftbagcur = 1
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.VgameGift
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
          .gift
            float: left;
            display: inline-block;
            line-height: 49px;
            padding-right: 4px;
            width: 130px;
            a
              font-size:13px
              color: #000;
              &:hover
                color :#de4205





</style>

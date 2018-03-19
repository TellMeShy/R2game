<template>
  <div class="Vgiftalert">
      <div class="gift_bg" v-if="data">
        <div class="gift_content" v-for="(i,index) in data" v-if="index == cur_index">
          <div class="close" @click="check()"></div>
          <div class="gift_code">
            <div><span v-if="isshow(index)">{{i.data.code}}</span></div>
            <button class="cope" @click="copegift(index)">复制</button>
          </div>
          <button class="get_gift" @click="showGift(index)">领取礼包</button>
          <h6>领取礼包</h6>
          <p>{{i.data.gift_name}} : {{i.data.gift_detail}}</p> <h6>兑换方式</h6>
          <p>{{i.data.gift_use}}</p>
          <div class="arrows" @click="nextGift()"></div>
        </div>
        <textarea ref="textgift" class="hide-text">{{data[cur_index].data.code}}</textarea>
      </div>
    <Valert :massage="massagenew" @on-massage-change="onMassageChange"></Valert>
  </div>

</template>

<script>
  import Valert from './alert.vue'
  export default {
    name: 'Vgiftalert',
    components:{
      Valert
    },
    data () {
      return {
        massagenew:'',
        newGift: this.gift,
        data:'',
        cur_index:0,
        showarr:[],
        hash:1,
      }
    },
    props: ['gift'],
    methods: {
      onMassageChange:function (val) {
        this.massagenew=val
      },
      check: function () {
        this.newGift = ''
        this.data = ''
      },
      nextGift:function () {
        this.cur_index++
        if(this.cur_index==this.data.length){
          this.cur_index = 0
        }
      },
      showGift:function (a) {
        this.showarr.push(a)
      },
      isshow:function (a) {
          for(var i=0;i<this.showarr.length;i++){
              if(this.showarr[i]==a){
                  return true
              }
          }
        return false
      },
      copegift:function (a) {
        for(var i=0;i<this.showarr.length;i++){
          if(this.showarr[i]==a){
            var e=this.$refs.textgift;//对象是content
            e.select(); //选择对象
            document.execCommand("Copy"); //执行浏览器复制命令
          }
        }
      }

    },
    watch: {

      gift(val) {
        this.newGift = val;//新增result的watch，监听变更并同步到myResult上
      },
      newGift(val){
        //xxcanghai 小小沧海 博客园
        this.$emit("on-gift-change", val);//③组件内对myResult变更后向外部发送事件通知
        if(val){
          var url = "//www.r2games.com.cn/?ct=act&ac=giftCode&code=" + val + '&ran='+Math.random();;
          console.log(url);
          this.$http.get(url)
            .then(function (data) {
              if(data.body.state){
                console.log(data.body);
                console.log(data.body.data[0]);
                console.log(data.body.data[0].data);
                console.log(data.body.data[0].data.game_id);
                this.data = data.body.data
                this.cur_index = 0
              }else {
                this.onMassageChange(data.body.message)
                this.newGift = ''
              }
            }, function (response) {

            })
        }
      }
    }
  }
</script>
<style lang="stylus">
  .gift_bg
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left 0;
    background: rgba(0,0,0,.8);
    z-index 150
    .hide-text
      position: absolute;
      left: 9999px;
    .gift_content
      width: 599px;
      height: 417px;
      background: url(../../../static/img/gift_content.jpg);
      margin: 200px auto;
      position: relative;
      padding-top: 17px;
      box-sizing: border-box;
      .close
        width: 17px;
        height: 17px;
        cursor: pointer;
        margin-left: 557px;
        margin-bottom: 31px;
      .gift_code
        overflow: hidden;
        padding-left: 251px;
        padding-bottom: 18px;
        div
          width: 259px;
          height: 28px;
          float: left;
          margin-right: 3px;
          font-size: 12px;
          line-height: 28px;
          text-align: center;
        .cope
          width: 60px;
          height: 28px;
          font-size: 12px;
          line-height: 28px;
          text-align: center;
          color: #fff;
          float: left;
          background: none;
          border: none;

      .get_gift
        width: 135px;
        height: 38px;
        background: #ff7527;
        border: 1px solid #ee5600;
        font-size: 18px;
        color: #fff;
        text-align: center;
        line-height: 38px;
        margin-left: 352px;
        margin-bottom: 17px;
      h6
        font-size: 16px;
        font-weight: normal;
        color: #ff7527;
        line-height: 34px;
        padding-top: 5px;
        margin-left: 253px;
        margin-top: 0;
        margin-bottom: 0;
      p
        margin-left: 253px;
        color: #424242;
        font-size: 12px;
        line-height: 20px;
        width: 320px;
      .arrows
        width: 48px;
        height: 48px;
        background: url(../../../static/img/arrows.png);
        background-size: 48px auto;
        margin: auto;
        -webkit-animation: myfirst 1s infinite;
        animation: myfirst 1s infinite;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
</style>

<template>
  <div class="pay">
    <div class="pay-box">
      <h5 class="navigation">您当前位置：首页><span>充值</span></h5>
      <div class="pay-content">
        <a class="produce-logo">
          <img src="" alt="">
          <p>勇者萌将传</p>
        </a>
        <dl>
          <dt>选择游戏系统：</dt>
          <dd class="os">
            <div class="Android" v-bind:class="{cur:os=='Android'}" @click="checkBox('Android','os')">Android <i></i></div>
            <div class="iOS" v-bind:class="{cur:os=='iOS'}" @click="checkBox('iOS','os')">iOS<i></i></div>
          </dd>
        </dl>
        <dl>
          <dt>选择游戏服务器：</dt>
          <dd class="selec">
            <div class="select" @click="game_select = game_select==true?false:true">
              <p>{{server}}</p>
            </div>
          </dd>
        </dl>
        <ul class="select-box" v-if="game_select" >
          <li @click="game_select = false;server = i" v-for="i in serverList">{{i}}</li>
        </ul>
        <dl class="player-id">
          <dt>输入游戏ID：</dt>
          <dd><input type="text"></dd>
        </dl>
        <dl>
          <dt>选择充值产品：</dt>
          <dd class="selec">
            <div class="select" @click="produce_select = produce_select==true?false:true">
              <p>{{produce}}</p>
            </div>
          </dd>
        </dl>
        <ul class="select-box select-produce" v-if="produce_select" >
          <li @click="produce_select = false;produce = i" v-for="i in produceList">{{i}}</li>
        </ul>
        <dl>
          <dt>电子邮箱：</dt>
          <dd><input type="text"></dd>
        </dl>
        <dl>
          <dt>应付金额：</dt>
          <dd>6元</dd>
        </dl>
        <button class="btn-pay">确认支付</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'pay',
  components:{
  },
  data () {
    return {
      game_select:false,
      produce_select:false,
      os:'Android',
      server:'逐鹿中原1',
      serverList:['逐鹿中原1','逐鹿中原2','逐鹿中原3','逐鹿中原4','逐鹿中原5',],
      produce:'10砖石',
      produceList:['10砖石','20砖石','50砖石','100砖石','500砖石',]
    }
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .pay
    background #e6e6e5
    padding-bottom 53px
    .pay-box
      width 1199px
      margin 0 auto
      .navigation
        padding-bottom 16px
        font-weight normal
        color #797979
        font-size 16px
        line-height 16px
        padding-top 10px
        span
          color #a22423
      .pay-content
        position relative
        background #fff
        padding-bottom 100px
        dl
          padding-top 30px
          line-height 31px
          overflow hidden
          input
            width 175px
            height 29px
            background #e5e5e5
            border 1px solid #a2a2a2
            display border
            text-align center
            font-size 18px
            color #a2a2a2
          dt
            float left
            font-size 20px
            color #797979
            width 180px
            text-align right
            margin-right 33px
            letter-spacing -1px
            font-family SimHei
          .os
            div
              float left
              margin-right 42px
              width 175px
              height 29px
              border 1px solid #a2a2a2
              background #e5e5e5
              text-align center
              cursor pointer
              i
                display inline-block
                width 18px
                height 21px
                background: url(../../../static/img/myicon.png) no-repeat;
                margin-bottom -5px
                margin-left 10px
            .Android
              i
                background-position -47px -158px
            .iOS
              i
                background-position -47px -181px
            .cur
              margin-top -1px
              color #a22423
              border 2px solid #a22423
              i
                background-position-x -75px
          .selec
            .select
              float left
              width 175px
              height 29px
              background #a22423
              border 1px solid #a2a2a2
              position relative
              cursor pointer
              p
                width 142px
                height 100%
                text-align center
                font-size 18px
                color #fff
                line-height 29px
                border-right 1px solid #a2a2a2
              &:after
                content ''
                position absolute
                display block
                border-top 12px solid #fff
                border-left 11px solid transparent
                border-right  11px solid transparent
                top 9px
                right 5px

        .player-id
          padding-bottom 95px
        .btn-pay
          width 175px
          height 45px
          border none
          background #a22423
          color #fff
          font-size 20px
          display block
          margin 25px 0 0 200px
        .select-box
          position absolute
          width 568px
          background #e5e5e5
          left 212px
          li
            width 142px
            float left
            text-align center
            height 29px
            line-height 29px
            cursor pointer
            &:hover
              background #a22423
              color #fff
        .select-produce
          top 343px
        .produce-logo
          display block
          position absolute
          right 200px
          top 43px
          img
            background red
            height 74px
            width 171px
            margin-bottom 8px
            display block
          p
            font-size 15px
            text-align center
            color #000





</style>

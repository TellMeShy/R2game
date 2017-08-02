<template>
  <div class="record">
    <h5>查询记录</h5>
    <div class="lan_Neirong">
      <div class="chaxunBar">

        <!--查询菜单 区Start-->
        <div class="Menu_box">
          <ul class="Menu_cxzu">
            <li><a v-bind:class="{on:menucheck==1}" @click="checkBox(1,'menucheck')">充值记录</a></li>

            <li><a v-bind:class="{on:menucheck==2}" @click="checkBox(2,'menucheck')">礼包记录</a></li>
            <li><a v-bind:class="{on:menucheck==3}" @click="checkBox(3,'menucheck')">积分记录</a></li>
          </ul>
        </div>
        <!--查询菜单 区End-->

        <div class="cxbox" v-if="menucheck==1">
          <!--查询项 区开始-->
          <div class="chaxiangBox">
            <form id="exForm" action="" method="get">
              <p class="cx_srha"><span class="cx_sx">魔力币剩余：</span>
                <label name="textarea" class="in_ofcx" value="0">30</label>
                <a href="/paymentV2/default" class="btnsu t_a_small"><span class="zi">立即充值</span></a></p>
              <p class="cx_srha"><span class="cx_sx">查询日期：</span>
                <calendar-input @getValue="getValue1"></calendar-input>
                至
                <calendar-input @getValue="getValue2"></calendar-input>
                <a href="#" class="btnsu t_a_small" id="search"><span class="zi">查询</span></a> </p>
            </form>
          </div>
          <!--查询项区结束-->

          <!--表格 区开始-->
          <div class="JieguoQu">
            <div class="AccountListNone">
              <div class="nofind"></div>
            </div>
            <table border="0" cellspacing="0" cellpadding="0" class="shen_nrbiao">
              <tbody><tr>
                <th class="lie1">支付方式</th>
                <th class="lie2">充值游戏</th>
                <th class="lie3">服务区</th>
                <th class="lie4">充值时间</th>
                <th class="lie5">充值金额</th>
              </tr>
              </tbody></table>
            <div class="ListNone">
              <div class="nofind"></div>
            </div>
          </div>
          <!--表格区结束-->
          <div class="seapagenumQu">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import calendarInput from '../component/calendar-input.vue'
  export default {
  name: 'record',
  data () {
    return {
      menucheck:1,
      show: {   //是否显示组件
        type: Boolean,
        default: true
      },
    }
  },
  components:{
    calendarInput
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
    getValue1:function (evtValue) {
    },
    getValue2:function (evtValue) {
    }
  },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .record
    h5
      padding: 0px 0px 10px 0px;
      border-bottom: 3px solid #de4205;
      font-size: 18px;
      color: #de4205;
      font-weight: bold;
    .lan_Neirong
      padding: 30px 40px;
      background: #fff;
      border: 1px solid #e1e1e1;
      border-top: none;
      min-height: 450px;
      _height: 450px;
      font-size: 14px;
      ul
        position: relative;
        height: 34px;
        border-bottom: 1px solid #dcdcdc;
        width: 100%;
        li
          float: left;
          padding: 0px 10px 0px 0px;
          a
            display: inline-block;
            width: 100px;
            height: 33px;
            line-height: 33px;
            text-align: center;
            color: #353535;
            border: 1px solid #dcdcdc;
            text-decoration: none;
            cursor pointer
            &:hover
              background #E56539
              color #fff
          .on
            background #E56539
            color #fff


      .cxbox
        .chaxiangBox
          padding: 20px 0px 10px 0px;
          .cx_srha
            padding: 8px 0px 8px 0px;
            .cx_sx
              display: inline-block;
              width: 105px;
              text-align: right;
              color: #7f7f7f;
            .in_ofcx
              padding: 1px 5px;
              vertical-align: middle;
              width: 110px;
              margin: 0 5px;
              border: 1px solid #dbdbdb;
              line-height 23px
          .btnsu
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
            text-decoration: none;
            .zi
              width: 76px;
              height: 25px;
              line-height: 25px;
              color: #fff;
              background-position: 0 0;
              display: inline-block;
              padding: 0 0px;
              font-size: 12px;
              vertical-align: top;
              text-align: center;
              background: url(../../../static/img/personage/sprite_user_btn.png)no-repeat;
              overflow: hidden;
              cursor: pointer;
        .JieguoQu
          margin-top -3px
          padding: 0px 0px 10px 0px;
          .nofind
            width 281px
            height 65px
            background url("../../../static/img/personage/accountlistnone.jpg")
          .shen_nrbiao
            width: 100%;
            margin: 0px 0;
            border-top: 1px solid #ffc8b5;
            border-left: 1px solid #ffc8b5;
            th
              font-weight: bold;
              padding: 6px 4px;
              border-bottom: 1px solid #fbdece;
              border-right: 1px solid #fbdece;
              background: #ffd4c5;
              text-align: center;
              color: #333436;
          .ListNone
            .nofind
              margin 20px auto
</style>

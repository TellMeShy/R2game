<template>
  <div class="Vgroup">
    <div class="m-borBox m-leftGroup cd">
      <a class="u-icon1"><i></i>海外平台</a>
      <a class="u-icon2"><i></i>客服服务<span class="phone">0755-86700316</span></a>
      <a class="u-icon3"><i></i>美女游戏</a>
      <a class="u-icon4"><i></i>新浪微博</a>
      <a class="u-icon5"><i></i>腾讯微博</a>

      <div class="wx">
        <a class="u-icon6"><i></i>关注微信</a>
        <dl class="ewm">
          <dt><img src="" alt=""></dt>
        </dl>
      </div>
      <a class="u-icon7"><i></i>未成年人家长监护工程</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vgroup',
  data () {
    return {}
  },
  methods:{
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .m-leftGroup
    overflow hidden
    font-size: 13px;
    margin-bottom: 0;
    border: 1px solid #cdd6e4;
    margin-top: 60px;
    background: #fff;
    a
      float: left;
      height: 69px;
      overflow: hidden;
      border: 1px solid #dedee3;
      border-width: 1px 0 0 1px;
      margin: -1px 0 0 -1px;
      width: 154px;
      line-height: 69px;
      color: #7d7d7d;
      .phone
        color: #de4205;
        font-size: 5px;
        display: block;
      i
        background: url(../../../static/img/icon.png) no-repeat;
        width: 28px;
        height: 38px;
        display: block;
        float: left;
        margin: 19px 11px 22px 19px;
        transition .5s all
      &:hover
        background #eee
      &:hover i
        transform rotateY(360deg)
    .u-icon1
      i
        background-position: 0 -55px;
    .u-icon2
      i
        background-position: -28px -55px;
    .u-icon3
      i
        background-position: -55px -55px;
    .u-icon4
      i
        background-position: -82px -55px;
    .u-icon5
      i
        background-position: -110px -55px;
    .u-icon6
      i
        background-position: -138px -55px;
    .u-icon7
      display: block;
      float: left;
      height: 69px;
      overflow: hidden;
      border: 1px solid #dedee3;
      border-width: 1px 0 0 1px;
      margin: -1px 0 0 -1px;
      width: 100%;
      line-height: 69px;
      color: #7d7d7d;
      i
        background-position: -166px -55px
        margin-left: 60px;

</style>

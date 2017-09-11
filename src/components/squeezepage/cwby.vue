<template>
  <div class="xwby">
    <div class="xwby-content">
      <h1>茶苑捕鱼</h1>
      <h5>捕鱼乐无穷，欢喜赚翻天</h5>
      <a href="" class="btn">安卓下载</a>
      <a href="" class="btn ios">ios下载</a>
      <a href="" class="gift">点击领奖</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'xwby',
  data () {
    return {

    }
  },
  components:{

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .xwby
    background url("../../../static/img/squeezepage/cwby/cwby.jpg") center 0 no-repeat
    min-width 1199px
    height 950px
    .xwby-content
      width 1199px
      position relative
      margin 0 auto
      h1
        text-indent -9999px
      h5
        text-indent -9999px
        border none
      a
        position absolute
        text-indent -9999px
      .btn
        position: absolute;
        top: 671px;
        left: 343px;
        width: 202px;
        height: 60px;
      .ios
        top: 738px;
      .gift
        position: absolute;
        border-radius: 43px;
        top: 671px;
        left: 570px;
        width 297px
        height 120px

</style>

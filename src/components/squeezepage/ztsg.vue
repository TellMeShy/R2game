<template>
  <div class="ztsg">
    <h1>正统三国</h1>
    <h5>群雄争霸一统天下</h5>
    <div class="content">
      <img src="http://r2cdn-cnp.r2games.com.cn/squeezepage/ztsg/ztsg.png" alt="正统三国">
      <div class="button">
        <a href="http://r2cdn-cnp.r2games.com.cn/apk/ztsg/1.3.4.2.apk"><button class="Android">安卓下载</button></a>
        <button class="Ios" onclick="alert('敬请期待')">苹果下载</button>
      </div>
      <button class="gift" onclick="alert('敬请期待')">点我领奖</button>
    </div>
    <a class="down down1"></a>
    <a class="down down2"></a>
  </div>
</template>

<script>

export default {
  name: 'ztsg',
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
  .ztsg
    background: url("../../../static/img/squeezepage/ztsg/LP.jpg") center 0 no-repeat;
    height:308px;
    margin:0;
    padding-top:642px
    h1
      position: absolute;
      left: -2000px;
    h5
      position: absolute;
      left: -2000px;
      border none
    a
      text-decoration: none;
    .content
      width: 514px;height: 162px;
      margin: 0 auto 0;
      transform: translateX(60px);
    img
      float: left;
      margin-top: 11px;
      height: 150px;
      width: 150px;
      margin-right: 25px;
    button
      outline: none;
      cursor: pointer;
    .button{
      float: left;
      width: 201px;
    }
    .button button{
      width: 201px;
      height: 58px;
      display: block;
      background: none;
      color: rgba(0,0,0,0);
      border: none;
    }
    .Android{
      margin-top: 24px;
    }
    .Ios{
      margin-top: 9px;
    }
    .gift{
      border: none;
      float: left;
      display: block;
      background: none;
      color: rgba(0,0,0,0);
      height: 100px;
      width: 100px;
      border-radius: 50px;
      margin-left: 29px;
      margin-top: 52px;
    }
    .down{
      display: none;
    }
</style>

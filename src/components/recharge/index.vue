<template>
  <div class="recharge1">
    <Vswipe></Vswipe>
    <div class="recharge-content">
      <h1 class="recharge-title">充值产品</h1>
      <div class="produce-select">
        <a href="" class="produce"></a>
        <a href="" class="produce"></a>
        <a href="" class="produce"></a>
        <a href="" class="produce"></a>
        <a href="" class="produce"></a>
        <a href="" class="produce"></a>
        <a href="" class="produce"></a>
        <a href="" class="produce"></a>
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
  .recharge1
    .recharge-content
      width 1199px
      margin 0 auto
      padding-top 45px
      padding-bottom  200px
      .recharge-title
        font-family SimHei
        line-height 54px
        background #e0dede
        font-size 28px
        color #a22423
        padding-left 15px
        font-weight normal
        margin-bottom 19px
        height 54px
      .produce-select
        overflow hidden
        border-bottom  1px solid #898989
        .produce
          width 299px
          float left
          height 180px
          border-left 1px solid #898989
          border-top 1px solid #898989
          box-sizing border-box
        .produce:nth-child(4n)
          border-right 1px solid #898989





</style>

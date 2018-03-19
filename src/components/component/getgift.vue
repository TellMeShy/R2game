<template>
  <div class="Vgift" v-if="giftdata">
    <div>
      <h5>魔力礼包<div @click="closecheck">×</div></h5>
      <div class="Valert-content">
        <div>
          <ul>
            <li v-for=""></li>
          </ul>
        </div>
        <button @click="closecheck">确认</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name:'Vagreement',
    data () {
      return {
        newgiftdata:this.giftdata
      }
    },
    props:['giftdata'],
    methods: {
        closecheck : function () {
          this.newgiftdata = ''
        }
    },
    created:function () {
      console.log(this.giftdata);
    },
    watch:{
      giftdata(val){
         this.newgiftdata =  val
      },
      newgiftdata(val){
        this.$emit("on-gift-change",val);
      }
    }
  }
</script>
<style lang="stylus">
  .Vgift
    z-index 150
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    position fixed
    top 0px
    left 0px
    >div
      border 1px solid #de3f05
      position absolute
      margin auto
      left 0px
      right 0px
      top 0px
      bottom 0px
      width 800px
      background #de3f05
      border-radius 5px 5px 0 0
      height 648px
      h5
        height 50px
        background url("../../../static/img/myicon.png") no-repeat 26px 0px
        font-size 24px
        line-height 50px
        text-align center
        font-weight normal
        color #fff
        padding 0
        position relative
        div
          cursor pointer
          font-size 28px
          line-height 28px
          margin-right 22px
          margin-top 9px
          position absolute
          right  0px
          top 0px
      >div
        background #ffffff
        overflow hidden
        width 100%
        box-sizing border-box
        padding 20px 30px 0 30px
        >div
          border 1px solid rgba(0,0,0,.3)
          /*background #eee*/
          height 500px
          overflow scroll
          padding 0 10px 0 10px
        button
          display block
          margin 20px auto 23px
          width 125px
          background #ff7527
          color #fff
          font-size 17px
          border 1px solid #ee5600
          height 33px

</style>

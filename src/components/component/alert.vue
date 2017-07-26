<template>
  <div class="Valert" v-if="newMassage">
    <div>
      <h5>信息提示<div @click="check">×</div></h5>
      <div class="Valert-content">
        <p><i></i>{{newMassage}}</p>
        <button @click="check">确认</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name:'Valert',
    data () {
      return {
        newMassage:this.massage
      }
    },
    props:['massage'],
    methods: {
      check:function () {
        this.newMassage = ''
      },
    },
    watch:{

      massage(val) {
        this.newMassage = val;//新增result的watch，监听变更并同步到myResult上
      },
      newMassage(val){
        //xxcanghai 小小沧海 博客园
        this.$emit("on-massage-change",val);//③组件内对myResult变更后向外部发送事件通知
      }
    }
  }
</script>
<style lang="stylus">
  .Valert
    z-index 150
    width 100%
    height 100%
    background rgba(0,0,0,.5)
    position fixed
    top 0px
    left 0px
    >div
      border 1px solid #de3f05
      margin 200px auto
      width 408px
      background #de3f05
      border-radius 5px 5px 0 0
      h5
        height 50px
        background url("../../../static/img/myicon.png") no-repeat 26px 0px
        font-size 24px
        line-height 50px
        text-align center
        font-weight normal
        color #fff
        padding 0
        div
          cursor pointer
          float right
          font-size 28px
          line-height 28px
          margin-right 22px
          margin-top 9px
      >div
        background #ffffff
        overflow hidden
        width 100%
        p
          line-height 30px
          box-sizing border-box
          padding-top 36px
          padding-bottom 34px
          i
            float left
            width 30px
            margin-left 114px
            margin-right 12px
            background url("../../../static/img/myicon.png") no-repeat
            background-position -156px  -61px
            height 30px
        button
          display block
          margin 0 auto 23px
          width 125px
          background #ff7527
          color #fff
          font-size 17px
          border 1px solid #ee5600
          height 33px

</style>

<template>
  <div class="Vswipe">
    <div class="swip_box" v-bind:style="{transform :'translateX('+page*-1920+'px)',width:(banner.length*100)+'%'}">
      <div v-for="(i,index) in banner"  :style="{width:(100/banner.length)+'%'}">
        <a :href="i.link" target="_blank"><img :src="i.pic" :alt="i.title"></a>
      </div>
    </div>
    <div class="pagebtn">
      <span @click="toPage(i.index)" v-bind:class="{cur:page==i.index}" v-for="(i,index) in banner"></span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        page: 0,
        banner:'',
        interval:''
      }
    },
    created:function () {
      this.$http.get(weUrl+'?ac=getFlag')
        .then(function(data){
          if(data.body.state==true){
            this.banner = data.body.data
            var _self = this
            this.interval=setInterval(function () {
              if(_self.page==_self.banner.length-1){
                _self.page=0
                return
              }
              _self.page++
            },3000)
          }else {
            alert(data.body.message)
          }
        },function(response){

        })
    },
    methods: {
      toPage:function (a) {
        this.page=a
      }
    }
  }
</script>
<style lang="stylus">
  .Vswipe
    width 100%
    overflow hidden
    position relative
    .pagebtn
      position absolute
      bottom 20px
      margin auto
      left 0
      right 0
      width 150px
      color rgba(255,255,255,.6)
      line-height 20px
      text-align center
      span
        float left
        height 20px
        width 20px
        border-radius 10px
        background #fbfbfb
        margin auto 5px
        cursor pointer
      .cur
        background #de4205
    .swip_box
      transition .5s all
      overflow hidden
      min-height 450px
      div
        float left

</style>

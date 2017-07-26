<template>
  <div class="detail" v-html="detail">

  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      detail:''
    }
  },
  created:function () {
    var str=location.href
    str = weUrl+'content/'+str.split('%2Fcontent%2F')[1]
    this.$http.get(str)
      .then(function(data){
        var basic = data.body
        this.detail=basic
      },function(response){

      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
 .detail
    h4
      font-size 23px
      color #424242
      text-align center
      padding-bottom 25px
      border-bottom 1px solid #dbdbdb
    >p
      text-align center
      font-size 12px
      color #949494
      padding-bottom 26px
      padding-top 16px
    div
      font-size 14px
      color #424242
      line-height 24px


</style>

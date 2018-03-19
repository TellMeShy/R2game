<template>
  <div class="recharge">
    <router-view></router-view>
  </div>

</template>

<script>
  import Vswipe from './component/swipe.vue'
export default {
  name: 'recharge',
  components:{
    Vswipe
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


</style>

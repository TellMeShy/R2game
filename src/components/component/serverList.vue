<template>
  <div class="VserverList">
    <div class="s-list">
      <ul class="u-serverNav">
        <li v-bind:class="{cur:hover==1}" @mouseenter="hoverBox(1,'hover')">开服列表</li>
        <li v-bind:class="{cur:hover==2}" @mouseenter="hoverBox(2,'hover')">新服预告</li>
      </ul>
      <div class="u-serverLst">
        <ul v-if="hover==1">
          <li v-for="i in serverlist">
            <a class="name">{{i.gameName}}</a>
            <p class="server">
              <a target="_blank">{{i.servername}}</a>
              <em>{{i.open_time}}</em>
            </p>
            <a class="o-btn" :href="i.link">进入&gt;</a>
          </li>
        </ul>
        <ul v-if="hover==2">
          <li v-for="i in newserverlist">
            <a class="name">{{i.gameName}}</a>
            <p class="server">
              <a href="" target="_blank">({{i.servernum}}){{i.servername}}</a>
              <em>{{i.open_time}}</em>
            </p>
            <a class="o-btn" :href="i.link">进入&gt;</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'VserverList',
  data () {
    return {
      hover:1,
      serverlist:'',
      newserverlist:''


    }
  },
  created:function () {
    this.$http.get(weUrl+'?ac=getServerlist',{params:{list:5,type:1}})
      .then(function(data){
        this.serverlist=data.body.data
      },function(response){

      })
    this.$http.get(weUrl+'?ac=getServerlist',{params:{list:5,type:2}})
      .then(function(data){
        this.newserverlist=data.body.data
      },function(response){

      })
  },
  methods:{
    hoverBox: function () {
      var data=this;
      for (var n=1;n<=arguments.length;n++){
        if(arguments.length-n>1){
          data=data[arguments[n]]
        }else {
          data[arguments[n]]=arguments[0]
        }
      }
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .VserverList
    .s-list
      border: 1px solid #cdd6e4;
      background: #fff;
      .u-serverNav
        margin: -1px 0 0 -1px;
        font-size: 18px;
        line-height: 53px;
        text-align: center;
        overflow hidden
        li
          float: left;
          width: 153.5px;
          border: 1px solid #dbdbdb;
          border-width: 1px 0 0 1px;
          cursor: pointer;
          color: #454545;
        .cur
          background: linear-gradient(#f6caba,#fff);
          color: #000;
          border-top-color: #de4205;

      .u-serverLst
        padding: 5px 17px;
        height: 284px;
        overflow: hidden;
        ul
          li
            height: 54px;
            border-bottom: 1px solid #d2d3da;
            padding: 0 8px;
            .name
              display: inline-block;
              line-height: 54px;
              font-weight: bold;
              width: 85px;
              float: left;
              cursor pointer
              &:hover
                color #de4205
            .server
              float: left;
              display: inline-block;
              padding: 10px 4px 0;
              line-height: 18px;
              width: 105px;
              a
                display: block;
                color: #000;
                font-size: 13px;
                &:hover
                  color #de4205
              em
                font-style normal
      .o-btn
        display: inline-block;
        border: 1px solid #de4205;
        border-radius: 1px;
        text-align: center;
        width: 57px;
        height: 24px;
        cursor pointer
        color: #de4205;
        margin-top: 15px;
        line-height: 24px;
        &:hover
          background #de4205
          color #fff
</style>

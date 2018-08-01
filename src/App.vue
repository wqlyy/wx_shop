<template>
  <div id="app" style="height:100%;">
    <view-box>
      <router-view/>
      <TabBar slot="bottom"/>
    </view-box>

  </div>
</template>

<script>
  import {ViewBox} from 'vux'
  import TabBar from '@/components/TabBar'
  export default {
    name: 'app',
    components:{
      ViewBox,
      TabBar
    },
    created(){
      let styleNode = document.createElement('style');
      let scale = document.documentElement.clientWidth/16;
      styleNode.innerHTML = 'html{font-size:'+scale+'px!important;}';
      document.head.appendChild(styleNode);
    }
  }
</script>

<style lang="less">
  @import "assets/styles/custom";
</style>

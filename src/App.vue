<template>
  <div id="app" style="height:100%;">
      <router-view/>
      <TabBar />
  </div>
</template>

<script>
  import TabBar from '@/components/TabBar'
  export default {
    name: 'app',
    components:{
      TabBar
    },
    created(){
      let styleNode = document.createElement('style');
      let scale = document.documentElement.clientWidth/10;
      styleNode.innerHTML = 'html{font-size:'+scale+'px!important;}';
      document.head.appendChild(styleNode);
    },

  }
</script>

<style lang="less">
  @import "assets/styles/custom";
</style>

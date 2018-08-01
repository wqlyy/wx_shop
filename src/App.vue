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
    }
  }
</script>

<style lang="less">
  @import "assets/styles/custom";
</style>

<template>
  <div class="cart-page">
    <view-box>
      <x-header slot="header" title="我的订单"/>

    </view-box>
  </div>
</template>

<script>
  import {ViewBox,XHeader,Flexbox, FlexboxItem } from 'vux'
  export default {
    name: "order",
    components:{
      ViewBox,
      XHeader,
      Flexbox,
      FlexboxItem
    },
    data(){
      return {

      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/mixin";
  .cart-page{
    height: 100%;

  }
</style>
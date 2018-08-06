<template>
  <div class="cart-page">
    <view-box>
      <div>所有订单列表</div>
      <div>根据具体业务需求做展示</div>
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
    created(){
      document.title = '我的订单'
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
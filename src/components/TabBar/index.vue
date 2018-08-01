<template>
  <tabbar>
    <tabbar-item link="home" :selected="$route.name==='Home'">
      <i slot="icon" class="icon">&#xe626;</i>
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="category" :selected="$route.name==='Category'">
      <i slot="icon" class="icon">&#xe7f9;</i>
      <span slot="label">列表</span>
    </tabbar-item>
    <tabbar-item link="cart" :selected="$route.name==='Cart'">
      <i slot="icon" class="icon">&#xe656;</i>
      <span slot="label">清单</span>
    </tabbar-item>
    <tabbar-item link="user" :selected="$route.name==='User'">
      <i slot="icon" class="icon">&#xe671;</i>
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import {Tabbar, TabbarItem} from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped lang="less">
  .weui-tabbar__icon {
    & > i {
      font-size: 20px;
      color: #999999;
    }
  }
</style>
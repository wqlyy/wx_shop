<template>
  <div class="home">
    <!--轮播图-->
    <swiper :list="banner_list"/>
    <!--九宫格-->
    <flexbox :gutter="0" wrap="wrap" class="menu-container">
      <flexbox-item class="item vux-1px" :span="1/4">
        <div class="content">
          <i class="icon icon-menu">&#xe611;</i>
          <p>兑换排行</p>
        </div>
      </flexbox-item>
      <flexbox-item class="item vux-1px" :span="1/4">
        <div class="content">
          <i class="icon icon-menu">&#xe611;</i>
          <p>兑换排行</p>
        </div>
      </flexbox-item>
      <flexbox-item class="item vux-1px" :span="1/4">
        <div class="content">
          <i class="icon icon-menu">&#xe611;</i>
          <p>兑换排行</p>
        </div>
      </flexbox-item>
      <flexbox-item class="item vux-1px" :span="1/4">
        <div class="content">
          <i class="icon icon-menu">&#xe611;</i>
          <p>兑换排行</p>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {Swiper,Flexbox, FlexboxItem} from 'vux';
  import Axios from 'axios'
  export default {
    name: "home",
    components:{
      Swiper,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        banner_list:[]
      }
    },
    created(){
      this.getBannerList();
    },
    methods: {
      getBannerList() {
        Axios.get('banner_list.json').then((response) => {
          let result = response.data;
          if(result.retcode===1){
            this.banner_list = result.data
          }
          console.log(response.data);
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .menu-container{
    .item{
      /*background-color: pink;*/
      .content{
        text-align: center;
        .icon-menu{
          font-size: 30px;
        }
      }
    }
  }
</style>
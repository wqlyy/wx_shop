<template>
  <div class="home">
    <!--轮播图-->
    <swiper :list="banner_list"/>
    <!--九宫格-->
    <flexbox :gutter="0" wrap="wrap" class="menu-container">
      <flexbox-item class="item" :span="1/4">
        <div class="content">
          <div class="menu_icon">
            <img src="../assets/images/01.png" alt="">
          </div>
          <p>兑换排行</p>
        </div>
      </flexbox-item>
      <flexbox-item class="item" :span="1/4">
        <div class="content">
          <div class="menu_icon">
            <img src="../assets/images/02.png" alt="">
          </div>
          <p>兑换排行</p>
        </div>
      </flexbox-item>
      <flexbox-item class="item" :span="1/4">
        <div class="content">
          <div class="menu_icon">
            <img src="../assets/images/03.png" alt="">
          </div>
          <p>兑换排行</p>
        </div>
      </flexbox-item>
      <flexbox-item class="item" :span="1/4">
          <div class="content">
            <div class="menu_icon">
              <img src="../assets/images/04.png" alt="">
            </div>
            <p>兑换排行</p>
          </div>
      </flexbox-item>
    </flexbox>
    <!--推荐-->
    <div class="recommend-container">
      <Title title="测试"/>
      <flexbox :gutter="0" >
        <flexbox-item class="left" :span="2/5">
          <div class="content">
              <img src="../assets/images/01.jpg" alt="">
          </div>
        </flexbox-item>
        <flexbox-item class="right" :span="3/5">
          <div class="content">
            <div class="top">
              <img src="" alt="">
              <p></p>
            </div>
            <div class="bottom"></div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import {Swiper,Flexbox, FlexboxItem} from 'vux';
  import Axios from 'axios'

  import Title from '../components/Title'
  export default {
    name: "home",
    components:{
      Swiper,
      Flexbox,
      FlexboxItem,
      Title
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
  @import "../assets/styles/mixin";

  .menu-container{
    .item{
      .content{
        padding: 10px 15px;
        text-align: center;
        .menu_icon{
          width: 114/@rem;
          margin: 0 auto;
          img{
            display: block;
            width: 100%;
          }
        }
        p{
          font-size: 18/@rem;
          margin-top: 10/@rem;
        }
      }
    }
  }
  .recommend-container{
    padding: 15/@rem 30/@rem;
    background-color: #fff;
    .left{
      .content{
        width: 335/@rem;
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>
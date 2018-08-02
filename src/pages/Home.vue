<template>
  <div class="home">
    <!--顶部搜索-->
    <SearchBar :isScroll="isScroll"/>
    <!--轮播图-->
    <swiper :auto="true" :loop="true" :list="banner_list" class="home-swiper"/>
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

    <!--换购-->
    <div class="party-container">
      <Title title="积分乐园"/>
      <div class="list">
        <div class="banner">
          <img src="https://res.mall.10010.cn/jf-mall/res/mobile/images/fourth/ad_01.png" />
        </div>

        <div class="other">
          <!-- 将请期待 -->
          <div class="item">
            <div class="img">
              <img src="https://res.mall.10010.cn/jf-mall/res/mobile/images/fourth/ad_jf_01.png"/>
            </div>
            <div class="txt">
              <div class="head">满减优惠</div>
              <div class="cont">价格更实惠</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="https://res.mall.10010.cn/jf-mall/res/mobile/images/fourth/ad_jf_02.png"/>
            </div>
            <div class="txt">
              <div class="head">折扣专区</div>
              <div class="cont">品质不打折</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--推荐-->
    <div class="recommend-container">
      <Title title="推荐"/>
      <RecommendList :recommend_list="recommend_list"/>
    </div>

    <Divider>我是有底线的</Divider>
  </div>
</template>

<script>
  import {Swiper, Flexbox, FlexboxItem,Divider} from 'vux';
  import Axios from 'axios'

  import Title from '../components/Title'
  import RecommendList from './RecommendList'
  import SearchBar from '../components/SearchBar'

  export default {
    name: "home",
    components: {
      Swiper,
      Divider,
      Flexbox,
      FlexboxItem,
      Title,
      RecommendList,
      SearchBar
    },
    data() {
      return {
        banner_list: [],
        recommend_list: []
      }
    },
    created() {
      this.getBannerList();
      this.getRecommendList();
    },
    methods: {
      getBannerList() {
        Axios.get('banner_list.json').then((response) => {
          let result = response.data;
          if (result.retcode === 1) {
            this.banner_list = result.data
          }
        }, (err) => {
          console.log(err);
        })
      },
      getRecommendList() {
        Axios.get('recommend.json').then((response) => {
          let result = response.data;
          if (result.retcode === 1) {
            this.recommend_list = result.data;
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/mixin";
  .home{
    font-size: 0;
    .vux-divider{
      font-size: 14px;
    }
    .menu-container {
      .item {
        .content {
          padding: 10px 15px;
          text-align: center;
          .menu_icon {
            width: 114/@rem;
            margin: 0 auto;
            img {
              display: block;
              width: 100%;
            }
          }
          p {
            font-size: 18/@rem;
            margin-top: 10/@rem;
          }
        }
      }
    }

    .recommend-container {
      background-color: #fff;
    }
    .party-container{
      background-color: #fff;
      max-width: 10rem;
      box-sizing: border-box;
      margin: 0 auto;
      margin-bottom: 15/@rem;

      overflow: hidden;
     .list {
       padding: 0 24/@rem;
       .banner {
         width: 700/@rem;
         height: 220/@rem;
         border-radius: .1rem;
         overflow: hidden;
         img{
           width: 100%;
           display: block;
         }
       }
       .other {
         display: -webkit-box;
         display: flex;
         -webkit-box-pack: justify;
         justify-content: space-between;
         height: 150/@rem;
         padding: 20/@rem 0;
         .item {
           width: 330/@rem;
           height: 150/@rem;
           display: -webkit-box;
           display: flex;
           -webkit-box-pack: center;
           justify-content: center;
           -webkit-box-align: center;
           align-items: center;
           background-color: #f7f7f7;
           border-radius: 10/@rem;
           .img{
             width: 100/@rem;
             vertical-align: middle;
             img{
               width: 100%;
               display: block;

             }
           }
           .txt {
             vertical-align: middle;
             width: 140/@rem;
             height: 100/@rem;
             padding-left: 20/@rem;
             font-size: 24/@rem;
           }
         }

       }
     }
    }
  }

</style>
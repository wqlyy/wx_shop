<template>
  <div class="detail-page" style="height: 100%;">
    <view-box body-padding-bottom="50">
      <div class="detail-box">
        <div class="preview">
          <swiper :show-desc-mask="false" :show-dots="false" :list="list"></swiper>
        </div>
        <div class="abstract">
          <p class="title nowrap-multi">
            商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介商品简介
          </p>
          <div class="delivery">
            <p class="delivery-left">
              <span class="money"><i class="icon" style="margin-right: 5px">&#xe658;</i>9999积分</span>
            </p>
            <p class="delivery-right">
              天府新区支行
            </p>
          </div>
        </div>
        <Group class="intro">
          <h6 slot="title" class="title">商品介绍</h6>
          <div class="content" v-html="">
            <h4>商品ID:{{$route.params.id}},根据接口获取数据</h4>
            <p> 图文并茂的介绍图文并茂的介绍图文并茂的介绍图文并茂的介绍图文并茂的介绍
             图文并茂的介绍图文并茂的介绍图文并茂的介绍图文并茂的介绍图文并茂的介绍</p>
            <img src="https://img20.360buyimg.com/mcoss/jfs/t23728/50/902830340/59547/7b3dbfab/5b485727N6f602b78.png" alt="">
            <p>图文并茂的介绍图文并茂的介绍图文并茂的介绍图文并茂的介绍</p>
            <img src="https://img13.360buyimg.com/mcoss/jfs/t23251/236/1113140151/60832/6627cd22/5b517406N965d0b4a.jpg" alt="">
            <p>商品详细商品详细信息商品详细信息商品详细信息商品详细信息商品详细信息商品详细信息商品详细信息信息</p>
            <img src="https://m.360buyimg.com/babel/jfs/t23728/308/335035953/255128/561d4039/5b2c7e4aNbe42bec4.jpg" alt="">
            <p>图文并茂的介绍图文并茂的介绍图文并茂的介绍图文并茂的介绍</p>
          </div>
        </Group>
        <Divider>到底咯~~</Divider>
      </div>
      <div class="detail-footer" slot="bottom">
        <button class="buy-now" @click="addCartList($route.params.id)">立即兑换</button>
        <!--<div class="left" v-show="false">-->
          <!--<div class="store">-->
            <!--<i class="icon collection">&#xe628;</i>-->
            <!--<p>收藏</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="right">-->
          <!--<button class="add-cart">加入购物车</button>-->
          <!--<button class="buy-now" @click="addCartList($route.params.id)">立即兑换</button>-->
        <!--</div>-->
      </div>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox, XHeader, Swiper, Group,Divider} from 'vux'

  export default {
    name: "detail",
    components: {
      ViewBox,
      XHeader,
      Swiper,
      Group,
      Divider
    },
    data() {
      return {
        list: [
          {
            url: 'javascript:',
            img: 'http://p0.qhimg.com/t01ca793f68d025a256.jpg',
            title: '送你一朵fua'
          }, {
            url: 'javascript:',
            img: 'http://p0.qhimg.com/t014a9867ae0975a504.jpg',
            title: '送你一次旅行',
            fallbackImg: 'http://p0.qhimg.com/t014a9867ae0975a504.jpg'
          }
        ]
      }
    },
    created() {
      document.title='兑换商品详情'
      console.log('选择的产品id:', this.$route.params.id)
    },
    methods:{
      addCartList(id){
        console.log(id);
        this.$router.push({name:'Cart',params:{id:id}})
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/mixin";
  button{
    padding: 0;
    margin: 0;
    border: none;
    height: 50px;
    font-size: 16px;
    color:#ebebeb;
  }
  .buy-now{
    background: #e4393c;
    width: 100%;
    float: right;
  }
  .detail-page {
    height: 100%;
    font-size: 0;
    .detail-box {
      font-size: 16px;
      .abstract {
        padding: 10/@rem 20/@rem;
        box-sizing: border-box;
        .title {
          color: #333;
          font-size: 14px;
        }
        .delivery {
          height: 40px;
          .delivery-left {
            float: left;
            line-height: 40px;
            color: #e4393c;

          }
          .delivery-right {
            float: right;
            line-height: 40px;
            color: #666;
          }
        }
      }
      .intro {
        padding: 20/@rem 20/@rem;
        box-sizing: border-box;
        background-color: #fff;
        .title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }
        .content {
          padding: 10px 0;
          color: #666;
          p{
            font-size: 14px;
          }
          img{
            width: 100%;
          }
        }
      }
    }
    .detail-footer{
      z-index: 3;
      width: 100%;
      height: 50px;
      position: absolute;
      bottom: 0;
      border-top: 1px solid #ebebeb;
      background: #fff;
      .left{
        width: 40%;
        float: left;
        height: 50px;
        text-align: center;
        font-size: 0;
        margin: 0;
        border: none;
        p{
          font-size: 14px;
          line-height: 20px;
          color:#666;
        }
        img{
          width: 20px;
          height: 20px;
          display: inline-block;
          margin-top: 8px;
        }
        .store{
          width: 100%;
          float: right;
          height: 50px;
          .collection{
            font-size: 16px;
          }
        }
      }
      .right{
        float: right;
        width: 60%;
        height: 50px;
        font-size: 0;
        button{
          padding: 0;
          margin: 0;
          border: none;
          height: 50px;
          font-size: 14px;
          color:#ebebeb;
        }
        .add-cart{
          background: #0cf;
          width: 45%;
          float: left;
          outline: none;
        }
        .buy-now{
          background: #e4393c;
          width: 55%;
          float: right;
        }
      }
    }

  }
</style>

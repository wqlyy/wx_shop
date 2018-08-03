<template>
  <div class="detail-page" style="height: 100%;">
    <view-box>
      <x-header slot="header" title="兑换商品详情"/>
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
            <h4>商品ID:{{$route.params.id}}</h4>
            最后内容根据CRM系统生成
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A asperiores aut autem blanditiis culpa ea ex ipsa iste,
            iure natus, officiis, perspiciatis quas quo recusandae reiciendis sint
            sit velit veritatis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A asperiores aut autem blanditiis culpa ea ex ipsa iste,
            iure natus, officiis, perspiciatis quas quo recusandae reiciendis sint
            sit velit veritatis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            A asperiores aut autem blanditiis culpa ea ex ipsa iste,
            iure natus, officiis, perspiciatis quas quo recusandae reiciendis sint
            sit velit veritatis.
          </div>
        </Group>
        <div class="detail-footer" slot="bottom">
          <div class="left">
            <div class="store">
              <i class="icon collection">&#xe628;</i>
              <p>收藏</p>
            </div>
          </div>
          <div class="right">
            <button class="add-cart">加入清单</button>
            <button class="buy-now">立即兑换</button>
          </div>
        </div>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox, XHeader, Swiper, Group} from 'vux'

  export default {
    name: "detail",
    components: {
      ViewBox,
      XHeader,
      Swiper,
      Group
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
            fallbackImg: 'https://static.vux.li/demo/3.jpg'
          }
        ]
      }
    },
    created() {
      console.log('选择的产品id:', this.$route.params.id)
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/mixin";

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
        padding: 10/@rem 20/@rem;
        box-sizing: border-box;
        background-color: #fff;
        .title {
          font-size: 18px;
          color: #333;
        }
        .content {

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

  }
</style>
<template>
  <div class="cart-page">
    <view-box>
      <div class="container">
        <div class="product-img">
          <img src="//img11.360buyimg.com/n1/jfs/t25294/160/867337735/155510/6c755163/5b7f5d88Neb4693a0.jpg" alt="">
        </div>
        <form-preview header-label="消费积分" header-value="2400积分" :body-items="list"
                      :footer-buttons="buttons1"></form-preview>
        <div style="text-align: center">
          <divider>扫描下方二维码进行商品兑换</divider>
          <qrcode value="https://www.baidu.com" type="img"></qrcode>
        </div>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox, XHeader, Flexbox, FlexboxItem, FormPreview, Qrcode, Divider} from 'vux'

  export default {
    name: "submit",
    components: {
      ViewBox,
      XHeader,
      Flexbox,
      FlexboxItem,
      FormPreview,
      Qrcode,
      Divider
    }, data() {
      return {
        list: [{
          label: '商品名称',
          value: '电动打蛋机'
        }, {
          label: '商品描述',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }, {
          label: '兑换网点',
          value: '四川省成都市'
        }]
      }
    },
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/mixin";

  .cart-page {
    height: 100%;
    .container {
      padding-bottom: 50px;
      background-color: #fff;
      font-size: 18/@rem;
      .product-img {
        img {
          width: 100%;
          height: 500/@rem;
        }
      }
    }
  }
</style>

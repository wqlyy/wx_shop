<template>
  <div class="cart-page">
    <view-box>
      <div class="container">
        <flexbox orient="vertical" class="list-box">
          <flexbox-item class="item vux-1px-b" v-for="(item,index) in cartList" :key="index">
            <div class="content">
              <div class="left">
                <img :src="item.pic" />
              </div>
              <div class="right">
                <div class="intro">
                  <p class="nowrap-multi title">{{item.title}}</p>
                  <p class="jifen">
                    <span class="money">
                      <i class="icon" style="margin-right: 5px">&#xe658;</i>
                      {{item.money}}积分
                    </span>
                  </p>
                  <p class="selled">已有{{item.people}}人兑换成功</p>
                </div>
                <div v-if="item.isBuy" class="btn nopass">
                  <span>已兑</span>
                </div>
                <div v-else class="btn" @click="accountPage">
                  <span>兑换</span>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
        <div class="no-result" v-show="cartList.length<=0">
          <i class="icon icon-cart-empty">&#xe60c;</i>
          <p>什么都没有~~</p>
          <router-link to="/category" class="btn">
            挑选商品
          </router-link>
        </div>
      </div>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox,XHeader,Flexbox, FlexboxItem } from 'vux'
  export default {
    name: "cart",
    components:{
      ViewBox,
      XHeader,
      Flexbox,
      FlexboxItem
    },
    created(){
      document.title='购物车';
    },
    destroyed(){
      document.title='积分商城';
    },
    data(){
      return {
        cartList:[
          {
            id:1,
            pid:201,
            title:'伊利 安慕希希腊风味酸奶205g*4盒',
            pic:'https://m.360buyimg.com/babel/jfs/t19915/102/1633524488/505872/b2ec788c/5b598f59N00a835cd.jpg',
            money:1000,
            people:1241,
            isBuy:false
          },
          {
            id:2,
            pid:205,
            title:'馨语（xinyu） 20卷35卷48卷可选原生竹浆本色卷纸4层竹纤维本色纸卫生纸卷纸厕纸纸巾餐巾纸 20卷',
            pic:'https://m.360buyimg.com/babel/jfs/t23728/308/335035953/255128/561d4039/5b2c7e4aNbe42bec4.jpg',
            money:3500,
            people:121,
            isBuy:true
          }
        ],
      }
    },
    methods:{
      accountPage(){
        this.$router.push({ name: 'Order'})
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/mixin";
.cart-page{
  height: 100%;
  .container{
    height: 100%;
    background-color: #fff;
    .no-result{
      text-align: center;
      position: absolute;
      top:0;
      bottom: 0;
      left: 0;
      right: 0;
      transform: translateY(30%);
      .icon-cart-empty{
        font-size: 200/@rem;
        color: #999;
      }
      p{
        font-size: 16px;
        color: #333;
      }
      .btn{
        font-size: 18px;
        color: #fff;
        padding: 6px 20px;
        border-radius: 5px;
        background-color: #0cf;
      }
    }
    .list-box{
      font-size: 14px;
      max-width: 750/@rem;
      margin: 0 auto;
      .item{
        padding: 15/@rem 0;
        .content{
          box-sizing: border-box;
          padding: 10/@rem 20/@rem;
          overflow: hidden;
          .left{
            float: left;
            width: 220/@rem;
            height: 160/@rem;
            box-sizing: border-box;
            img{
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .right{
            float: right;
            width: 470/@rem;
            position: relative;
            .intro{
              position: absolute;
              left: 0;
              width: 75%;
              .title{
                color: #666;
                line-height: 1.3;
                margin-bottom: 20/@rem;
              }
              .jifen{
                color: #e4393c;
                font-size: 14/@rem;
                line-height: 1.2;
              }
              .selled{
                color: #999;
                font-size: 12px;
              }
            }
            .btn{
              position: absolute;
              right: 0;
              top:0;
              transform: translateY(50%);
              background-color: #00ccff;
              text-align: center;
              color: #fff;
              padding: 3px 10px;
              border-radius: 3px;
              &.nopass{
                background-color: #b8b8b8;
              }
            }
          }
        }
      }

    }
  }

}
</style>

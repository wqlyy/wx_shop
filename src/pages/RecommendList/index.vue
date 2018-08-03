<template>
  <div class="container" :style="{paddingTop:paddingTop+'px'}">
    <div class="item" v-for="(item,index) in list" @click="jumpDetail(item.productId)" :key="index">
      <div class="ui-block">
        <img class="img" :alt="item.title" :src="item.url">
        <div class="description">
          <h3 class="title nowrap">{{item.title}}</h3>
          <div class="price nowrap">
            <span><i class="icon icon-score">&#xe638;</i> {{item.money}}</span>
            <span class="sale">已有 {{item.people}} 人兑换</span>
          </div>
          <p class="shop"><i class="icon">&#xe603;</i><span class="address">{{item.address}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    props:{
      list:{
        type:Array,
        default:[]
      },
      paddingTop:0
    },
    created(){
    },
    methods:{
      jumpDetail(id){
        this.$router.push({ name: 'Detail', params: { id: id }})
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/styles/mixin";

  .container {
    max-width: 10rem;
    box-sizing: border-box;
    margin: 0 auto;
    margin-bottom: 15/@rem;
    padding: 0 24/@rem;
    overflow: hidden;
    .item {
      width: 4.6rem;
      margin-bottom: .26666667rem;
      text-align: center;
      font-size: 12px;
      background-color: #fff;
      overflow: hidden;
      &:nth-child(2n+1) {
        float: left;
      }
      &:nth-child(2n) {
        float: right;
      }
      .ui-block {
        box-sizing: border-box;
        display: block;
        width: 100%;
        overflow: hidden;
        border: 1px solid #e6e6e6;
        color: #333;
        .img {
          display: inline-block;
          width: 4.6rem;
          vertical-align: middle;
        }
        .description{
          margin: 0 10/@rem;
          padding-bottom: 5px;
          .title {
            font-size: 12px;
            text-align: left;
            font-weight: normal;
          }
          .price {
            font-size: 12px;
            color: #e4393c;
            text-align: left;
            .sale {
              float: right;
              text-align: left;
              color: #a6a6a6;
              font-size: 12px;
            }
          }
          .shop{
            text-align: left;
            color: #0cf;
            .address{
              margin-left: 6px;
              color: #333;
            }
          }

        }
      }
    }
  }
</style>
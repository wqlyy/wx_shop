<template>
  <div class="user-page">
    <!--<div class="advs">-->
      <!--<div class="user-bg">-->
        <!--<div class="user-head">-->
          <!--<img src="../assets/images/user-head.jpg" alt="">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="user-info">-->
        <!--<h4>用户名</h4>-->
        <!--<p>10000积分</p>-->
      <!--</div>-->
    <!--</div>-->
    <div class="top">
      <div class="cell">
        <span>10000</span>
        <p>我的积分</p>
      </div>
      <div class="cell">
        <div class="outer">
          <div class="inner">签到</div>
        </div>
      </div>
      <div class="cell">
        <span>3</span>
        <p>签到次数</p>
      </div>
    </div>
    <card>
      <div slot="content" class="card-flex">
        <div class="vux-1px-r">
          获得积分
        </div>
        <div>
          使用积分
        </div>
      </div>
    </card>
    <group gutter="0">
      <cell title="我兑换的礼品" is-link link="/order">
        <img slot="icon" class="user-icon" src="../assets/images/user-01.png" alt="">
      </cell>
      <cell title="积分兑换礼品" is-link link="/home">
        <img slot="icon" class="user-icon" src="../assets/images/user-02.png" alt="">
      </cell>
      <cell title="查看积分明细记录" is-link>
        <img slot="icon" class="user-icon" src="../assets/images/user-03.png" alt="">
      </cell>
    </group>
  </div>
</template>

<script>
  import {Cell, Group,Card } from 'vux'

  export default {
    name: "user",
    components: {
      Cell,
      Group,
      Card
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/mixin";
  @import '~vux/src/styles/1px.less';
  .weui-panel {
    background-color: #eeeeee;
    margin-top: 0;
  }
  .card-flex {
    display: flex;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .card-flex > div {
    flex: 1;
    text-align: center;
  }
  .card-flex {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .top{
    min-height: 200/@rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    .cell{
      flex: 1;
      text-align: center;
      span{
        color: #ff4f3b;
      }
      p{
        font-weight: 600;
      }
      .outer{
        background-color: #38aca9;
        width: 60px;
        height: 60px;
        margin: 0 auto;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .inner{
        background-color: #55c2b6;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        line-height: 50px;
        color: #fafafa;
      }
    }
  }
  .user-page {
    font-size: 14px;
    height: 100%;
    background-color: #fff;
    .advs {
      min-height: 466/@rem;
      width: 100%;
      background-color: #f0f0f0;
      .user-bg {
        background: url("../assets/images/user.jpg") no-repeat center center;
        background-size: 100% 100%;
        width: 750/@rem;
        height: 320/@rem;
        position: relative;
        .user-head {
          position: absolute;
          bottom: -30px;
          left: 50%;
          border-radius: 40px;
          margin-left: -40px;
          height: 80px;
          width: 80px;
          background-color: #f0f0f0;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }
      .user-info {
        margin-top: 40px;
        padding-bottom: 15px;
        width: 100%;
        text-align: center;
      }
    }
    .user-icon {
      width: 50/@rem;
      display: block;
      margin-right: 20/@rem;
    }
  }
</style>

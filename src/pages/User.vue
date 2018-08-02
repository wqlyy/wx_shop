<template>
  <div class="user-page">
    <div class="advs">
      <div class="user-bg">
        <div class="user-head">
          <img src="../assets/images/user-head.jpg" alt="">
        </div>
      </div>
      <div class="user-info">
        <h4>用户名</h4>
        <p>10000积分</p>
      </div>
    </div>
    <group gutter="0">
      <cell title="测试" is-link>
        <img slot="icon" class="user-icon" src="../assets/images/user-01.png" alt="">
      </cell>
      <cell title="测试" is-link>
        <img slot="icon" class="user-icon" src="../assets/images/user-02.png" alt="">
      </cell>
      <cell title="测试" is-link>
        <img slot="icon" class="user-icon" src="../assets/images/user-03.png" alt="">
      </cell>
      <cell title="测试" is-link>
        <img slot="icon" class="user-icon" src="../assets/images/user-04.png" alt="">
      </cell>
      <cell title="测试" is-link>
        <img slot="icon" class="user-icon" src="../assets/images/user-05.png" alt="">
      </cell>
    </group>
  </div>
</template>

<script>
  import {Cell, Group} from 'vux'

  export default {
    name: "user",
    components: {
      Cell,
      Group
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/styles/mixin";

  .user-page {
    font-size: 14px;
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
<template>
    <div class="search-top" :class="isScroll?'skin':''">
      <div class="search">
        <router-link to="/search">
          <i class="icon icon-search">&#xe627;</i>
          <input type="text" placeholder="生活用品">
          <button class="btn-search">搜索</button>
        </router-link>
      </div>
    </div>
</template>
<script>
  export default {
    props: {
      isScroll: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        searchContent: '',
        searchSta: false,
        historySta: true,
        cancelSta: false,
        history: [],
        searchList: []
      }
    },

  }
</script>

<style lang='less'>

  .search-top {

    height: 40px;
    padding-top: 5px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0);
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    &.skin {
      background-color: #fff;
      /*border-bottom: 1px solid #F0F0F0;*/
      .search {
        background-color: #f0f0f0;
        input {
          background-color: #f0f0f0;

        }
        .btn-search {
          background: #0cf;
        }
      }

    }
    .icon-arrow-left {
      line-height: 40px;
      margin-left: 2%;
    }
    .search {
      height: 30px;
      width: 90%;
      margin: 0 auto;
      vertical-align: top;
      border-radius: 8px;
      overflow: hidden;
      font-size: 0;
      background: rgba(250, 250, 255, 0.8);
      .icon-search {
        margin: 0 2%;
        height: 30px;
        line-height: 30px;
        width: 6%;
        color: #333;
        font-size: 15px;
      }
      input {
        height: 30px;
        vertical-align: top;
        outline: none;
        border: none;
        width: 75%;
        background-color: rgba(0, 0, 0, 0);
      }
      .btn-search {
        border: none;
        background: rgba(0, 204, 255, .6);
        color: #fff;
        height: 30px;
        line-height: 30px;
        width: 15%;
        vertical-align: top;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>

<template>
  <div class="search-page">
    <div class="seach_wap">
      <div class="search_div">
        <input type="text" id="searchInputBox" class="search_goods" placeholder="请输入商品名称进行搜索">
        <img src="../assets/images/delete_little.png" style="display: none;">
        <a href="javascript:void(0);" id="" class="seach"></a>
      </div>
    </div>
    <div class="hotSearch" style="display: block;">
      <h1>热门搜索</h1>
      <div class="hotClass">
        <a href="javascript:;">充值卡</a>
        <a href="javascript:;">话费</a>
        <a href="javascript:;">流量</a>
        <a href="javascript:;">家居用品</a>
        <a href="javascript:;">手机配件</a>
      </div>
    </div>
    <div class="hotSearch" style="display: block;">
      <h1>按分值浏览</h1>
      <div class="hotClass">
        <a href="https://m.jf.10010.com/jf-mall/msearchPoint?pointCode=1">0-1000分</a>
        <a href="https://m.jf.10010.com/jf-mall/msearchPoint?pointCode=2">1001-2000分</a>
        <a href="https://m.jf.10010.com/jf-mall/msearchPoint?pointCode=3">2001-3000分</a>
        <a href="https://m.jf.10010.com/jf-mall/msearchPoint?pointCode=4">3001-5000分</a>
        <a href="https://m.jf.10010.com/jf-mall/msearchPoint?pointCode=5">5001-10000分</a>
        <a href="https://m.jf.10010.com/jf-mall/msearchPoint?pointCode=6">10001分以上</a>
      </div>
    </div>
  </div>
</template>

<script>
  import { Search } from 'vux'

  export default {
    components: {
      Search
    },
    methods: {
      setFocus () {
        this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    },
    data () {
      return {
        results: [],
        value: 'test'
      }
    }
  }
</script>

<style scoped lang="less">
.search-page{
  background-color: #fff;
  height: 100%;
  .seach_wap {
    background-color: #f2f2f2;
    padding: 5px 0;
    .search_div {
      width: 100%;
      height: 30px;
      position: relative;
      .seach {
        position: absolute;
        text-decoration: none;
        color: #666;
        width: 70px;
        height: 30px;
        line-height: 28px;
        text-align: center;
        background: url(../assets/images/search_tu.png) 50% no-repeat;
        -moz-background-size: 70px;
        -o-background-size: 70px;
        -webkit-background-size: 70px;
        background-size: 70px;
        font-size: 13px;
        right: 1%;
        top: 0px;
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        display: inline-block;
        border: 1px solid #ddd;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      img {
        position: absolute;
        right: 82px;
        top: 8px;
        display: none;
      }
      .search_goods {
        display: block;
        border-radius: 4px;
        background: url(../assets/images/SearchIcon.png) 10px 50% no-repeat #fff;
        -moz-background-size: 15px;
        -o-background-size: 15px;
        -webkit-background-size: 15px;
        background-size: 15px;
        font-size: 13px;
        padding-left: 30px;
        padding-right: 100px;
        color: #BDBDBC;
        width: 98%;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 30px;
        margin: 0 auto;
        border: 1px solid #ddd;
      }
    }
  }
  .hotSearch{
    box-sizing: border-box;
    padding: 10px 15px;
    overflow: hidden;
    h1 {
      font-size: 14px;
      color: #333;
      line-height: 30px;
      font-family: "Microsoft YaHei";
    }
    .hotClass{
      a{
        text-decoration: none;
        display: inline-block;
        width: 30%;
        float: left;
        height: 30px;
        font-size: 12px;
        line-height: 28px;
        color: #666;
        text-align: center;
        box-sizing: border-box;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        border: 1px solid #d2d2d2;
        margin: 5px 3% 5px 0;
      }
    }
  }
}
</style>
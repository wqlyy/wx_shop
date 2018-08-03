<template>
  <div class="search-page">
    <div class="search-top">
      <span @click="$router.go(-1)">
        <i class="icon icon-arrow-left">&#xe617;</i>
      </span>
      <div class="search">
        <i class="icon icon-search">&#xe627;</i>
        <input type="text" class="input" @click="searchInput" v-model="searchContent">
        <button class="cancel" @click="cancelSearch" v-show="cancelSta">取消</button>
        <button class="btn-search" @click="search">搜索</button>
      </div>
    </div>
    <div class="nowSearch" v-show="searchSta">
      <div class="noSearch" v-show="searchList.length === 0">
        <p>很抱歉，没有找到符合您要求的商品~</p>
        <button><router-link to="/category">开始购物</router-link></button>
      </div>
      <li v-for="(item) in searchList" :key="item.id" @click="goDetail(item)">
        <router-link to=''>
          <span>{{ item.content }}</span>
        </router-link>
      </li>
    </div>
    <div class="history-search" v-show="historySta">
      <p class="separate"></p>
      <div class="title">
        <p class="searched">历史搜索</p>
        <p class="deleteAll" @click="popConfirm('确认清空历史')">清空历史</p>
      </div>
      <ul class="history">
        <li v-for="(item) in history" :key="item.id" @click="reSearch(item)">
          <router-link to=''>
            <span class="hisName">{{ item.content }}</span>
            <span class="hisDate">{{ item.date|dateFormat('YYYY-MM-DD') }}</span>
          </router-link>
        </li>
        <p class="hasHis" v-show="history.length === 0">暂无历史数据</p>
      </ul>
    </div>
    <Loading :show="isLoading" />
    <confirm v-model="isConfirmed" :content="confirmContent" @on-confirm="clear"/>
  </div>
</template>
<script>

  import {dateFormat ,Loading,Confirm} from 'vux'
  export default {
    filters: {
      dateFormat
    },
    components:{
      Loading,
      Confirm
    },
    data () {
      return {
        isConfirmed:false,
        confirmContent:'',
        isLoading:false,//默认不显示loading
        searchContent: '',
        searchSta: false,
        historySta: true,
        cancelSta: false,
        history: [],
        searchList: [],
        id:0
      }
    },
    methods: {
      reSearch (item) {
        this.searchContent = item.name
        this.search()
      },
      goDetail (item) {
        //  进入详情页
        console.log('进入商品详情：',item);
        this.$router.replace({ name: 'Detail', params: { id: item.gid }})
      },
      popConfirm(content){
        this.isConfirmed=true;
        this.confirmContent = content;
      },
      clear () {

        console.log('确认清空历史')
      },
      hotSearch () {
        console.log('热搜')
      },
      searchInput () {
        this.searchSta = true
        this.historySta = false
        this.cancelSta = true
        document.querySelector('.input').style.width = '60%'
      },
      cancelSearch () {
        this.searchSta = false
        this.historySta = true
        this.cancelSta = false
        document.querySelector('.input').style.width = '75%'
        this.searchContent = ''
        this.searchList = []
      },
      search () {

        let now = Date.now();
        this.searchSta = true
        this.historySta = false
        this.cancelSta = true
        document.querySelector('.input').style.width = '60%'
        //  获取查询信息
        if (this.searchContent === '') {
          return
        }
        //搜索结果
        this.isLoading = true
        setTimeout( ()=> {
          this.isLoading=false
        },3000)
        //添加历史
        this.history.push({
          id:this.id++,
          date:now,
          content:this.searchContent
        })
      }
    },
    mounted: function () {
    }
  }
</script>

<style lang='less' scoped>
  .search-page {
    font-size: 16px;
    position: relative;
    z-index: 2;
    background: #fff;
    height: 100%;
    .search-top {
      background: #f2f2f2;
      height: 50px;
      .icon-arrow-left {
        line-height: 50px;
        margin-left: 2%;
      }
      .search {
        height: 30px;
        width: 85%;
        vertical-align: top;
        margin-top: 10px;
        margin-left: 2%;
        border-radius: 8px;
        display: inline-block;
        overflow: hidden;
        font-size: 0;
        background: #fff;
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
        }
        .cancel{
          height: 30px;
          width: 15%;
          background: none;
          border: none;
          outline: none;
          color: #00B2EE;
        }
        .btn-search {
          border: none;
          background: #0cf;
          color: #fff;
          height: 30px;
          line-height: 30px;
          width: 15%;
          vertical-align: top;
          margin: 0;
          padding: 0;
          outline: none;
        }
      }
    }
    .history-search {
      .separate {
        width: 100%;
        height: 1px;
        background: #eee;
        margin: 0;
        padding: 0;
      }
      .title {
        height: 30px;
        p {
          margin: 0;
          padding: 0;
          line-height: 30px;
          color: #333;
        }
        .searched {
          float: left;
          margin-left: 5%;
        }
        .deleteAll {
          float: right;
          margin-right: 5%;
          color: #00ccff;
        }
      }
      .history{
        margin: 0;
        padding: 0;
        li{
          list-style: none;
          height: 30px;
          line-height: 30px;
          color:#999;
          border-top: 1px solid #ddd;
          padding: 0 2%;
          font-size: 14px;
          a{
            color: #999;
          }
          .hisName{
            float: left;
            margin-left: 2%;
          }
          .hisDate{
            margin-right: 2%;
            float: right;
          }
        }
        .hasHis{
          text-align: center;
          color:#999;
        }
      }
    }
    .nowSearch{
      p{
        text-align: center;
        color:#999;
      }
      .noSearch{
        text-align: center;
        color:#999;
        margin-top: 15%;
        p{
          text-align: center;
          color:#999;
        }
        button{
          background: #0cf;
          border: none;
          height: 40px;
          width: 50%;
          font-size: 0.875em;
          border-radius: 4px;
          margin-top: 8%;
          a{
            color: #fff;
            text-decoration: none;
            display: block;
          }
        }
      }
      li{
        list-style: none;
        height: 30px;
        line-height: 30px;
        color:#999;
        border-bottom: 1px solid #ebebeb;
        padding: 0 2%;
        a{
          color: #999;
          text-decoration: none;
        }
      }
    }
  }
</style>

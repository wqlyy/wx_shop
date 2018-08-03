<template>
  <div class="category-page">
    <view-box>
      <!--顶部搜索-->
      <SearchBar :isScroll="isScroll" :isFixed="isFixed"/>
      <RecommendList :list="category_list" paddingTop="50"/>
      <Divider>到底咯~~</Divider>
    </view-box>
  </div>
</template>

<script>
  import {Divider,ViewBox,Flexbox, FlexboxItem} from 'vux'
  import Axios from 'axios'
  import RecommendList from './RecommendList'
  import SearchBar from '../components/SearchBar'

  export default {
    name: "category",
    components: {
      ViewBox,
      Divider,
      Flexbox,
      FlexboxItem,
      RecommendList,
      SearchBar
    },
    data(){
      return {
        category_list:[],
        isScroll:true,
        isFixed:true
      }
    },
    created(){
      document.title = '积分商城'
      this.getCategoryList()
    },
    methods:{
      getCategoryList(){
        Axios.get('category.json').then((response) => {
          let result = response.data;
          console.log(result);
          if (result.retcode === 1) {
            this.category_list = result.data
          }
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped lang="less">
.category-page{
  height: 100%;
  font-size: 0;
  .vux-divider{
    font-size: 14px;
  }
}
</style>
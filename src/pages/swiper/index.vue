<template>
  <swiper :list="banner_list"/>
</template>

<script>
  import {Swiper, SwiperItem} from 'vux'
  import Axios from 'axios'

  export default {
    components: {
      Swiper,
      SwiperItem
    },
    data() {
      return {
        banner_list:[]
      }
    },
    created(){
      this.getBannerList();
    },
    methods: {
      getBannerList() {
        Axios.get('banner_list.json').then((response) => {
          let result = response.data;
          if(result.retcode===1){
            this.banner_list = result.data
          }
          console.log(response.data);
        }, (err) => {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div class="title">
    <h3>{{title}}</h3>
  </div>
</template>

<script>
  export default {
    name: "index",
    props:{
      title:{
        type:String,
        default:''
      },
    }
  }
</script>

<style scoped lang="less">
  @import "../../assets/styles/mixin";
.title{
  padding: 20/@rem 30/@rem;
  h3{
    position: relative;
    padding-left: 15/@rem;
    font-size: 26/@rem;
    line-height: 34/@rem;
    &::before{
      position: absolute;
      left: 0;
      content: '';
      display: block;
      line-height: 30/@rem;
      width: 6/@rem;
      height: 34/@rem;
      background-color: #0cf;
    }
  }
}
</style>
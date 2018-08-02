<template>
  <div>Detail产品Id:{{$route.params.id}}</div>
</template>

<script>
  export default {
    name: "detail",
    created(){
      console.log('选择的产品id:',this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
<!-- 1、传递参数的方式：params -->
<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的信息，嘿嘿嘿</p>
    <span>我是：{{userId}}</span>
    <p>{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
}
</script>

<style  scoped>

</style>

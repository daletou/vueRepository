<!--  -->
<template>
  <div>
    <h2>我是Home</h2>
    <p>我是Home内容，呵呵呵</p>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/message'>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log("Home create")
  }, 
  destroyed() {
    console.log("Home destroyed")
  },
  // 补充：activated和deactivated这两个回调函数只有该组件被保持了状态使用了keep-alive时，才是有效的
  // 组件处于活跃的状态
  activated() {
    console.log("activated")
    console.log(this.path)
    this.$router.push(this.path)
  },
  // 组件失去活跃的状态
  deactivated() {
    console.log("deactivated")
  },
  // 导航离开该组件的对应路由时调用
  beforeRouteLeave (to, from, next) {
    // 可以访问组件实例 `this`
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  }
}
</script>

<style  scoped>

</style>

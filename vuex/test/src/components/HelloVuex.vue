<template>
  <div>
    <h3>{{message}}</h3>
    <h3>{{$store.state.count}}</h3>
    <h3>{{$store.getters.powerCount}}</h3>
    <h3>{{$store.getters.more20stu}}</h3>
    <h3>{{$store.getters.more20stuLength}}个学生</h3>
    <h3>{{$store.getters.moreAgeStu(10)}}</h3>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  data() {
    return {
      message: "我是HelloVuex组件"
    }
  }
}
</script>

<style>

</style>
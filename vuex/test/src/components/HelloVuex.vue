<template>
  <div>
    <h3>{{message}}</h3>
    <h3>{{$store.state.count}}</h3>
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
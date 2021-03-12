<!--  -->
<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
    <!-- 此处引用模板不区分大小写 -->
    <!-- <cpn></cpn> -->
  </div>
</template>

<script>
import Cpn from './Cpn.vue'

export default {
  components: {
    Cpn,
  },
  data() {
    return {
      message: '你好，哈哈哈',
    }
  },
  methods: {
    btnClick() {
      console.log('我被点击了')
    },
  },
  
}
</script>

<style  scoped>
.title {
  font-size: 14px;
}
</style>

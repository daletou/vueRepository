<template>
  <div id="app">
    <p>--------- 这是App------------</p>
    <h2>{{message}}</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="incrClick">+</button>
    <button @click="decrClick">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <p>--------- 这是App：演示getters相关信息------------</p>
    <!-- 获取count的平方 -->
    <h2>{{$store.getters.powerCount}}</h2>
    
    <p>--------- 这是子组件------------</p>
    <hello-vuex/>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  data() {
    return {
      message: "我是app组件"
    }
  },
  methods: {
    incrClick() {
      console.log('incrClick')
      // 通过mutation更新，传入的参数：事件类型
      this.$store.commit('increment')
    },
    decrClick() {
      console.log('decrClick')
      this.$store.commit('decrement')
    },
    addCount(count) {
      console.log('decrClick')
      // 在通过mutation更新数据时，有可能希望携带一些额外的参数
      // 参数被称为mutation的载荷/负载（payload）
      this.$store.commit('incrementCount', count)
    },
    addStudent() {
      const student = {
        name:'zhangsan',
        age:55
      }
      // 1、commit是普通的提交风格
      // this.$store.commit('addStudent', student)
      // 2、特殊的提交风格
      this.$store.commit({
        type: 'addStudent',// 事件类型
        // student: student,
        student,
        high: 1.88
      })
    }
  },
  components: {
    HelloVuex
  }
}
</script>
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

    <p>--------- 这是App：演示info对象的内容是否是响应式的------------</p>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <p>--------- 这是App：演示modules------------</p>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>
    
    <p>--------- 这是子组件------------</p>
    <hello-vuex/>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'
import { INCREMENT } from './store/mutations-types'

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
      // this.$store.commit('increment')
      this.$store.commit(INCREMENT) // 定义完类型常量最后，就可以使用类型常量INCREMENT了
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
    },
    updateInfo() {
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo', '我是携带的信息')
      // 此方法不够优雅
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: ()=>{
      //     console.log("里面已经完成了")
      //   }
      // })
      // 优雅的解决办法
      this.$store.dispatch('aUpdateInfo', '我是携带的信息').then((res)=>{
        console.log("外面接收成功")
        console.log(res)
      })
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  },
  components: {
    HelloVuex
  }
}
</script>
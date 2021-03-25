import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types'

// vuex是做状态管理的，帮助我们管理多个页面需要共享的一些状态
// Devtools：浏览器插件，如果多个页面都修改state，它是用来做跟踪的

// 1、安装插件
Vue.use(Vuex)

// 创建一个module对象
const moduleA = {
  state: {
    name: 'Tim',
  },
  getters: {
    fullName(state) {
      return state.name + '111111111'
    },
    fullName2(state, getters) {
      return getters.fullName + '2222222'
    },
    // 模块里的参数可以有第三个，可以拿到根的state
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.count
    },
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    },
  },
  actions: {
    // 此处的context不是store对象
    // 补充知识点：对象的解构
    // const {name, age, high} = obj
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 2000)
    },
  },
}

// 2、创建对象
const store = new Vuex.Store({
  // Vuex核心概念
  // 1、保存共享状态的仓库
  // state知识点补充：单一状态树
  // 即单一数据源，就是在一个项目里，不要出现多个store对象，永远用一个store对象，而在项目中就是$store
  state: {
    count: 5,
    students: [
      {
        name: 'lucy',
        age: 18,
      },
      {
        name: 'joy',
        age: 28,
      },
      {
        name: 'cobe',
        age: 38,
      },
    ],
    info: {
      name: 'shine',
      age: 20,
      high: 1.65,
    },
  },

  // 2、状态更新
  // Vuex的store状态更新的唯一方式：提交mutation
  mutations: {
    // increment(state) {
    //   state.count++
    // },
    // 定义完类型常量最后，就可以使用[类型常量名]去定义一个函数名了
    [INCREMENT](state) {
      state.count++
    },
    decrement(state) {
      state.count++
    },
    incrementCount(state, count) {
      state.count += count
    },
    addStudent(stata, student) {
      console.log(student)
      stata.students.push(student)
    },
    // 第二种特殊的提交风格，参数名写成payload比较好
    // addStudent(stata, payload) {
    //   console.log(payload)
    //   stata.students.push(payload.student)
    // },
    updateInfo(state) {
      // 原理Dep -> [watcher, watcher]
      state.info.name = 'coderwhy'
      // state.info['address'] = '洛杉矶' // 这种情况不是响应式的
      // Vue.set(state.info, 'address', '洛杉矶') // 这种情况就是响应式的
      // delete state.info.age // 删除对象中的属性，该方式做不到响应式
      // Vue.delete(state.info, 'age') // 删除对象中的属性，该方式是响应式的
      // 以下是错误代码，不能在这里进行异步操作
      // Vuex要求我们Mutations中的方法必须是同步方法，不能是异步方法，否则devtools将不能很好地追踪这个操作什么时候被完成的
      // setTimeout(() => {
      //   stata.info.name = 'baby'
      // }, 1000)
    },
  },
  // 3、类似计算属性
  // 当一个数据进行了一系列的变化之后才给其他组件使用，推荐使用getters
  getters: {
    powerCount(state) {
      return state.count * state.count
    },
    more20stu(state) {
      return state.students.filter((s) => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return function(age) {
        return state.students.filter((s) => s.age > age)
      }
    },
  },
  // 4、做异步操作
  // actions本身可以返回Promise方法
  actions: {
    // context上下文，等同于store对象
    // 括号内也可以传递参数
    // aUpdateInfo(context, payload) {
    //   console.log(payload)
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     // 通知外面异步修改已经执行成功了
    //   }, 1000)
    // },
    // 此种方法不够优雅
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     // 通知外面异步修改已经执行成功了
    //     console.log(payload.message)
    //     payload.success()
    //   }, 1000)
    // },
    // 优雅的解决方法
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload)
          // 通知外面异步修改已经执行成功了
          // 一旦执行Promise的resolve方法，则外部调用aUpdateInfo方法的地方可以直接调用Promise的then方法
          resolve('里面执行成功')
        }, 1000)
      })
    },
  },
  // 5、划分模块
  // vue使用单一状态树，那么也意外着有很多状态都会交给vuex管理
  // 当应用变得非常复杂时，store对象就有可能变得相当臃肿
  // 为了决绝这个问题，vuex允许我们将store分割成模块（module），而每个模块拥有自己的state、mutations、getters、actions
  modules: {
    a: moduleA,
  },
})

// 导出store对象
export default store

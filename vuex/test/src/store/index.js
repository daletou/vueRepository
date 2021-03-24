import Vue from 'vue'
import Vuex from 'vuex'

// vuex是做状态管理的，帮助我们管理多个页面需要共享的一些状态
// Devtools：浏览器插件，如果多个页面都修改state，它是用来做跟踪的

// 1、安装插件
Vue.use(Vuex)

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
  },

  // 2、状态更新
  // Vuex的store状态更新的唯一方式：提交mutation
  mutations: {
    increment(state) {
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
    // },
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
  actions: {},
  // 5、划分模块
  modules: {},
})

// 导出store对象
export default store

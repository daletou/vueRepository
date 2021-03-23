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
  state: {
    count: 1000,
  },
  // state知识点补充：单一状态树
  // 2、修改状态
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count++
    },
  },
  // 3、做异步操作
  actions: {},
  // 4、类似计算属性
  getters: {},
  // 5、划分模块
  modules: {},
})

// 导出store对象
export default store

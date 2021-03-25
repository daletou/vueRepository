import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

// 1、安装插件
Vue.use(Vuex)

const state = {
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
}

// 2、创建对象
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    a: moduleA,
  },
})

// 导出store对象
export default store

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

export default moduleA

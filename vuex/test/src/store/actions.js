export default {
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
}

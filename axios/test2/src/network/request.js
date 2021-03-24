import axios from 'axios'

// 方式一：使用回调函数
// export function request(config, success, failure) {
//   // 1、创建axios的实例
//   const instance = axios.create({
//     baseURL: 'http://httpbin.org/',
//     timeout: 5000,
//   })

//   // 2、发送真正的网络请求
//   instance(config)
//     .then((res) => success(res))
//     .catch((err) => failure(err))
// }

// 方式二：使用Promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1、创建axios的实例
//     const instance = axios.create({
//       baseURL: 'http://httpbin.org/',
//       timeout: 5000,
//     })

//     // 2、发送真正的网络请求
//     instance(config)
//       .then((res) => {
//         resolve(res)
//       })
//       .catch((err) => {
//         reject(err)
//       })
//   })
// }

// 方式三：网络模块的封装
// 把请求网络用函数request给封装起来 这样每个组件只用调用一次这个函数就好了
export function request(config) {
  // 1、创建axios的实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org/',
    timeout: 5000,
  })

  // 2、axios的拦截器
  // 此处写的是对于实例instance而写的拦截器，
  // 但写成axios.interceptors就表示对于axios的拦截器

  // 2.1请求拦截
  instance.interceptors.request.use(
    (config) => {
      // 为什么要做拦截？
      // （1）比如config中的一些信息不符合服务器的要求
      // （2）比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      // （3）比如某些网络请求必须携带一些特殊的信息，例如登录（会携带token）
      console.log(config)
      // 拦截到config后要将其返回出去
      return config
    },
    (err) => console.log(err)
  )
  // 2.2响应拦截
  instance.interceptors.response.use(
    (res) => {
      console.log(res)
      return res.data
    },
    (err) => console.log(err)
  )

  // 3、发送真正的网络请求，instance就是一个Promise
  return instance(config)
}

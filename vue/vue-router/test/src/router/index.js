// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

// 解决一个路径重复点击浏览器报错问题（方法二）
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject)
    return origioriginalReplacenalPush.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch((err) => err)
}

// 一、搭建路由框架的步骤
// 1、通过Vue.use(插件)命令来安装这个插件
Vue.use(VueRouter)
// 2、创建VueRouter对象
const routes = [
  // 二、配置路由映射关系的步骤
  // （1）创建路由组件
  // 配置路由的默认值
  {
    // path: '', “/”不加也可以
    path: '/',
    redirect: '/home',
  },
  {
    // （2）配置路由映射：组件和路径的映射关系
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  // 动态绑定一个路由
  {
    path: '/user/:userId',
    component: User,
  },
]
const router = new VueRouter({
  // 配置路由和组件之间的映射关系
  routes,
  // 默认为hash模式，修改为html5的history模式
  mode: 'history',
  // 修改活跃的类名
  linkActiveClass: 'active',
})

// 3、将router对象传入vue实例中
export default router

<!--  -->
<template>
  <div id="app">
    <!-- （3）使用路由：通过<router-link></router-link> -->
    <!-- router-link的属性：
    （1）to：用于指定跳转的路径
    （2）tag：默认渲染成a标签，用该属性可以修改渲染成的标签
    （3）replace：用replace模式，不让使用返回按钮来回切换
    （4）active-class：将当前活跃的标签名router-link-active修改为active，但是一般开发时不这么用
     -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->
    <br>
    <!-- <button @click="clickHome">首页</button>
    <button @click="clickAbout">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 1、动态绑定属性 -->
    <router-link :to="'/user/'+userid">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <router-link :to="{path: '/profile', query: {name: 'lisi', age: '18', high: '1.88'}}">档案</router-link><!-- 2、query -->

    <br>
    <br>
    <!-- 通过代码跳转 -->
    <button @click="userClick">我的</button>
    <button @click="profileClick">档案</button>
    
    <!-- keep-alive是Vue内置的一个组件，可以使被包含的组件保留状态，或者避免重新渲染 -->
    <!-- router-view也是一个组件，如果直接被包在keep-alive里面，所有路径匹配到的视图组件都会被缓存 -->
    <!-- 需求：点击“档案”的按钮时，需要被频繁的重新创建新的组件 -->
    <!-- include：只有匹配的组件会被缓存 -->
    <!-- exclude：任何匹配的组件都不会被缓存 -->
    <!-- 强调：这里内容之间逗号前后不要加空格 -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 通过代码的方式修改路径
  data() {
    return {
      userid: 'zhangsan'
    }
  },
  methods: {
    clickHome() {
      console.log('clickHome')
      // 解决一个路径重复点击浏览器报错问题（方法一）
      this.$router.replace('/home').catch(err => {
        console.log('输出报错',err)
      })
    },
    clickAbout() {
      console.log('clickAbout')
      // this.$router.push('/about')
      this.$router.replace('/about').catch(err => {
        console.log('输出报错',err)
      })
    },
    userClick() {
      this.$router.push('/user/' + this.userid)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'Coby',
          age: '19',
          high: '1.87'
        }
      })
    }
  }
}
</script>

<style  scoped>
/* .router-link-active {
  color: red;
} */
.active {
  color: red;
}
</style>

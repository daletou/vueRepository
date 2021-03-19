<!--  -->
<template>
  <div id="app">
    <!-- （3）使用路由：通过<router-link></router-link> -->
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link> -->
    <!-- <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->
    <br>
    <!-- <button @click="clickHome">首页</button>
    <button @click="clickAbout">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userid">用户</router-link><!-- 动态绑定属性 -->
    
    <!-- router-link的属性：
    （1）to：用于指定跳转的路径
    （2）tag：默认渲染成a标签，用该属性可以修改渲染成的标签
    （3）replace：用replace模式，不让使用返回按钮来回切换
    （4）active-class：将当前活跃的标签名router-link-active修改为active，但是一般开发时不这么用
     -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // 通过代码的方式修改路径
  data() {
    return {
      userid:'lisi'
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
      this.$router.replace('/about')
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

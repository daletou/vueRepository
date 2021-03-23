<template>
  <div id="app">
    <p>--------- 这是App------------</p>
    <h2>{{message}}</h2>
    <button @click="incrClick">+</button>
    <button @click="decrClick">-</button>
    <h2>{{$store.state.count}}</h2>
    <p>--------- 这是子组件------------</p>
    <hello-vuex/>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  data() {
    return {
      message: "我是app组件",
    }
  },
  methods: {
    incrClick() {
      console.log('incrClick')
      this.$store.commit('increment')
    },
    decrClick() {
      console.log('decrClick')
      this.$store.commit('decrement')

    }
  },
  components: {
    HelloVuex
  }
}
</script>
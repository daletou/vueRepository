<template>
  <div>
    <h2>我是Profile</h2>
    <p>名字：{{$route.query.name}}</p>
    <p>年龄：{{$route.query.age}}</p>
    <p>身高：{{$route.query.high}}</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
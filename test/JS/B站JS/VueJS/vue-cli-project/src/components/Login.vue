<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <!-- <button @click="getName">获取共享数据</button> -->
    </div>
</template>

<script>
export default{
  name: "login",
  data: function(){
    return {
      msg: 'Login'
    }
  },
  methods: {
    getName(){
      console.log(this.$store.state.name)
    }
  }
}
</script>
<!-- scoped: 样式只应用在当前组件中 -->
<style scoped>
  /* h1{
      background-color: brown;
      color: #fff
  } */
</style>
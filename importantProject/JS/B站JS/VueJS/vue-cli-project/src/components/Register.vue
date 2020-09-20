<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default{
  name: "register",
  data: function(){
    return {
      msg: 'Register'
    }
  },
  methods: {
  }
}
</script>
<!-- scoped: 样式只应用在当前组件中 -->
<style scoped>
</style>
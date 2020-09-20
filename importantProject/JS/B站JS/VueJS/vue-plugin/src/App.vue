<template>
  <div id="app">
    <button @click='showFun'>Show</button> |
    <button @click='hideFun'>Hide</button>
    <!-- <loading></loading> -->
  </div>
</template>

<script>
  // import loading from './components/Loading.vue'
  import Vue from 'vue'

  export default{
    // 局部组件
    // components: {
    //   loading: loading
    // }
    methods: {
      showFun(){
        // Vue.showLoading()
        this.$showLoading()
      },
      hideFun(){
        // Vue.hideLoading()
        this.$hideLoading()
      }
    }

  }
</script>

<style lang="scss">
  #app{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:nth-child(1){
    margin-right: 5px;
  }
  button:nth-child(2){
    margin-left: 5px;
  }
</style>

<template>
  <div id="app">
    <router-link to="/login" tag="button">Login</router-link>|
    <router-link to="/register" tag="button">Register</router-link>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import login from './components/Login.vue'
// import register from './components/Register.vue'

export default {
  name: "App",
  data: function () {
    return {
      msg: "JS",
    };
  },
  methods: {
    say() {
      console.log("oMing--21");
    },
    getName() {
      console.log(this.$store.state.name);
    },
  },
  components: {
    // login: login,
    // register: register,
  },
};
</script>
<!-- scoped: 样式只应用在当前组件中 -->
<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform-origin: 50px 50px;
  transform: rotateZ(360deg);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease-in;
}
h1 {
  background: #000;
  color: #fff;
}
</style>
<template>
  <div id="app">
    <!-- <MainPage></MainPage> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    // MainPage,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>

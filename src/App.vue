<template>
  <div id="app">
    <div class="abc" v-show="$store.state.isLoading">
      <MyLoading></MyLoading>
    </div>

    <!-- <MainPage></MainPage> -->
    <router-view></router-view>
  </div>
</template>

<script>
import MyLoading from "./components/MyLoading.vue";
// import MainPage from "./components/MainPage.vue";
// import axios from "axios";
export default {
  name: "App",
  components: {
    MyLoading,
    // MainPage,
  },
  // mounted() {
  //   // 请求拦截器
  //   axios.interceptors.request.use(
  //     (config) => {
  //       // 改变vuex中的isLoading状态数据，当为true，loading显示
  //       this.$store.state.isLoading = false;
  //       return config;
  //     },
  //     (error) => {
  //       return Promise.error(error);
  //     }
  //   );

  //   // 响应拦截器
  //   axios.interceptors.response.use(
  //     (response) => {
  //       // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
  //       // 否则的话抛出错误
  //       if (response.status === 200) {
  //         console.log(123);
  //         //loading隐藏
  //         this.$store.isLoading = true;
  //         return Promise.resolve(response);
  //       } else {
  //         return Promise.reject(response);
  //       }
  //     },
  //     (error) => {
  //       if (error.response.status) {
  //         return Promise.reject(error.response);
  //       }
  //     }
  //   );
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}
.abc {
  position: absolute;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

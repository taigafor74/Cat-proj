<template>
  <div class="container">
    <div class="fixed">
      <MyHeader></MyHeader>
      <MyDownbar></MyDownbar>
      <TopNav></TopNav>
    </div>
    <div style="height: 41.0666vw"></div>
    <NewSwiper></NewSwiper>
    <div class="show">
      <ScrollFilm></ScrollFilm>
      <AllFilm></AllFilm>
    </div>
    <div style="height: 12.9787vw"></div>
    <div class="fixedb">
      <BottomBar></BottomBar>
    </div>
  </div>
</template>

<script>
import NewSwiper from "../components/NewSwiper.vue";
import MyHeader from "../components/MyHeader.vue";
import MyDownbar from "../components/MyDownbar.vue";
import TopNav from "../components/TopNav.vue";
import ScrollFilm from "../components/ScrollFilm.vue";
import AllFilm from "../components/AllFilm.vue";
import BottomBar from "../components/BottomBar.vue";
export default {
  name: "MainPage",
  components: {
    // MainPage,
    ScrollFilm,
    TopNav,
    MyDownbar,
    MyHeader,
    AllFilm,
    BottomBar,
    NewSwiper,
  },
};
</script>

<style>
/* .container {
  height: 177.8667vw;
} */
.fixed {
  position: fixed;
  z-index: 1;
}
.fixedb {
  position: fixed;
  bottom: 0;
  z-index: 12;
}
.show {
  overflow: auto;

  background-color: #f4f4f4;
}
</style>

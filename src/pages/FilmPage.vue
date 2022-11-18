<template>
  <div>
    <TabHeader></TabHeader>
    <div style="height: 13.3333vw"></div>
    <!-- <AllFilm></AllFilm> -->
    <router-view></router-view>
    <div style="height: 12.9787vw"></div>
    <div class="fixedb">
      <BottomBar></BottomBar>
    </div>
  </div>
</template>

<script>
// import AllFilm from "../components/AllFilm.vue";
import BottomBar from "../components/BottomBar.vue";
import TabHeader from "../components/FilmDetail/TabHeader.vue";
export default {
  name: "FilmPage",
  components: { BottomBar, TabHeader },
};
</script>

<style>
.fixedb {
  position: fixed;
  bottom: 0;
  z-index: 12;
}
</style>

<template>
  <div>
    <AllFilm></AllFilm>
    <div style="height: 12.9787vw"></div>
    <div class="fixedb">
      <BottomBar></BottomBar>
    </div>
  </div>
</template>

<script>
import AllFilm from "../components/AllFilm.vue";
import BottomBar from "../components/BottomBar.vue";
export default {
  name: "FilmPage",
  components: { AllFilm, BottomBar },
};
</script>

<style>
.fixedb {
  position: fixed;
  bottom: 0;
  z-index: 12;
}
</style>

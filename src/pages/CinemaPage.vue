<template>
  <div>
    <CinemaHeader></CinemaHeader>
    <div style="height: 13.3333vw"></div>
    <AllCinema></AllCinema>
    <div style="height: 12.9787vw"></div>
    <div class="fixedb">
      <BottomBar></BottomBar>
    </div>
  </div>
</template>

<script>
import CinemaHeader from "@/components/Cinema/CinemaHeader.vue";
import BottomBar from "../components/BottomBar.vue";
import AllCinema from "@/components/Cinema/AllCinema.vue";
export default {
  name: "CinemaPage",
  components: { BottomBar, AllCinema, CinemaHeader },
};
</script>

<style>
.fixedb {
  position: fixed;
  bottom: 0;
  z-index: 12;
}
</style>

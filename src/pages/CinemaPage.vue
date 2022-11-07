<template>
  <div>
    <AllCinema></AllCinema>
    <div style="height: 12.9787vw"></div>
    <div class="fixedb">
      <BottomBar></BottomBar>
    </div>
  </div>
</template>

<script>
import BottomBar from "../components/BottomBar.vue";
import AllCinema from "@/components/Cinema/AllCinema.vue";
export default { name: "CinemaPage", components: { BottomBar, AllCinema } };
</script>

<style>
.fixedb {
  position: fixed;
  bottom: 0;
  z-index: 12;
}
</style>

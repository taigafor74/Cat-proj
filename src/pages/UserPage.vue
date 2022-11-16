<template>
  <div>
    <UserFace></UserFace>
    <div style="height: 12.9787vw"></div>
    <div class="fixedb">
      <BottomBar></BottomBar>
    </div>
  </div>
</template>

<script>
import BottomBar from "../components/BottomBar.vue";
import UserFace from "@/components/UserControl/UserFace.vue";
export default {
  name: "UserPage",
  components: { BottomBar, UserFace },
};
</script>

<style>
.fixedb {
  position: fixed;
  bottom: 0;
  z-index: 12;
}
</style>

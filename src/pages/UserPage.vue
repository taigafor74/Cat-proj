<template>
  <div>
    <UserLogin></UserLogin>
    <div style="height: 12.9787vw"></div>
    <div class="fixedb">
      <BottomBar></BottomBar>
    </div>
  </div>
</template>

<script>
import BottomBar from "../components/BottomBar.vue";
import UserLogin from "../components/UserControl/UserLogin.vue";
export default { name: "UserPage", components: { BottomBar, UserLogin } };
</script>

<style>
.fixedb {
  position: fixed;
  bottom: 0;
  z-index: 12;
}
</style>

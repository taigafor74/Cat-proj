<template>
  <div>
    <AdminHeader />
    <div class="eee">
      <AdminAside />
      <div class="right"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
import AdminHeader from "../components/Admin/AdminHeader.vue";
import AdminAside from "../components/Admin/AdminAside.vue";
export default {
  name: "ForAdmin",
  components: { AdminHeader, AdminAside },
};
</script>

<style>
.eee {
  margin-top: 23px;
  padding: 0 230px;
  display: flex;
}
.right {
  flex: 1;
  height: 100vh;
  margin-left: 20px;
}
</style>

<template>
  <div class="A-Header">
    <div class="logo">
      <img src="../../assets/448afce485c1f342895185c2be668fa411803.png" />
    </div>
    <div class="avatar">
      <img
        src="../../assets/a65e1e6f9b15f43f29f5b6024f1fbb7ce8fb6dc7.jpg@48w_48h_1c.png"
      />
      <span>admin ⏷</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminHeader",
};
</script>

<style scoped>
.A-Header {
  height: 100px;
  width: 100%;
  padding: 0 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid rgb(112, 111, 111);
  box-shadow: 6px 6px 3px rgb(112, 111, 111);
}
.logo img {
  width: 160px;
  height: 60px;
}
.avatar {
  display: flex;
  align-items: center;
}
.avatar img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
.avatar span {
  display: block;
  margin-left: 30px;
}
</style>

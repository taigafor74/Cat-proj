<template>
  <div>
    <div class="user-header">
      <div class="user-left">
        <div class="user-avatar">
          <img />
        </div>
        <span @click="gotologin">登录/注册</span>
      </div>
    </div>
    <div class="user-content">
      <div class="user-item">我的订单</div>
      <div class="user-item">想看的电影</div>
      <div class="user-item">看过的电影</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFace",
  methods: {
    gotologin() {
      this.$router.push({
        path: "/UserLogin",
      });
    },
  },
};
</script>

<style scoped>
.user-header {
  background-color: rgb(174, 27, 27);
  color: rgb(232, 230, 227);
  display: flex;
  align-items: center;
  position: relative;
}
.user-left {
  width: 53.3333vw;
  height: 26.6667vw;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  margin-left: 5.3333vw;
}
.user-avatar {
  position: absolute;
  box-sizing: border-box;
  border: 1.0667vw solid #f1f1f1;
  left: 0;
  width: 21.3333vw;
  height: 21.3333vw;
  border-radius: 50%;
  overflow: hidden;
  font-size: 0;
}
.user-avatar img {
  width: 100%;
  height: 100%;
}
.user-left span {
  position: absolute;
  left: 26.6667vw;
}
.user-content {
  border-top: 5.3333vw solid #f1f1f1;
  width: 100%;
}
.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4vw;
  font-size: 4.2667vw;
  border-bottom: 1.6vw solid #f1f1f1;
}
</style>

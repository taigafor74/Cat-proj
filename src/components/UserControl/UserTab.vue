<template>
  <div>
    <div class="user-header">
      <span><img @click="$router.go(-1)" src="../../assets/上一页.png" /></span>
      <span>{{ detail }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserTab",
  data() {
    return {
      detail: "我的资料",
    };
  },
  mounted() {
    console.log(this.$route.fullPath);
    if (this.$route.fullPath == "/MyOrder") {
      this.detail = "我的订单";
    }
  },
};
</script>

<style scoped>
.user-header {
  background-color: rgb(174, 27, 27);
  color: rgb(232, 230, 227);
  height: 13.3333vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-header span:nth-child(1) {
  position: absolute;
  left: 4vw;
}
.user-header span:nth-child(2) {
  width: 60%;
  font-size: 4.5333vw;
  text-align: center;
}
span img {
  width: 5.3333vw;
  height: 5.3333vw;
}
</style>

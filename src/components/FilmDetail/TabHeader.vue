<template>
  <div class="tabHeader">
    <span class="location">广州</span>
    <span class="normal" :class="{ active: isActive }" @click="HandleChange(1)"
      >正在热映</span
    >
    <span class="normal" :class="{ active: !isActive }" @click="HandleChange(2)"
      >即将上映</span
    >
    <span class="f-icon"
      ><router-link to="/SearchMovie"
        ><img src="../../assets/搜索.png" /></router-link
    ></span>
  </div>
</template>

<script>
export default {
  name: "TabHeader",
  data() {
    return {
      isActive: 1,
    };
  },
  mounted() {
    if (this.$route.fullPath == "/FilmPage/AllFilm") {
      this.isActive = 1;
    } else {
      this.isActive = 0;
    }
  },
  methods: {
    HandleChange(num) {
      this.isActive = !this.isActive;
      if (num == 1) {
        this.$router.push({ path: "/FilmPage/AllFilm" });
      }
      if (num == 2) {
        this.$router.push({ path: "/FilmPage/AllfilmNo" });
      }
    },
  },
};
</script>

<style scoped>
.tabHeader {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 13.3333vw;
  width: 100%;
  font-size: 4vw;
  background-color: #dd2727;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.f-icon {
  margin-top: 1.8333vw;
}
a img {
  width: 6.4vw;
  height: 6.4vw;
}
.normal {
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}
.normal.active {
  opacity: 1;
  border-bottom: 0.5667vw solid #ffffff;
}
</style>

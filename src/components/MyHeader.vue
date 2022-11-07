<template>
  <div class="nav-container">
    <div class="nav-logo"></div>
    <div class="nav-title">
      <div>猫眼电影</div>
    </div>
    <div class="nav-button">
      <button @click="go">
        <img src="../assets/f05f61e7a8f3f45fd071c068d7a26870356.png" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyHeader",
  data() {
    return {};
  },
  methods: {
    go() {
      this.$store.commit("increment");
    },
  },
  computed: mapState({
    count(state) {
      return state.count;
    },
  }),
};
</script>

<style scoped>
.title1 {
  text-decoration: none;
  color: #fff;
}
.nav-container {
  width: 100.088vw;
  height: 13.3333vw;
  background-color: #e54847;
  padding: 1.6vw;
  display: flex;
}
.nav-logo {
  height: 10.1333vw;
  width: 26.6667vw;
}
.nav-title {
  height: 10.1333vw;
  width: 43.5547vw;
  text-align: center;
  line-height: 9.0667vw;
  font-size: 4.8vw;
}
.nav-button {
  height: 10.1333vw;
  width: 26.6667vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
/* .nav-container:nth-child(1) {
  height: 10.1333vw;
  width: 26.6667vw;
}
.nav-container:nth-child(2) {
  height: 10.1333vw;
  width: 43.5547vw;
}
.nav-container:nth-child(3) {
  height: 10.1333vw;
  width: 26.6667vw;
} */
.nav-button img {
  width: 4.5333vw;
  height: 4.2667vw;
}
</style>

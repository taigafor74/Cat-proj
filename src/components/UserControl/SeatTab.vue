<template>
  <div>
    <div class="cbinema-tab">
      <span><img @click="$router.go(-1)" src="../../assets/上一页.png" /></span>
      <span>{{ cinema }}</span>
    </div>
    <div class="s-movie-info">
      <div>{{ movie.name }}</div>
      <div>
        <span>{{ editDate }}日</span>
        <span>{{ schedule.show_time }}</span>
        <span>{{ movie.language }}3D</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeatTab",
  data() {
    return {
      editDate: "",
    };
  },
  watch: {
    schedule(newval) {
      this.editDate = newval.show_date.replace("-", "年").replace("-", "月");
    },
  },
  props: ["cinema", "movie", "schedule"],
};
</script>

<style scoped>
.s-movie-info div:nth-child(1) {
  margin-bottom: 3.3333vw;
  font-size: 4.5333vw;
  font-weight: 700;
}
.s-movie-info div:nth-child(2) {
  color: rgb(157, 148, 136);
  font-size: 3.7333vw;
  margin-bottom: 3.3333vw;
}
.s-movie-info span {
  margin-right: 1.6vw;
}
.s-movie-info {
  display: flex;
  flex-direction: column;
  padding: 3.3333vw;
}
.cbinema-tab span:nth-child(1) {
  position: absolute;
  top: 4.3333vw;
  left: 5.3333vw;
}
.cbinema-tab span:nth-child(2) {
  font-size: 4.97vw;
}
.cbinema-tab img {
  width: 5.3333vw;
  height: 5.3333vw;
}
.cbinema-tab {
  height: 13.3333vw;
  background-color: rgb(174, 27, 27);
  color: rgb(232, 230, 227);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

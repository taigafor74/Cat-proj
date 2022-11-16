<template>
  <div>
    <div class="cbinema-tab">
      <span><img @click="$router.go(-1)" src="../assets/上一页.png" /></span>
      <span>{{ name }}</span>
    </div>
    <div class="bin-con">
      <div
        class="sb-item"
        v-for="(item, index) in data"
        :key="index"
        @click="gotocinema(item.cinema_id, name)"
      >
        <div class="sb-name">
          <span>{{ item.cinema_name }}</span>
        </div>
        <div class="sb-address">{{ item.specified_address }}</div>
        <div class="sb-tag">
          <span>小吃</span>
          <span>4D厅</span>
          <span>杜比全景声厅</span>
          <span>巨幕厅</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
export default {
  name: "BuyCinema",
  data() {
    return {
      data: [],
      name: "",
    };
  },
  mounted() {
    axios
      .get(`/api/getCurrentMovieSchedule?movieId=${this.$route.query.movie_id}`)
      .then((res) => {
        console.log(res.data.data.cinemaScheduleInfo);
        this.data = this.unique(
          res.data.data.cinemaScheduleInfo,
          "cinema_name"
        );
        console.log(this.data);
      });
    axios
      .get(`/api/getMovieDetail?movieId=${this.$route.query.movie_id}`)
      .then((res) => {
        this.name = res.data.data[0].name;
      });
  },
  methods: {
    unique(arr, u_key) {
      let map = new Map();
      arr.forEach((item) => {
        if (!map.has(item[0][u_key])) {
          map.set(item[0][u_key], item[0]);
        }
      });
      return [...map.values()];
    },
    gotocinema(id, name) {
      this.$router.push({
        path: "/CinemaDetail",
        query: {
          cinema_id: id,
          name,
        },
      });
    },
  },
};
</script>

<style scoped>
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
.sb-tag {
  display: flex;
}
.sb-tag span {
  border-color: rgb(179, 107, 0);
  color: rgb(255, 163, 26);
  padding: 0.8vw;
  font-size: 2.6667vw;
  border: 0.1333vw solid #f90;
  margin-right: 1.3333vw;
  border-radius: 0.5333vw;
}
.sb-name {
  font-size: 4.5333vw;
  line-height: 4.8vw;
  margin-bottom: 3.3333vw;
  font-weight: 700;
}
.sb-address {
  color: rgb(168, 160, 149);
  font-size: 3.7333vw;
  line-height: 4vw;
  margin-bottom: 3.3333vw;
}
.sb-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3.3333vw;
  width: 100%;
  border-bottom: 0.4vw solid #f1f1f1;
  margin-bottom: 3.3333vw;
}
.bin-con {
  font-size: 4.2667vw;
  padding: 4vw;
  border-top: 0.5333vw solid #f1f1f1;
}
</style>

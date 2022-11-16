<template>
  <div class="search-cineme">
    <div class="sc-header">
      <div class="sc-search">
        <span><img src="../assets/搜索.png" /></span>
        <input type="text" v-model="cinemaName" placeholder="搜影院" />
      </div>
      <span class="sc-cancel" @click="$router.go(-1)">取消</span>
    </div>
    <div class="cin-con">
      <div
        class="sc-item"
        v-for="item in data"
        :key="item.cinema_id"
        @click="gotocinema(item.cinema_id)"
      >
        <div class="sc-name">
          <span style="color: rgb(221, 39, 39)">{{ cinemaName }}</span>
          <span>{{ item.cinema_name.replace(cinemaName, "") }}</span>
        </div>
        <div class="sc-address">{{ item.specified_address }}</div>
        <div class="sc-tag">
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
  name: "SearchCinema",
  data() {
    return {
      cinemaName: "",
      data: [],
    };
  },
  watch: {
    cinemaName(newval) {
      this.matchCinema(newval);
    },
  },
  methods: {
    matchCinema(name) {
      axios.get(`/api/matchCinemaByName?cinemaName=${name}`).then((res) => {
        this.data = res.data.data;
        console.log(res);
      });
    },
    gotocinema(id) {
      this.$router.push({
        path: "/CinemaDetail",
        query: {
          cinema_id: id,
        },
      });
    },
  },
};
</script>

<style scoped>
.sc-tag {
  display: flex;
}
.sc-tag span {
  border-color: rgb(179, 107, 0);
  color: rgb(255, 163, 26);
  padding: 0.8vw;
  font-size: 2.6667vw;
  border: 0.1333vw solid #f90;
  margin-right: 1.3333vw;
  border-radius: 0.5333vw;
}
.sc-name {
  font-size: 4.5333vw;
  line-height: 4.8vw;
  margin-bottom: 3.3333vw;
  font-weight: 700;
}
.sc-address {
  color: rgb(168, 160, 149);
  font-size: 3.7333vw;
  line-height: 4vw;
  margin-bottom: 3.3333vw;
}
.sc-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3.3333vw;
  width: 100%;
  border-bottom: 0.4vw solid #f1f1f1;
  margin-bottom: 3.3333vw;
}
.cin-con {
  font-size: 4.2667vw;
  padding: 4vw;
  border-top: 0.5333vw solid #f1f1f1;
}
.sc-header {
  height: 13.3333vw;
  display: flex;
  align-items: center;
}
.sc-search {
  display: flex;
  flex: 4;
  align-items: center;
  border-radius: 6.6667vw;
  margin-left: 3.333vw;
  padding: 1.8vw 3.3333vw;
  background-color: #f5f5f5;
}
.sc-search input {
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
}
.sc-search img {
  width: 4.8vw;
  height: 4.8vw;
  margin-top: 0.9333vw;
  margin-right: 1.3333vw;
}
.sc-cancel {
  color: rgb(224, 60, 60);
  flex: 1;
  text-align: center;
}
</style>

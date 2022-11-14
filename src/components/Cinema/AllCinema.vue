<template>
  <div>
    <router-link to="/CinemaDetail"
      ><div class="cinema-item" v-for="item in data" :key="item.cinema_id">
        <div class="left">
          <div class="cinema-name ellipsis">{{ item.cinema_name }}</div>
          <div class="cinema-address ellipsis">
            {{ item.specified_address }}
          </div>
          <div class="label-block">
            <span>小吃</span><span>4D厅</span><span>巨幕厅</span
            ><span>杜比全景声厅</span>
          </div>
        </div>
      </div></router-link
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllCinema",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    axios.get("http://101.43.168.167:3000/api/getCinemaList").then((res) => {
      this.data = res.data.data;
    });
  },
};
</script>

<style scoped>
a {
  color: white;
}
.cinema-item {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 3.3333vw 4vw;
  width: 100%;
  margin-bottom: 3.3333vw;
}
.cinema-item .left {
  width: 100%;
}
.cinema-name {
  font-size: 4.6vw;
  line-height: 4.8vw;
  margin-bottom: 3.3333vw;
  font-weight: 700;
}
.cinema-address {
  font-size: 3.8vw;
  color: rgb(168, 160, 149);
  margin-bottom: 3.3333vw;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.label-block {
  display: flex;
}
.label-block span {
  border-color: rgb(179, 107, 0);
  color: rgb(255, 163, 26);
  padding: 0.8vw;
  font-size: 2.6667vw;
  border: 0.2667vw solid #f90;
  margin-right: 1.3333vw;
  border-radius: 0.5333vw;
}
</style>

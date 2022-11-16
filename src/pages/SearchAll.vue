<template>
  <div class="search-all">
    <div class="sa-header">
      <div class="sa-search">
        <span><img src="../assets/搜索.png" /></span>
        <input type="text" v-model="allName" placeholder="搜影片" />
      </div>
      <span class="sa-cancel" @click="$router.go(-1)">取消</span>
    </div>
    <div class="all-con">
      <div class="all-title" v-show="flag">
        {{ flag == 1 ? "影院" : "影片" }}
      </div>
      <div class="movie-item-all" v-show="movieData.length">
        <div class="mall-item" v-for="(item, index) in movieData" :key="index">
          <img :src="baseUrl + item.poster" />
          <div class="mall-info" @click="gotomovie(item.movie_id)">
            <div class="mall-name">
              <span style="color: rgb(221, 39, 39); font-size: 4.5333vw">{{
                allName
              }}</span
              >{{ item.name.replace(allName, "") }}
            </div>
            <div class="mall-inside">
              <div v-if="!item.score">{{ "暂无评分" }}</div>
              <div class="mall-score" v-if="item.score">
                评分：
                <span>{{
                  item.score.length > 1 ? item.score : item.score + ".0"
                }}</span>
              </div>
            </div>
            <div class="mall-inside">类型：{{ item.type }}</div>
            <div class="mall-inside">主演：{{ item.actor }}</div>
          </div>
          <span class="mall-btn">购票</span>
        </div>
      </div>
      <div class="cinema-item-all" v-show="cinemaData.length">
        <div
          class="all-item"
          v-for="item in cinemaData"
          :key="item.cinema_id"
          @click="gotocinema(item.cinema_id)"
        >
          <div class="all-name">
            <span style="color: rgb(221, 39, 39)">{{ allName }}</span>
            <span>{{ item.cinema_name.replace(allName, "") }}</span>
          </div>
          <div class="all-address">{{ item.specified_address }}</div>
          <div class="all-tag">
            <span>小吃</span>
            <span>4D厅</span>
            <span>杜比全景声厅</span>
            <span>巨幕厅</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
export default {
  name: "SearchAll",
  data() {
    return {
      movieData: [],
      cinemaData: [],
      allName: "",
      baseUrl: "http://localhost:3000",
      flag: 0,
    };
  },
  watch: {
    allName(newval) {
      if (this.allName != "") {
        this.matchall(newval);
      } else {
        this.movieData = [];
        this.cinemaData = [];
        this.flag = 0;
      }
    },
  },
  methods: {
    matchall(name) {
      axios.get(`/api/matchCinemaByName?cinemaName=${name}`).then((res) => {
        this.cinemaData = res.data.data;
        if (this.cinemaData.length) this.flag = 1;
        console.log(this.cinemaData);
      });
      axios.get(`/api/matchMovieByName?movieName=${name}`).then((res) => {
        this.movieData = res.data.data;
        if (this.movieData.length) this.flag = 2;
        console.log(this.movieData);
      });
    },
  },
};
</script>

<style scoped>
.mall-score span {
  color: rgb(255, 188, 26);
  font-weight: 700;
  font-size: 5.1333vw;
}
.mall-name {
  padding-bottom: 1.6vw;
  font-size: 4.5333vw;
  font-weight: 700;
}
.mall-inside {
  padding-bottom: 1.6vw;
  font-size: 3.333vw;
  color: rgb(170, 163, 152);
}
.mall-item {
  padding: 2.6667vw 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.mall-item img {
  width: 20%;
}
.mall-info {
  width: 60%;
  margin-left: 2.6667vw;
}
.mall-btn {
  background-color: rgb(174, 27, 27);
  color: rgb(232, 230, 227);
  padding: 2.1333vw 1.6vw;
  border-radius: 1.0667vw;
  font-size: 3.333vw;
  text-align: center;
  width: 20%;
}
.all-tag {
  display: flex;
}
.all-tag span {
  border-color: rgb(179, 107, 0);
  color: rgb(255, 163, 26);
  padding: 0.8vw;
  font-size: 2.6667vw;
  border: 0.1333vw solid #f90;
  margin-right: 1.3333vw;
  border-radius: 0.5333vw;
}
.all-name {
  font-size: 4.5333vw;
  line-height: 4.8vw;
  margin-bottom: 3.3333vw;
  font-weight: 700;
}
.all-address {
  color: rgb(168, 160, 149);
  font-size: 3.7333vw;
  line-height: 4vw;
  margin-bottom: 3.3333vw;
}
.all-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3.3333vw;
  width: 100%;
  border-bottom: 0.4vw solid #f1f1f1;
  margin-bottom: 3.3333vw;
}
.movie-item-all {
  padding: 4vw;
  border-top: 0.5333vw solid #f1f1f1;
}
.cinema-item-all {
  font-size: 4.2667vw;
  padding: 4vw;
  border-top: 0.5333vw solid #f1f1f1;
}
.all-con {
  font-size: 4.1333vw;
  padding: 4vw;
  border-top: 0.5333vw solid rgb(52, 56, 58);
}
.all-title {
  font-size: 4vw;
  padding-bottom: 3.3333vw;
  border-bottom: 0.4vw solid rgb(52, 56, 58);
}
.sa-header {
  height: 13.3333vw;
  display: flex;
  align-items: center;
}
.sa-search {
  display: flex;
  flex: 4;
  align-items: center;
  border-radius: 6.6667vw;
  margin-left: 3.333vw;
  padding: 1.8vw 3.3333vw;
  background-color: #f5f5f5;
}
.sa-search input {
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
}
.sa-search img {
  width: 4.8vw;
  height: 4.8vw;
  margin-top: 0.9333vw;
  margin-right: 1.3333vw;
}
.sa-cancel {
  color: rgb(224, 60, 60);
  flex: 1;
  text-align: center;
}
</style>

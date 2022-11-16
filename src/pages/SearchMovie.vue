<template>
  <div class="search-movie">
    <div class="sm-header">
      <div class="sm-search">
        <span><img src="../assets/搜索.png" /></span>
        <input type="text" v-model="movieName" placeholder="搜影片" />
      </div>
      <span class="sm-cancel" @click="$router.go(-1)">取消</span>
    </div>
    <div class="sm-con">
      <div class="sm-item" v-for="(item, index) in data" :key="index">
        <img :src="baseUrl + item.poster" />
        <div class="sm-info" @click="gotomovie(item.movie_id)">
          <div class="sm-name">
            <span style="color: rgb(221, 39, 39); font-size: 4.5333vw">{{
              movieName
            }}</span
            >{{ item.name.replace(movieName, "") }}
          </div>
          <div class="sm-inside">
            <div v-if="!item.score">{{ "暂无评分" }}</div>
            <div class="sm-score" v-if="item.score">
              评分：
              <span>{{
                item.score.length > 1 ? item.score : item.score + ".0"
              }}</span>
            </div>
          </div>
          <div class="sm-inside">类型：{{ item.type }}</div>
          <div class="sm-inside">主演：{{ item.actor }}</div>
        </div>
        <span class="sm-btn">购票</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
export default {
  name: "SearchMovie",
  data() {
    return {
      data: [],
      movieName: "",
      baseUrl: "http://localhost:3000",
    };
  },
  watch: {
    movieName(newval) {
      console.log(newval);
      console.log(this.$refs.red);
      this.matchMovieByName(newval);
    },
  },
  methods: {
    matchMovieByName(name) {
      axios.get(`/api/matchMovieByName?movieName=${name}`).then((res) => {
        this.data = res.data.data;
        console.log(this.data);
      });
    },
    gotomovie(id) {
      this.$router.push({
        path: "/FilmDetail",
        query: {
          movie_id: id,
        },
      });
    },
  },
};
</script>

<style scoped>
.sm-score span {
  color: rgb(255, 188, 26);
  font-weight: 700;
  font-size: 5.1333vw;
}
.sm-name {
  padding-bottom: 1.6vw;
  font-size: 4.5333vw;
  font-weight: 700;
}
.sm-inside {
  padding-bottom: 1.6vw;
  font-size: 3.333vw;
  color: rgb(170, 163, 152);
}
.sm-con {
  padding: 4vw;
  border-top: 0.5333vw solid #f1f1f1;
}
.sm-item {
  padding: 2.6667vw 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.sm-item img {
  width: 20%;
}
.sm-info {
  width: 60%;
  margin-left: 2.6667vw;
}
.sm-btn {
  background-color: rgb(174, 27, 27);
  color: rgb(232, 230, 227);
  padding: 2.1333vw 1.6vw;
  border-radius: 1.0667vw;
  font-size: 3.333vw;
  text-align: center;
  width: 20%;
}
.search-movie {
}
.sm-header {
  height: 13.3333vw;
  display: flex;
  align-items: center;
}
.sm-search {
  display: flex;
  flex: 4;
  align-items: center;
  border-radius: 6.6667vw;
  margin-left: 3.333vw;
  padding: 1.8vw 3.3333vw;
  background-color: #f5f5f5;
}
.sm-search input {
  background-color: transparent;
  width: 100%;
  border: none;
  outline: none;
}
.sm-search img {
  width: 4.8vw;
  height: 4.8vw;
  margin-top: 0.9333vw;
  margin-right: 1.3333vw;
}
.sm-cancel {
  color: rgb(224, 60, 60);
  flex: 1;
  text-align: center;
}
</style>

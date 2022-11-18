<template>
  <div>
    <MyDownbar></MyDownbar>
    <div class="container">
      <LittleNav :filmname="data.name" />
      <FilmOverview :overview="overview" />
      <FilmScore />
      <FilmIntroduction :intro="intro" style="margin-top: 3vw" />
    </div>
    <div style="background-color: rgb(102, 77, 41)">
      <FilmComment :commentData="commentData"></FilmComment>
    </div>
    <div style="height: 16vw"></div>
    <div class="fix-b">
      <FilmBottom :movie_id="movie_id" />
    </div>
  </div>
</template>

<script>
import axios from "../utils/request.js";
import FilmScore from "@/components/FilmDetail/FilmScore.vue";
import MyDownbar from "../components/MyDownbar.vue";
import LittleNav from "../components/FilmDetail/LittleNav.vue";
import FilmOverview from "../components/FilmDetail/FilmOverview.vue";
import FilmIntroduction from "../components/FilmDetail/FilmIntroduction.vue";
import FilmBottom from "../components/FilmDetail/FilmBottom.vue";
import FilmComment from "../components/FilmDetail/FilmComment.vue";
export default {
  name: "FilmDetail",
  data() {
    return {
      data: {},
      overview: {},
      intro: "",
      commentData: {},
      movie_id: this.$route.query.movie_id,
    };
  },
  components: {
    MyDownbar,
    LittleNav,
    FilmOverview,
    FilmIntroduction,
    FilmBottom,
    FilmScore,
    FilmComment,
  },
  created() {
    axios
      .get(
        `http://101.43.168.167:3000/api/getMovieDetail?movieId=${this.$route.query.movie_id}`
      )
      .then((res) => {
        this.data = res.data.data[0];
        // console.log(this.data); //,a.actor,a.director,a.movie_long,a.poster,a.public_data,a.type
        const { actor, director, movie_long, poster, public_date, type, name } =
          this.data;
        this.overview = {
          actor,
          director,
          movie_long,
          poster,
          public_date,
          type,
          name,
        };
        this.intro = this.data.intro;
      });
    axios
      .get(
        `http://101.43.168.167:3000/api/getAllUserPassComment?movieId=${this.$route.query.movie_id}`
      )
      .then((res) => {
        console.log(res.data.data[0]);
        this.commentData = res.data.data[0];
      });
  },
};
</script>

<style scoped>
.container {
  width: 100.088vw;
  /* height: 100%; */
  background-color: rgb(102, 77, 41);
  padding: 5.6vw 4.2667vw;
}
.fix-b {
  position: fixed;
  z-index: 999;
  bottom: 0;
}
</style>

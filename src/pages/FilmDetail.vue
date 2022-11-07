<template>
  <div>
    <MyDownbar></MyDownbar>
    <div class="container">
      <LittleNav :filmname="data.name" />
      <FilmOverview :overview="overview" />
      <FilmScore />
      <FilmIntroduction :intro="intro" style="margin-top: 3vw" />
    </div>
    <div class="fix-b">
      <FilmBottom />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FilmScore from "@/components/FilmDetail/FilmScore.vue";
import MyDownbar from "../components/MyDownbar.vue";
import LittleNav from "../components/FilmDetail/LittleNav.vue";
import FilmOverview from "../components/FilmDetail/FilmOverview.vue";
import FilmIntroduction from "../components/FilmDetail/FilmIntroduction.vue";
import FilmBottom from "../components/FilmDetail/FilmBottom.vue";
export default {
  name: "FilmDetail",
  data() {
    return {
      data: {},
      overview: {},
      intro: "",
    };
  },
  components: {
    MyDownbar,
    LittleNav,
    FilmOverview,
    FilmIntroduction,
    FilmBottom,
    FilmScore,
  },
  created() {
    axios
      .get(
        `http://localhost:3000/api/getMovieDetail?movieId=${this.$route.query.movie_id}`
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
  },
};
</script>

<style scoped>
.container {
  width: 100.088vw;
  height: 100vh;
  background-color: rgb(102, 77, 41);
  padding: 5.6vw 4.2667vw;
}
.fix-b {
  position: fixed;
  z-index: 999;
  bottom: 0;
}
</style>

<template>
  <div class="O-container">
    <div class="movieImg">
      <a class="AtoV" href="#">
        <img :src="basicUrl + overview.poster" />
      </a>
    </div>
    <div class="overview">
      <div class="FilmTitle">
        <h1>{{ overview.name }}</h1>
      </div>
      <div class="en-name">HOME COMING</div>
      <div class="other-info">
        <div class="movie-type">
          <span class="forspan">{{ overview.type }}</span>
          <span>
            <img
              src="https://obj.pipi.cn/festatic/asgard/resources/images/movie/movie-tag-2DIMAX.png"
            />
          </span>
        </div>
        <div class="actor">
          <span class="forspan"
            >{{ overview.director }} / {{ overview.actor }}</span
          >
        </div>
        <div class="movie-show-time">
          <span
            >{{ overview.public_date }}中国大陆上映 /
            {{ overview.movie_long }}</span
          >
        </div>
      </div>
      <div class="div-btn">
        <button class="btn" @click="wanna($event)">
          <img
            src="https://obj.pipi.cn/festatic/asgard/resources/images/movie/want-to-watch.png"
          />
          <span>想看</span>
        </button>
        <button class="btn">
          <img
            src="https://obj.pipi.cn/festatic/asgard/resources/images/movie/want-to-watch.png"
          />
          <span>看过</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmOverview",

  props: ["overview"],
  data() {
    return {
      basicUrl: "http://101.43.168.167:3000/",
    };
  },
  methods: {
    wanna(e) {
      console.log(e);
      e.target.classList.toggle("btn-active");
    },
  },
};
</script>

<style scoped>
.O-container {
  color: white;
  width: 91.5547vw;
  height: 38.1333vw;
  display: flex;
  font: 14px/1.5 Arial, Helvetica, sans-serif;
}
.movieImg {
  width: 26.6667vw;
  height: 36.8vw;
}

.AtoV img {
  width: 26.6667vw;
  height: 36.8vw;
}
.btn-active {
  background-color: hsla(63, 97%, 52%, 0.35) !important;
}
.overview {
  flex: 1;
  margin-left: 3.2vw;
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 5.3333vw;
}
.FilmTitle {
  height: 10.1333vw;
}
.en-name {
  font-size: 3.2vw;
  color: rgb(232, 230, 227);
  opacity: 0.6;
}
.other-info {
  display: flex;
  flex-direction: column;
  font-size: 3.2vw;
  opacity: 0.6;
}
.forspan {
  height: 4.8vw;
}
.movie-type {
  font-size: 3.2vw;
  display: flex;
  align-items: center;
}
.movie-type span:nth-child(2) {
  margin-left: 1.0667vw;
  display: flex;
  align-items: center;
}
.movie-type img {
  width: 2.5rem;
  height: 3.7333vw;
}
.movie-show-time {
  height: 5.6vw;
  font-size: 3.2vw;
}
.movie-show-time span {
  display: inline-block;
  vertical-align: middle;
}
.div-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  width: 29.376vw;
  height: 8vw;
  background-color: hsla(0, 0%, 100%, 0.35);
  box-shadow: rgb(0 0 0 / 10%) 0px 0.02rem 0.08rem 0px;
  color: rgb(232, 230, 227);
  border-radius: 1.0667vw;
  border: 0;
  font-size: 3.7333vw;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn img {
  width: 3.7334vw;
  height: 3.7334vw;
  margin-right: 1.6vw;
  background-image: none;
  background-color: initial;
  display: inline-block;
}
</style>

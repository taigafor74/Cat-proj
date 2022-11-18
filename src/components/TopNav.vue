<template>
  <div>
    <div class="topnav">
      <div class="area">
        <span>东莞</span>
        <img src="../assets/下箭头.png" />
      </div>
      <div class="toptitle">
        <router-link to="/FilmPage/AllFilm" class="fora">热映</router-link>
        <router-link to="/CinemaPage" class="fora">影院</router-link>
        <router-link to="/FilmPage/AllfilmNo" class="fora">待映</router-link>
        <router-link to="/FilmPage/AllFilm" class="fora">经典电影</router-link>
      </div>
      <div class="topsearch">
        <img @click="gotosearch" src="../assets/search-red.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  methods: {
    gotosearch() {
      this.$router.push({
        path: "/SearchAll",
      });
    },
  },
};
</script>

<style>
.topnav {
  width: 100vw;
  height: 11.7333vw;
  display: flex;
  background-color: #fff;
  border-bottom: 0.2667vw solid gray;
  justify-content: space-between;
}
.area {
  width: 16.5333vw;
  height: 11.7413vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toptitle {
  width: 64.0427vw;
  height: 11.7333vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topsearch {
  width: 12vw;
  height: 10.6667vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toptitle a {
  text-decoration: none;
}
.area span {
  font-size: 4vw;
  color: #666;
}
.area img {
  margin-left: 0.5333vw;
  width: 2.6333vw;
  height: 2.6333vw;
}
.topsearch img {
  width: 5.3333vw;
  height: 5.3333vw;
  margin-top: 2.2333vw;
}
.fora {
  font-size: 3.8333vw;
  font-weight: 700;
  color: #333;
  flex: 1;
}
</style>

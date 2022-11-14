<template>
  <div class="Scontainer">
    <p>最受好评电影</p>
    <div class="a-flex" @click="goto">
      <router-link
        :to="{ path: '/FilmDetail', query: { movie_id: item.movie_id } }"
        href="#"
        v-for="(item, index) in data"
        :key="index"
      >
        <div class="defaultimg">
          <img :src="basicUrl + item.poster" />
          <span>观众评分 {{ item.score }} </span>
        </div>
        <h5 class="line-ellipsis">{{ item.name }}</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ScrollFilm",
  data() {
    return {
      basicUrl: "http://101.43.168.167:3000/",
      data: [],
    };
  },
  methods: {
    goto() {
      console.log(this);
      // this.$router.push("./MyFilm");
    },
  },
  mounted() {
    axios
      .get("http://101.43.168.167:3000/api/admin/getAllMovie")
      .then((res) => {
        this.data = res.data.data;
        // console.log(this.data);
      });
  },
};
</script>

<style scoped>
.Scontainer {
  width: 100.088vw;
  height: 54.8vw;
  padding: 3.2vw 4vw;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 2.6667vw;
}
.Scontainer p {
  margin-bottom: 3.2vw;
  font-size: 3.7333vw;
  color: #666;
}
.a-flex {
  display: flex;
  overflow: scroll;
  white-space: nowrap;
}
.a-flex::-webkit-scrollbar {
  display: none;
}
a {
  display: inline-block;
  width: 22.6667vw;
  margin-right: 2.6667vw;
  text-decoration: none;
}
.defaultimg {
  margin-bottom: 1.6vw;
  position: relative;
  display: flex;
  justify-content: center;
}
.defaultimg img {
  width: 22.6667vw;
  height: 30.6667vw;
}
.defaultimg span {
  bottom: 0;
  position: absolute;
  color: rgb(255, 187, 29);
  font-size: 2.9333vw;
  font-weight: 600;
}
.Scontainer h5 {
  color: #222;
  font-size: 13px;
  margin-bottom: 0.8vw;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

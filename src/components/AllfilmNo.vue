<template>
  <div>
    <div class="FilmContainer" v-for="item in data" :key="item.movie_id">
      <router-link
        v-loading="show"
        style="display: flex; text-decoration: none"
        :to="{ path: '/FilmDetail', query: { movie_id: item.movie_id } }"
      >
        <div class="fillimg">
          <img :src="basicUrl + item.poster" alt="" />
        </div>
        <div class="filminfo">
          <div class="filmtitle">
            <div class="textitle">{{ item.name }}</div>
            <span class="titleicon"></span>
          </div>
          <div class="detailcontain">
            <div class="texcontain">
              <div class="detail">观众评 <span>9.1</span></div>
              <div class="detailR">主演:{{ item.actor }}</div>
              <div class="detailR">今天100家影院放映280场</div>
            </div>
            <button @click.prevent="gotoselect(item.movie_id)">
              <span>购票</span>
            </button>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllfilmNo",
  data() {
    return {
      basicUrl: "http://101.43.168.167:3000",
      data: [],
      show: true,
    };
  },
  mounted() {
    axios.get("/api/admin/getAllMovie").then((res) => {
      this.data = res.data.data;
      this.data = [];
      console.log(res);
      console.log(this.data);
      console.log(this.$store.state.isLoading);
    });
  },
  updated() {
    this.show = false;
  },
  methods: {
    gotoselect(id) {
      this.$router.push({
        path: "/BuyCinema",
        query: {
          movie_id: id,
        },
      });
    },
  },
};
</script>

<style scoped>
.detailcontain {
  display: flex;
  position: relative;
}
.detailcontain button {
  width: 14.4vw;
  height: 7.4667vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  white-space: nowrap;
  font-size: 0.26rem;
  font-weight: 500;
  border-radius: 3.6vw;
  position: absolute;
  right: 0;
  border: 0px;
}
.FilmContainer {
  width: 100.088vw;
  height: 30.4vw;
  display: flex;
  padding-left: 4vw;
  background-color: #fff;
  border-bottom: 0.2667vw solid rgb(181, 177, 177);
}
/* .FilmContainer a {
    padding-left: 4vw;
    text-decoration: none;
    width: 96.088vw;
    display: block;
  } */
.fillimg {
  margin-top: 3.2vw;
  width: 17.0667vw;
  height: 25.3333vw;
}
.fillimg img {
  width: 100%;
}
.filminfo {
  width: 72.6213vw;
  margin-left: 3.2vw;
  padding: 3.2vw 3.7333vw 3.2vw 0;
}
.filmtitle {
  width: 58.488vw;
  height: 6.4vw;
  font-size: 4.5333vw;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.8667vw;
  display: flex;
}
.detail {
  font-size: 3.4667vw;
  color: #666;
}
.detail span {
  color: rgb(255, 187, 29);
  font-weight: 700;
  font-size: 4vw;
}
.detailR {
  margin-top: 1.48vw;
  font-size: 3.4667vw;
  color: #666;
}
.titleicon {
  background: url(../assets/v2dimax.png) no-repeat;
  width: 11.4667vw;
  height: 3.7333vw;
  margin: 1.3333vw 0.8vw 0 0;
  background-size: contain;
}
.textitle {
  padding-right: 1.3333vw;
}
</style>

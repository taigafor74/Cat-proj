<template>
  <div>
    <div class="cinema-tab">
      <span><img @click="$router.go(-1)" src="../../assets/上一页.png" /></span>
      <span>{{ movieDetail.cinema_name }}</span>
    </div>
    <div class="cinema-info">
      <div>{{ movieDetail.cinema_name }}</div>
      <div>
        <span class="span_img"><img src="../../assets/位置.png" /></span
        >{{ movieDetail.specified_address }}
      </div>
      <div>
        <span class="span_img"><img src="../../assets/电话.png" /></span
        >{{ movieDetail.cinema_phone }}
      </div>
    </div>
    <div class="cinema-swiper">
      <div
        class="swiper-item"
        ref="imglist"
        v-for="(item, index) in movieInfo"
        :key="item.movie_id"
      >
        <img @click="changeImg(index)" :src="baseUrl + item.poster" />
      </div>
    </div>
    <div class="filmIntro">
      <span class="detailmain"
        ><span ref="span1"></span> <span ref="span2"></span
      ></span>
      <span class="detailIntro">
        <span ref="span3"></span>
        <span style="margin: 0 1.0677vw">|</span>
        <span ref="span4"></span>
        <span style="margin: 0 1.0677vw">|</span>
        <span ref="span5"></span>
      </span>
    </div>
    <div style="padding: 3.3333vw">
      <div
        class="loww"
        v-for="item in movieSchedule[currentIndex]"
        :key="item.schedule_id"
      >
        <div class="s_time">
          <span>{{ item.show_time }}</span>
          <span>{{ quitTime }}散场</span>
        </div>
        <div class="hall-language">
          <span class="ii-language">{{ item.language }}3D</span>
          <span class="ii-hall">{{ item.hall_name }}</span>
        </div>
        <div style="color: rgb(224, 60, 60)">{{ item.price }}.00元</div>
        <div class="btn_buy"><span>购票</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../utils/request.js";
export default {
  name: "CinemaDetail",
  data() {
    return {
      imgList: require("../../assets/hot1.jpg"),
      movieInfo: [],
      baseUrl: "http://101.43.168.167:3000",
      movieSchedule: [],
      currentIndex: 0,
      imgarr: [],
      movieDetail: [],
      flag: 1,
    };
  },
  computed: {
    quitTime() {
      let a = this.movieSchedule[this.currentIndex][0].show_time;
      let b = this.movieSchedule[this.currentIndex][0].movie_long;
      let x = b.match(/\d+/)[0] / 60;
      let minnn = b.match(/\d+/)[0] % 60;
      let hour = a.match(/^\d{2}/)[0];
      let min = Number(a.match(/\d{2}$/)[0]);
      // let minn = x.toString().match(/\d+$/)[0];
      hour = Number(hour) + Math.floor(x);
      hour = hour < 10 ? "0" + hour.toString() : hour;
      min = minnn + min;
      min = min < 10 ? "0" + min.toString() : min;
      return `${hour}:${min}`;
    },
  },
  //25 54.2501 95.7499 -4.25 45.7499 109.6875
  mounted() {
    this.getCinemaDetail(this.$route.query.cinema_id);
    this.getMovie(this.$route.query.cinema_id);
    // this.imgarr[0].style.transform = "translateX(25vw) scale(1)";
    // this.imgarr[0].style.zIndex = "2";
    // this.imgarr[1].style.transform = "translateX(54.2501vw) scale(0.83)";
    // this.imgarr[2].style.transform = "translateX(95.7499vw) scale(0.83)";
    // this.imgarr[3].style.transform = "translateX(95.7499vw) scale(0.83)";
    // this.imgarr[4].style.transform = "translateX(95.7499vw) scale(0.83)";
  },
  updated() {
    if (this.flag == 1) {
      this.$refs.span1.innerText = this.movieInfo[this.currentIndex].name;
      this.$refs.span2.innerText =
        this.movieInfo[this.currentIndex].score || "暂无评分";
      this.$refs.span3.innerText = this.movieInfo[this.currentIndex].movie_long;
      this.$refs.span4.innerText = this.movieInfo[this.currentIndex].type;
      this.$refs.span5.innerText = this.movieInfo[this.currentIndex].actor;
      this.imgarr = this.$refs["imglist"];
      this.imgarr.forEach((item, index) => {
        if (index == 0) {
          item.style.transform = "translateX(25vw) scale(1)";
          item.style.zIndex = "2";
        } else if (index == 1) {
          item.style.transform = "translateX(54.2501vw) scale(0.83)";
        } else if (index == 2) {
          item.style.transform = "translateX(95.7499vw) scale(0.83)";
        } else {
          item.style.transform = "translateX(95.7499vw) scale(0.83)";
        }
      });
      this.flag = 0;
    }
  },

  methods: {
    getCinemaDetail(id) {
      axios
        .get(`api/getCurrentCinemaMovieSchedule?cinemaId=${id}`)
        .then((res) => {
          this.movieInfo = res.data.data.hasMovieInfo;
          this.movieSchedule = res.data.data.movieScheduleInfo;
        });
    },
    getMovie(id) {
      axios.get(`api/getCurrentCinemaDetail?cinemaId=${id}`).then((res) => {
        this.movieDetail = res.data.data;
      });
    },
    changeImg(index) {
      if (index == this.currentIndex) {
        console.log(index, this.currentIndex);
        // this.$router.go(-1);
        this.$router.push({
          path: "/FilmDetail",
          query: {
            movie_id: this.movieInfo[this.currentIndex].movie_id,
          },
        });
      }
      if (index > this.currentIndex) {
        this.$refs.span1.innerText = this.movieInfo[this.currentIndex + 1].name;
        this.$refs.span2.innerText =
          this.movieInfo[this.currentIndex + 1].score || "暂无评分";
        this.$refs.span3.innerText =
          this.movieInfo[this.currentIndex + 1].movie_long;
        this.$refs.span4.innerText = this.movieInfo[this.currentIndex + 1].type;
        this.$refs.span5.innerText =
          this.movieInfo[this.currentIndex + 1].actor;
        this.currentIndex = index;
        //////////////////////////////////////////////////////////////////
        this.$nextTick(() => {
          this.imgarr[index].style.zIndex = "2";
          this.imgarr[index].style.transform = "translateX(25vw) scale(1)";
          if (this.currentIndex >= 2) {
            this.imgarr[this.currentIndex - 2].style.transform =
              "translateX(-45.7499vw) scale(0.83)";
          }
          this.imgarr[this.currentIndex - 1].style.zIndex = "1";
          this.imgarr[this.currentIndex - 1].style.transform =
            "translateX(-4.25vw) scale(0.83)";
          if (this.currentIndex != this.imgarr.length - 1) {
            this.imgarr[this.currentIndex + 1].style.zIndex = "1";
            this.imgarr[this.currentIndex + 1].style.transform =
              "translateX(54.2501vw) scale(0.83)";
          }
        });
      }
      if (index < this.currentIndex) {
        this.$refs.span1.innerText = this.movieInfo[this.currentIndex - 1].name;
        this.$refs.span2.innerText =
          this.movieInfo[this.currentIndex - 1].score || "暂无评分";
        this.$refs.span3.innerText =
          this.movieInfo[this.currentIndex - 1].movie_long;
        this.$refs.span4.innerText = this.movieInfo[this.currentIndex - 1].type;
        this.$refs.span5.innerText =
          this.movieInfo[this.currentIndex - 1].actor;
        this.currentIndex = index;
        //////////////////////////////////////////////////////////////////
        this.$nextTick(() => {
          this.imgarr[this.currentIndex].style.zIndex = "2";
          this.imgarr[this.currentIndex].style.transform =
            "translateX(25vw) scale(1)";
          this.imgarr[this.currentIndex + 1].style.zIndex = "1";
          this.imgarr[this.currentIndex + 1].style.transform =
            "translateX(54.2501vw) scale(0.83)";
          if (this.currentIndex + 1 != this.imgarr.length - 1) {
            this.imgarr[this.currentIndex + 2].style.zIndex = "1";
            this.imgarr[this.currentIndex + 2].style.transform =
              "translateX(95.7499vw) scale(0.83)";
          }
          if (this.currentIndex != 0) {
            this.imgarr[this.currentIndex - 1].style.zIndex = "1";
            this.imgarr[this.currentIndex - 1].style.transform =
              "translateX(-4.25vw) scale(0.83)";
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.cinema-tab span:nth-child(1) {
  position: absolute;
  top: 4.3333vw;
  left: 5.3333vw;
}
.cinema-tab span:nth-child(2) {
  font-size: 4.97vw;
}
.cinema-tab img {
  width: 5.3333vw;
  height: 5.3333vw;
}
.span_img img {
  width: 5.0667vw;
  height: 5.0667vw;
}
.cinema-info div:nth-child(1) {
  color: #fff;
  font-size: 4.6vw;
  font-weight: 700;
  margin-bottom: 3.3333vw;
}
.cinema-info div:nth-child(2) {
  display: flex;
  margin-bottom: 1.6vw;
  font-size: 3.7333vw;
  line-height: 4.6vw;
  letter-spacing: 0.2667vw;
  align-items: flex-start;
}
.cinema-info div:nth-child(3) {
  display: flex;
  margin-bottom: 1.6vw;
  font-size: 3.7333vw;
  line-height: 4.6vw;
  letter-spacing: 0.2667vw;
  align-items: flex-start;
}
.btn_buy {
  width: 17.8667vw;
  border-color: rgb(153, 24, 24);
  color: rgb(224, 60, 60);
  border: 0.2133vw solid #dd2727;
  padding: 1.6vw 0;
  font-size: 3.3333vw;
  display: flex;
  justify-content: center;
  border-radius: 3.3333vw;
}
.s_time {
  display: flex;
  flex-direction: column;
}
.s_time span:nth-child(1) {
  font-weight: bolder;
  font-size: 5vw;
  margin-bottom: 1.6vw;
}
.s_time span:nth-child(2) {
  color: rgb(157, 148, 136);
  font-size: 3.3333vw;
}
.ii-language {
  font-size: 3.7333vw;
  margin-bottom: 1vw;
}
.ii-hall {
  color: rgb(157, 148, 136);
  font-size: 3.3333vw;
}
.hall-language {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loww {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2667vw solid #f1f1f1;
  padding: 3.3333vw 0;
}
.detailIntro {
  color: rgb(157, 148, 136);
  font-size: 3.7333vw;
  margin-top: 2.6667vw;
}
.detailmain {
  margin-top: 1.8333vw;
}
.detailmain span:nth-child(1) {
  line-height: 1.0667vw;
  font-weight: 700;
}
.detailmain span:nth-child(2) {
  font-size: 3.7333vw;
  color: rgb(255, 188, 26);
}
.filmIntro {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 18.6667vw;
  border-bottom: 0.5333vw solid gray;
}
.cinema-tab {
  height: 13.3333vw;
  background-color: rgb(174, 27, 27);
  color: rgb(232, 230, 227);
  display: flex;
  justify-content: center;
  align-items: center;
}
.cinema-info {
  color: #888;
  display: flex;
  flex-flow: column;
  padding: 3.3333vw;
}
.cinema-swiper {
  overflow: hidden;
  position: relative;
  height: 66.6667vw;
  background: linear-gradient(180deg, #242342 0, #11182b);
}
.swiper-item {
  position: absolute;
  height: 90%;
  width: 50%;
  transition: all 1s;
}
.cinema-swiper img {
  margin-top: 3.3333vw;
  width: 100%;
  height: 100%;
}
</style>

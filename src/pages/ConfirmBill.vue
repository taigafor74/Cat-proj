<template>
  <div>
    <div class="bill-top">
      <span>123</span>
      <span>确认订单</span>
      <span>3</span>
    </div>
    <div class="bill-info">
      <div class="b-moviename">{{ movie.name }}</div>
      <div class="b-date">
        <span class="b-span">{{ schedule.show_date }}日</span>
        <span class="b-span">{{ schedule.show_time }}</span>
        <span class="b-span">{{ movie.language }}3D</span>
      </div>
      <div class="b-cinema">{{ cinema.cinema_name }}</div>
      <div class="b-location">
        <span class="b-span">{{ schedule.hall_name }}</span>
        <span
          class="b-span"
          v-for="(item, index) in this.$store.state.mySeat"
          :key="index"
          >{{ item.row }}排{{ item.column }}座</span
        >
      </div>
    </div>
    <div class="bill-tips">
      <p class="p1">购票须知</p>
      <div>
        <p>1.请确认场次和时间无误，购买成功后将不予以退还</p>
        <p>
          2.由于设备故障等不可抗力因素，存在少量场次取消的情况，会进行退票退款
        </p>
        <p>3.由于影院系统不稳定等因素，存在出票失败的情况，会进行退款</p>

        <p>4.购票成功后，会收到取票码</p>
        <p>5.下单即代表你同意我们的用户服务协议</p>
      </div>
    </div>
    <div class="bill-phone-con">
      <div class="bill-phone">
        <label>手机号</label>
        <div class="input-phone">13682518276</div>
      </div>
      <div class="bill-phone-text">
        提示：手机号用于生成订单，并以短信方式将取票码发送到手机上
      </div>
    </div>
    <div class="bill-bottom">
      <div class="b-b-intro">
        <div style="color: #ffb400">不支持退票、改签</div>
        <div class="b-total">
          "应支付"
          <span
            >{{
              this.$store.state.mySeat.length * schedule.price || 0
            }}.00</span
          >
          <span>元</span>
        </div>
      </div>
      <div class="b-btn" @click="gopay">提交订单</div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
export default {
  name: "ConfirmBill",
  data() {
    return {
      schedule_id: this.$route.query.schedule_id,
      movie_id: this.$route.query.movie_id,
      cinema_id: this.$route.query.cinema_id,
      movie: {},
      schedule: {},
      cinema: {},
      price: 0,
    };
  },
  mounted() {
    this.getCinema(this.cinema_id);
    this.getMovie(this.movie_id);
    this.getSchedule(this.schedule_id);
    console.log(this.$store.state.seatInfo);
    console.log(this.$store.state.mySeat);
  },

  methods: {
    gopay() {
      this.$store.state.totalPrice =
        this.$store.state.mySeat.length * this.schedule.price;
      this.$router.push({
        path: "/PayPage",
        query: {
          schedule_id: this.schedule_id,
        },
      });
    },
    getCinema(id) {
      axios.get(`/api/getCurrentCinemaDetail?cinemaId=${id}`).then((res) => {
        this.cinema = res.data.data;
      });
    },
    getMovie(id) {
      axios.get(`/api/getMovieDetail?movieId=${id}`).then((res) => {
        this.movie = res.data.data[0];
      });
    },
    getSchedule(id) {
      axios.get(`/api/getScheduleById?scheduleId=${id}`).then((res) => {
        this.schedule = res.data.data;
      });
    },
  },
};
</script>

<style scoped>
.bill-top {
  width: 100%;
  height: 13.3333vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #779db0;
}
.bill-top span:nth-child(1) {
  font-size: 5.3333vw;
  position: absolute;
  left: 4vw;
}
.bill-top span:nth-child(2) {
  width: 60%;
  text-align: center;
  font-size: 4.5333vw;
}
.bill-top span:nth-child(3) {
  position: absolute;
  right: 4vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bill-info {
  margin-top: 13.3333vw;
  background-color: #779db0;
  color: #fff;
  padding: 4vw;
  height: 34.6667vw;
}
.b-moviename {
  font-size: 4.5333vw;
  font-weight: 700;
  margin-bottom: 3vw;
}
.b-date {
  margin-bottom: 3vw;
  font-size: 3vw;
}
.b-cinema {
  margin-bottom: 3vw;
  font-size: 3.3333vw;
}
.b-location {
  margin-bottom: 3vw;
  font-size: 3.3333vw;
}
.b-span {
  margin-right: 1.6vw;
  font-size: 3.3333vw;
}
.bill-tips {
  display: flex;
  flex-flow: column;
  background-color: #fff;
  padding: 4vw;
}
.p1 {
  color: #333;
  font-size: 4.0667vw;
  font-weight: 700;
  padding-bottom: 3.3333vw;
  border-bottom: 0.2667vw solid #f1f1f1;
  margin-bottom: 1.6vw;
  line-height: 5.3333vw;
  letter-spacing: 0.2667vw;
  text-align: justify;
}
.bill-tips div p {
  margin-bottom: 1.6vw;
  font-size: 3.3333vw;
  color: #888;
  line-height: 5.3333vw;
  letter-spacing: 0.2667vw;
  text-align: justify;
}
.bill-phone-con {
  background-color: #fff;
  display: flex;
  flex-flow: column;
  margin-top: 1.6vw;
}
.bill-phone {
  width: 100%;
  box-sizing: border-box;
  height: 13.3333vw;
  line-height: 13.3333vw;
  display: flex;
  border-bottom: 0.5333vw solid #f1f1f1;
}
.bill-phone label {
  width: 20%;
  color: #333;
  font-size: 4vw;
  height: 13.3333vw;
  display: flex;
  box-sizing: border-box;
  margin-left: 4vw;
}
.input-phone {
  vertical-align: middle;
  width: 80%;
  font-size: 4.5333vw;
  position: relative;
  display: inline-block;
}
.bill-phone-text {
  color: #dd2727;
  font-size: 3.3333vw;
  line-height: 5.3333vw;
  padding: 3.3333vw 4.5333vw;
  letter-spacing: 0.2667vw;
}
.bill-bottom {
  border-top: 0.2667vw solid #f1f1f1;
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 3.3333vw;
  box-sizing: border-box;
  z-index: 999;
  background-color: #fff;
}
.b-b-intro {
  width: 100%;
  margin-bottom: 3.3333vw;
  display: flex;
  justify-content: space-between;
  font-size: 3.7333vw;
  padding: 1.6vw 0;
}
.b-total {
  color: #888;
}
.b-total span:nth-child(1) {
  font-size: 4.0667vw;
  color: #dd2727;
  margin-left: 1.6vw;
}
.b-total span:nth-child(2) {
  color: #dd2727;
  font-size: 2.6667vw;
  margin-left: 1.6vw;
}
.b-btn {
  width: 100%;
  background-color: #fe9900;
  color: #fff;
  height: 10.6667vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6vw;
  font-size: 3.7333vw;
}
</style>

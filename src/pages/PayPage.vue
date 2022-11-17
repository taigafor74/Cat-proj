<template>
  <div>
    <div class="pay-header">
      <span><img @click="$router.go(-1)" src="../assets/上一页.png" /></span>
      <span>支付订单</span>
    </div>
    <div class="order-num">
      <span>
        <img class="shop" src="../assets/商家.png" />
      </span>
      <div class="order-right">
        <div>￥{{ totalPrice }}.00</div>
        <div>订单编号：28310882083108</div>
      </div>
    </div>
    <div class="pay-tap">
      <div class="pay-type">
        <img class="icon-p" src="../assets/微信支付.png" />
        <p>微信支付</p>
        <img
          class="click-p"
          @click="changepic($event)"
          ref="img1"
          :src="picUrl"
        />
      </div>
      <div class="pay-type">
        <img class="icon-p" src="../assets/支付宝.png" />
        <p>支付宝</p>
        <img
          class="click-p"
          @click="changepic($event)"
          ref="img2"
          :src="noPic"
        />
      </div>
    </div>
    <div class="pay-bottom">
      <div @click="gopay">确认支付</div>
    </div>
    <div class="msgbox" v-show="flag">
      <div class="msgheader">
        <div class="msgtitle">支付成功</div>
      </div>
      <div class="msgcontent">
        <div class="message-msg">您的取票码为:{{ phone_code }}</div>
      </div>
      <div class="msgbtn">
        <button @click="gomainpage">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
export default {
  name: "PayPage",
  data() {
    return {
      picUrl: require("../assets/勾选.png"),
      noPic: require("../assets/未勾选.png"),
      user_id: this.$store.getters.cookie,
      schedule_id: this.$route.query.schedule_id,
      ticketNum: this.$store.state.mySeat.length,
      seatInfo: this.$store.state.commitSeat,
      payType: 1,
      orderPhone: "13682518276",
      totalPrice: this.$store.state.totalPrice,
      totalSeat: this.$store.state.seatInfo,
      phone_code: 0,
      flag: 0,
    };
  },
  methods: {
    gomainpage() {
      this.$router.push({
        path: "/",
      });
    },
    changepic(e) {
      this.$refs.img1.src = this.noPic;
      this.$refs.img2.src = this.noPic;
      e.path[0].src = this.picUrl;
    },
    gopay() {
      let orderSeatInfo = this.handleStr(this.seatInfo);
      let totalSeat = this.handleStr2(this.totalSeat);
      axios
        .post("/api/order", {
          userId: this.user_id,
          scheduleId: this.schedule_id,
          orderPhone: this.orderPhone,
          orderDate: "2022-11-17",
          ticketNum: this.ticketNum,
          totalPrice: this.totalPrice,
          orderSeatInfo: orderSeatInfo,
          payType: this.payType,
        })
        .then((res) => {
          this.phone_code = res.data.data.phone_code;
          this.flag = 1;
        });

      axios
        .post("/api/updateScheduleSeat", {
          scheduleId: this.schedule_id,
          seatInfo: totalSeat,
        })
        .then((res) => {
          console.log(res);
        });
    },
    handleStr(arr) {
      let str = "[";
      arr.forEach((item) => {
        str += item + ",";
      });
      str = str + "]";
      str = str.split("");
      str.splice(str.length - 2, 1).join("");
      let newstr = "";
      str.forEach((item) => {
        newstr += item;
      });
      return newstr;
    },
    handleStr2(arr) {
      let str = "[";
      arr = arr.map((item) => {
        return item + 1;
      });
      arr.forEach((item) => {
        str += item + ",";
      });
      str = str + "]";
      str = str.split("");
      str.splice(str.length - 2, 1).join("");
      let newstr = "";
      str.forEach((item) => {
        newstr += item;
      });
      return newstr;
    },
  },
};
</script>

<style scoped>
.msgbtn button {
  color: #26a2ff;
  width: 50%;
  line-height: 35px;
  display: block;
  background-color: #fff;
  flex: 1;
  margin: 0;
  border: 0;
}
.msgbtn {
  display: flex;
  height: 10.6667vw;
  line-height: 10.6667vw;
}
.message-msg {
  color: #999;
  margin: 0;
  text-align: center;
  line-height: 9.6vw;
}
.msgcontent {
  padding: 2.6667vw 5.3333vw 4vw;
  border-bottom: 0.2667vw solid #ddd;
  min-height: 9.6vw;
  position: relative;
}
.msgtitle {
  text-align: center;
  padding-left: 0;
  margin-bottom: 0;
  font-size: 4.2667vw;
  font-weight: 700;
  color: #333;
}
.msgheader {
  padding: 4vw 0 0;
}
.msgbox {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: #fff;
  width: 85%;
  border-radius: 0.8vw;
  font-size: 4.2667vw;
  overflow: hidden;
  backface-visibility: hidden;
  border: 0.2667vw solid gray;
  transition: 0.2s;
}
.pay-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.2667vw solid #f1f1f1;
  position: fixed;
  left: 0;
  bottom: 0;
  flex-flow: column;
  padding: 3.3333vw;
  box-sizing: border-box;
  z-index: 999;
}
.pay-bottom div {
  background-color: #fe9900;
  color: #fff;
  height: 10.6667vw;
  border-radius: 1.6vw;
  font-size: 3.7333vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-p {
  width: 8vw;
  height: 8vw;
}
.click-p {
  border-radius: 50%;
  width: 8vw;
  height: 8vw;
}
.pay-type p {
  position: absolute;
  left: 16vw;
}

.pay-type {
  padding: 3.3333vw 4vw;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 0.5333vw solid #f1f1f1;
  background-color: #fff;
}
.pay-tap {
  border-top: 2.6667vw solid #f1f1f1;
  width: 100%;
  background-color: #f1f1f1;
}
.shop {
  margin-top: 2.3333vw;
  width: 13.3333vw;
  height: 13.3333vw;
}
.order-right div:nth-child(1) {
  font-size: 6.5333vw;
  margin-bottom: 2.9333vw;
}
.order-right div:nth-child(2) {
  font-size: 3.7333vw;
  letter-spacing: 0.2667vw;
}
.order-right {
  position: absolute;
  left: 29.3333vw;
  top: 5.3333vw;
  display: flex;
  flex-flow: column;
}
.order-num span {
  position: absolute;
  left: 10.6667vw;
  top: 5.3333vw;
}
.order-num {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5.3333vw;
  position: relative;
  z-index: 999;
  height: 23.3333vw;
}
.pay-header {
  background-color: #dd2727;
  color: rgb(232, 230, 227);
  height: 13.3333vw;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pay-header span:nth-child(1) {
  position: absolute;
  left: 4vw;
}
.pay-header span:nth-child(2) {
  width: 60%;
  font-size: 4.5333vw;
  text-align: center;
}
span img {
  width: 5.3333vw;
  height: 5.3333vw;
}
</style>

<template>
  <div>
    <UserTab></UserTab>
    <div class="order-item" v-for="(item, index) in data" :key="index">
      <div class="o-i-top">
        <span>{{ item.cinema_name }}</span>
        <span>已完成</span>
      </div>
      <div class="o-i-center">
        <div class="o-i-left"><img :src="basicUrl + item.poster" /></div>
        <div class="o-i-right">
          <div class="mn">{{ item.name }} {{ item.ticket_num }}张</div>
          <div class="da">
            <span>{{ item.show_date }}</span
            ><span>{{ item.show_time }}</span>
          </div>
          <div class="cnm">
            <span>{{ item.hall_name }}</span
            ><span>{{ item.order_seat_info }}</span>
          </div>
        </div>
      </div>
      <div class="o-price">
        总价：<span>{{ item.ticket_total_price }}元</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
import UserTab from "./UserTab.vue";
export default {
  name: "MyOrder",
  components: { UserTab },
  data() {
    return {
      data: [],
      basicUrl: "http://101.43.168.167:3000",
    };
  },
  mounted() {
    axios
      .get(`/api/getOrderByUserId?userId=${this.$store.getters.cookie}`)
      .then((res) => {
        this.data = res.data.data;
        console.log(this.data);
      });
  },
};
</script>

<style scoped>
img {
  height: 24vw;
}
.mn {
  font-weight: bolder;
  font-size: 3.3333vw;
  margin: 2.6667vw;
  margin-bottom: 4vw;
}
.o-i-right {
  align-self: flex-start;
}
.o-i-left {
  width: 16%;
  margin-right: 4.6667vw;
}
.order-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 4vw;
  background: #fff;
  border-bottom: 0.03rem solid #f1f1f1;
}
.o-i-top {
  padding-bottom: 1.6vw;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.7333vw;
  color: #333;
}
.o-i-center {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 3.7333vw;
  color: #333;
  justify-content: flex-start;
  padding: 1.6vw 0;
}
</style>

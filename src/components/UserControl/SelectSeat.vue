<template>
  <div>
    <div class="holecontainer">
      <div class="top-box">
        <div class="screen">{{ schedule.hall_name }}</div>
        <div class="selectIntro">
          <div><img :src="picUrl" />可选</div>
          <div><img :src="cantPic" />不可选</div>
          <div><img :src="selectPic" />已选</div>
        </div>
      </div>
      <!-- <div style="height: 12.4627vw"></div> -->
      <div class="fordown">
        <div class="sidebar">
          <span v-for="(item, index) in 6" :key="index">{{ index + 1 }}</span>
        </div>
        <div class="seatcontainer">
          <div class="center-mon"><div>屏幕中央</div></div>
          <ul class="square" v-for="(item, index) in 6" :key="index">
            <li class="spanc" v-for="(item, index1) in 10" :key="index1">
              <img
                ref="img"
                @click="changepic(index, index1, $event)"
                :src="picUrl"
                class="img1"
              />
            </li>
          </ul>
        </div>
      </div>
      <div class="C-bottom">
        <div class="test" v-show="seatCount">
          <div class="c-title">已选座位</div>
          <div style="display: flex">
            <div class="c-up" v-for="(item, index) in seat" :key="index">
              <div class="up-left">
                <span>{{ item.row }}排{{ item.column }}座</span>
                <span>36.70元</span>
              </div>
              <span style="line-height: 9.6vw" @click="deletespan(item, index)"
                >x</span
              >
            </div>
          </div>
        </div>
        <div class="c-down">确认选座</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";

export default {
  name: "SelectSeat",
  data() {
    return {
      flag: false,
      picUrl: require("../../assets/座位 (1).png"),
      selectPic: require("../../assets/座位 (2).png"),
      cantPic: require("../../assets/座位 (3).png"),
      seatCount: 0,
      seat: [],
      seat_info: [],
      alert4: true,
      schedule: {},
    };
  },

  mounted() {
    this.getSchedule(this.$route.query.schedule_id);
  },
  methods: {
    getSchedule(id) {
      axios.get(`/api/getScheduleById?scheduleId=${id}`).then((res) => {
        this.schedule = res.data.data;

        this.seat_info = this.schedule.seat_info.split(",");
        console.log(this.schedule.seat_info);
        if (this.schedule.seat_info != "[]") {
          this.seat_info[0] = this.seat_info[0].replace("[", "");
          this.seat_info[this.seat_info.length - 1] = this.seat_info[
            this.seat_info.length - 1
          ].replace("]", "");
          this.seat_info = this.seat_info.map((item) => {
            return item - 1;
          });
          this.seat_info.forEach((item) => {
            this.$refs.img[item].src = this.cantPic;
          });
        }
      });
    },
    deletespan(item, index) {
      const originColumn = item.column - 1;
      const originRow = item.row - 1;
      const arrindex = originRow * 10 + originColumn;
      this.seat.splice(index, 1);
      this.seatCount--;
      console.log(this.seat);
      this.$refs.img[arrindex].src =
        this.$refs.img[arrindex].src == this.selectPic
          ? this.picUrl
          : this.selectPic;
    },
    changepic(index, index1, e) {
      const column = index1 + 1;
      const row = index + 1;
      let repeatindex = 0;
      let flag = false;
      if (this.seat.length) {
        this.seat.forEach((item, index) => {
          if (item.row == row && item.column == column) {
            repeatindex = index;
            flag = true;
          }
        });
      }
      if (e.path[0].src != this.cantPic) {
        if (flag) {
          e.path[0].src =
            e.path[0].src == this.selectPic ? this.picUrl : this.selectPic;
          this.seat.splice(repeatindex, 1);
          this.seatCount--;
          this.alert4 = true;
        } else {
          if (this.alert4) {
            e.path[0].src =
              e.path[0].src == this.selectPic ? this.picUrl : this.selectPic;
            this.seat.push({ row, column });
            this.seatCount++;
            if (this.seat.length == 4) {
              this.alert4 = false;
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.c-title {
  margin-bottom: 3.7333vw;
  font-size: 3.7333vw;
  font-weight: 700;
}
.test {
  height: 22vw;
}
.c-up {
  width: 25%;
  border: 1px solid white;
  display: flex;
  justify-content: space-around;
  margin-right: 1.3333vw;
}
.up-left {
  display: flex;
  flex-direction: column;
}
.up-left span:nth-child(1) {
  color: rgb(168, 160, 149);
  font-size: 3.7333vw;
}
.up-left span:nth-child(2) {
  color: red;
  font-size: 3.2vw;
}
.c-down {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 3.7333vw;
  background-color: #fe9900;
  height: 10.6667vw;
  border-radius: 2.6667vw;
}
.C-bottom {
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 4.2667vw 3.3333vw 3.3333vw 3.3333vw;
}
.seatcontainer {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.fordown {
  display: flex;
  justify-content: center;
}
.square {
  height: 6.6667vw;
  width: 100%;
  margin: 0.5333vw;
  cursor: pointer;
  display: flex;
  margin-bottom: 2.6667vw;
  list-style: none;
}
.spanc {
  height: 4.2667vw;
  width: 4.2667vw;
  margin-right: 4vw;
  margin-bottom: 8vw;
}
.img1 {
  width: 7vw;
  height: 7vw;
}
.holecontainer {
  overflow: hidden;
  height: 136.6667vw;
  width: 100%;
  display: flex;
  background-color: #f1f1f1;
  flex-direction: column;
  /* position: relative; */
}
.top-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5.3333vw;
}
.screen {
  width: 53.3333vw;
  font-size: 3.9667vw;
  background-color: #dcdcdc;
  border-bottom-left-radius: 5.3333vw;
  border-bottom-right-radius: 5.3333vw;
  text-align: center;
}
.selectIntro {
  font-size: 3.3333vw;
  display: flex;
  margin-top: 2.6667vw;
}

.selectIntro div {
  margin-right: 2.6667vw;
  display: flex;
  align-items: center;
}

.selectIntro img {
  margin-right: 1.3333vw;
  width: 4vw;
  height: 4vw;
}
.sidebar {
  width: 5.3333vw;
  height: 69.3333vw;
  color: white;
  background-color: hsla(0, 0%, 66%, 0.8);
  font-size: 3.53vw;
  border-radius: 2.6667vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.3533vw;
  margin-right: 4vw;
}
.center-mon {
  position: absolute;
  font-size: 1.8667vw;
  top: -2.1333vw;
  width: 16vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6.5333vw;
  background-color: rgb(229, 226, 226);
  border-radius: 1.3333vw;
}
</style>

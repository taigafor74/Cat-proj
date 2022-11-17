<template>
  <div>
    <UserTab></UserTab>
    <div class="user_info">
      <div class="user_info_list">
        <div class="info_item">
          <span>头像</span>
          <div class="info_right"><img :src="baseUrl + data.avatar" /></div>
        </div>
        <div class="info_item">
          <span>名称</span>
          <span class="info_right">{{ data.user_name }}</span>
        </div>
        <div class="info_item">
          <span>性别</span>
          <span class="info_right">{{ data.sex }}</span>
        </div>
        <div class="info_item">
          <span>生日</span>
          <span class="info_right">{{ data.birthday }}</span>
        </div>
        <div class="info_item">
          <span>个人签名</span>
          <span class="info_right">{{ data.sign }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
import UserTab from "./UserTab.vue";
export default {
  name: "MyInfo",
  components: { UserTab },
  data() {
    return {
      data: {},
      baseUrl: "http://101.43.168.167:3000",
    };
  },
  mounted() {
    axios
      .get(`/api/getUserInfo?userId=${this.$route.query.userId}`)
      .then((res) => {
        this.data = res.data.data;
        console.log(this.data);
      });
  },
};
</script>

<style scoped>
.user_info {
  background-color: rgb(255, 255, 255);
  font-size: 4.2667vw;
  width: 100%;
}
.user_info_list {
  margin-top: 5.3333vw;
  background-color: rgb(248, 253, 255);
}
.info_item {
  border-bottom-color: rgb(52, 56, 58);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4vw 4.8vw;
  border-bottom: 0.2667vw solid #f1f1f1;
  position: relative;
}
.info_right {
  color: rgb(157, 148, 136);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60%;
}
.info_right img {
  height: 13.3333vw;
  width: 13.3333vw;
}
</style>

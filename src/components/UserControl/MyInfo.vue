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
    <div class="exit-btn" @click="exit">退出登录</div>
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
  methods: {
    exit() {
      this.clearCookie();
      alert("退出成功");
      this.$router.push({ path: "/UserPage" });
      this.$router.go(0);
    },
    clearCookie() {
      var keys = document.cookie.match(/[^ =;]+(?==)/g);
      if (keys) {
        for (var i = keys.length; i--; ) {
          document.cookie =
            keys[i] + "=0;path=/;expires=" + new Date(0).toUTCString(); //清除当前域名下的,例如：m.kevis.com
          document.cookie =
            keys[i] +
            "=0;path=/;domain=" +
            document.domain +
            ";expires=" +
            new Date(0).toUTCString(); //清除当前域名下的，例如 .m.kevis.com
          document.cookie =
            keys[i] +
            "=0;path=/;domain=kevis.com;expires=" +
            new Date(0).toUTCString(); //清除一级域名下的或指定的，例如 .kevis.com
        }
      }
      console.log("已清除");
    },
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
.exit-btn {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: red;
  height: 13.3333vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: orangered;
  border-top-left-radius: 2.6667vw;
  border-top-right-radius: 2.6667vw;
}
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

<template>
  <div>
    <div class="LoginContainer">
      <div class="login-top">
        <img @click="$router.go(-1)" src="../../assets/取消.png" />
      </div>
      <div class="header-logo">
        <img src="../../assets/电影院-激活.png" />
        <p>Made by kwn74</p>
      </div>
      <div class="logint-type" ref="type">
        <div class="login-way active" @click="changeClass1">验证码登录</div>
        <div class="login-way" ref="img" @click="changeClass2">密码登录</div>
      </div>
      <div class="login-main">
        <form>
          <div class="login-phone" v-show="flag">
            <input class="login-input" placeholder="手机号" />
            <button class="input-button">获取验证码</button>
            <input class="login-input" placeholder="验证码" />
            <div class="warndetail">
              温馨提示：未注册的手机号，验证后将自动注册账户，且代表已同意
              <a>《服务协议与隐私政策》</a>
            </div>
          </div>
          <div class="login-phone" v-show="!flag">
            <input class="login-input" v-model="pwdName" placeholder="用户名" />
            <button class="eyes">123</button>
            <input class="login-input" v-model="pwdPass" placeholder="密码" />
            <div class="captcha" ref="captcha" @click="changeCpatcha"></div>
            <input class="login-input" v-model="pwdCap" placeholder="验证码" />
          </div>
        </form>
      </div>

      <button class="login-button" @click="pwdLogin">登录</button>
    </div>
  </div>
</template>

<script>
import axios from "@/utils/request";
export default {
  name: "UserLogin",
  data() {
    return {
      flag: true,
      pwdName: "",
      pwdPass: "",
      pwdCap: "",
    };
  },
  mounted() {
    console.log(document.cookie);
    axios.get("/api/captcha").then((res) => {
      this.$refs.captcha.innerHTML = res.data;
    });
  },
  methods: {
    pwdLogin() {
      axios
        .post("/api/pwdLogin", {
          userName: this.pwdName,
          password: this.pwdPass,
          captcha: this.pwdCap,
        })
        .then((res) => {
          if (res.data.success_code == 200) {
            alert("登陆成功!");
            this.$router.push({ path: "/" });
            this.$router.go(0);
          } else {
            alert("登陆失败,请检查信息!");
            this.$router.push({ path: "/" });
            this.$router.go(0);
          }
        });
    },
    changeCpatcha() {
      axios.get("/api/captcha").then((res) => {
        this.$refs.captcha.innerHTML = res.data;
      });
    },
    changeClass1() {
      let arr = Array.from(this.$refs.type.children);
      arr.forEach((item) => {
        item.classList.toggle("active");
      });
      this.flag = !this.flag;
    },
    changeClass2() {
      let arr = Array.from(this.$refs.type.children);
      arr.forEach((item) => {
        item.classList.toggle("active");
      });
      this.flag = !this.flag;
    },
  },
};
</script>

<style>
.captcha {
  background-color: rgb(255, 255, 255);
  width: 21.7584vw;
  height: 7.2528vw;
  position: absolute;
  top: 30.6vw;
  z-index: 999;
  right: 16px;
}
svg {
  width: 21.7584vw;
  height: 7.2528vw;
}
.eyes {
  position: absolute;
  top: 17.6vw;
  z-index: 999;
  right: 15px;
}
.LoginContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.login-top {
  width: 100%;
  height: 13.3333vw;
  padding: 2.6667vw 0 0 4.3333vw;
  display: flex;
  justify-content: start;
}
.login-top img {
  height: 6.6667vw;
  width: 6.6667vw;
}
.header-logo img {
  width: 26.6667vw;
  height: 26.6667vw;
}
.header-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logint-type {
  display: flex;
  align-items: center;
  margin-bottom: 3.8333vw;
}
.login-way {
  margin: 3.3333vw;
  padding-bottom: 2.8vw;
  font-size: 3.3333vw;
  font-weight: 700;
}
.logint-type .active {
  color: #dd2727;
  border-bottom: 0.5333vw solid #dd2727;
}
.login-phone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login-input {
  height: 10.6667vw;
  width: 70vw;
  border: 0.2667vw solid #888;
  border-radius: 1.6vw;
  outline: 0;
  padding-left: 2.6667vw;
  margin-bottom: 3.6vw;
}
.warndetail {
  width: 70vw;
  color: #888;
  font-size: 3.2vw;
  line-height: 5.1667vw;
  margin-bottom: 3.3333vw;
}
.warndetail a {
  color: #dd2727;
  text-decoration: dashed;
  text-decoration: underline;
}
.login-phone {
  position: relative;
}
.input-button {
  position: absolute;
  top: 3.2vw;
  right: 4.8vw;
  border: 0;
  z-index: 999;
  color: #ccc;
  font-size: 3.2vw;
  background: transparent;
  outline: none;
}
.login-button {
  display: block;
  width: 70%;
  height: 10.6667vw;
  border-radius: 1.6vw;
  background: #dd2727;
  color: #fff;
  text-align: center;
  font-size: 4vw;
  line-height: 10.6667vw;
  border: 0;
}
</style>

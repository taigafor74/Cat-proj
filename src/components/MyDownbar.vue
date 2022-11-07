<template>
  <div class="downbar">
    <div class="db">
      <router-link to="/ChoseSeat"
        ><img src="../assets/448afce485c1f342895185c2be668fa411803.png"
      /></router-link>
    </div>
    <a src="#">发现最新最热电影</a>
    <router-link to="/">打开App</router-link>
  </div>
</template>

<script>
export default {
  name: "MyDownbar",
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.downbar {
  position: relative;
  width: 100vw;
  height: 16vw;
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 0 3.4667vw 0 3.4667vw;
  border-bottom: 0.2667vw solid gray;
}
.db {
  display: flex;
  align-items: center;
}
.db img {
  width: 25.0667vw;
  height: 10.4vw;
}
.downbar :nth-child(2) {
  position: absolute;
  right: 25.4667vw;
  font-size: 3.6667vw;
  font-weight: 620;
  color: #666;
}
.downbar :nth-child(3) {
  position: absolute;
  right: 3.4667vw;
  font-size: 4.1vw;
  font-weight: 700;
  color: #b37e7e;
}
</style>

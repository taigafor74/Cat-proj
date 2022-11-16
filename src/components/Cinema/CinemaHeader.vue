<template>
  <div class="tabHeader">
    <span class="c-location">广州</span>
    <span class="c-normal">影院</span>
    <span class="c-span"
      ><router-link to="/SearchCinema"
        ><img src="../../assets/搜索.png" /></router-link
    ></span>
  </div>
</template>

<script>
export default {
  name: "CinemaHeader",
};
</script>

<style scoped>
.c-location {
  width: 20%;
  text-align: center;
}
.c-span {
  width: 20%;
  text-align: center;
  margin-top: 1.3333vw;
}
.c-span img {
  width: 6.4vw;
  height: 6.4vw;
}
.tabHeader {
  display: flex;
  align-items: center;
  height: 13.3333vw;
  width: 100%;
  font-size: 4vw;
  background-color: #dd2727;
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
}
.c-normal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  font-size: 4.6667vw;
}
</style>

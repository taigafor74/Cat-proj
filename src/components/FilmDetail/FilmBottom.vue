<template>
  <div class="bottom-C">
    <img
      src="https://obj.pipi.cn/festatic/asgard/resources/images/movie/share-icon.png"
    />
    <div class="buyticket" @click="gotoselect()">特惠购票</div>
  </div>
</template>

<script>
export default {
  name: "FilmBottom",
  props: ["movie_id"],
  methods: {
    gotoselect() {
      this.$router.push({
        path: "/BuyCinema",
        query: {
          movie_id: this.movie_id,
        },
      });
    },
  },
};
</script>

<style>
.bottom-C {
  height: 16vw;
  width: 100.088vw;
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 1.3333vw;
  border-top-right-radius: 1.3333vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.bottom-C img {
  width: 5.0667vw;
  height: 5.0667vw;
  margin-left: 6.4vw;
  margin-right: 8vw;
}
.buyticket {
  flex: 1;
  font-size: 4.5333vw;
  border-radius: 6.6667vw;
  background-image: linear-gradient(-90deg, rgb(172, 3, 3), rgb(155, 0, 21));
  height: 11.7333vw;
  text-align: center;
  margin: 0 2.6667vw;
  color: rgb(232, 230, 227);
  line-height: 11.2333vw;
}
</style>

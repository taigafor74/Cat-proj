<template>
  <div class="bottom">
    <router-link
      :to="routerUrl[index]"
      v-for="(item, index) in imglist"
      :key="index"
      ><span><img :src="item.url" ref="imglist" @click="clickme(index)" /></span
      ><span>{{ item.text }}</span></router-link
    >
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  data() {
    return {
      imglist: [
        {
          url: require("../assets/首页.png"),
          active: require("../assets/首页-激活.png"),
          text: "首页",
        },
        {
          url: require("../assets/电影院.png"),
          active: require("../assets/电影院-激活.png"),
          text: "电影",
        },
        {
          url: require("../assets/影院.png"),
          active: require("../assets/影院-激活.png"),
          text: "影院",
        },
        {
          url: require("../assets/用户.png"),
          active: require("../assets/用户-激活.png"),
          text: "我的",
        },
      ],
      routerUrl: ["/", "/FilmPage", "/CinemaPage", "/UserPage"],
      currentIndex: 0,
    };
  },
  methods: {
    clickme(index1) {
      this.imglist.forEach((item, index) => {
        if (index1 == index) {
          this.$refs.imglist[index1].src = item.active;
        } else {
          this.$refs.imglist[index].src = item.url;
        }
      });
    },
  },
  mounted() {
    this.currentIndex = this.routerUrl.indexOf(this.$route.path);
    this.imglist.forEach((item, index) => {
      if (this.currentIndex == index) {
        this.$refs.imglist[this.currentIndex].src = item.active;
      } else {
        this.$refs.imglist[index].src = item.url;
      }
    });
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.bottom {
  border-top: 0.01rem solid #d8d8d8;
  font-size: 2.6667vw;
  width: 100.088vw;
  height: 12.9787vw;
  display: flex;
  background-color: #fff;
}
.bottom a {
  display: flex;
  color: white;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 6.6667vw;
  height: 6.6667vw;
}
a span img {
  width: 6.6667vw;
  height: 6.6667vw;
}
</style>

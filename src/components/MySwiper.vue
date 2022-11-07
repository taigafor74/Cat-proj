<template>
  <div>
    <div class="Swiper-Container">
      <div
        @touchstart="touchgo"
        @touchmove="gomove"
        @touchend="leavebye"
        ref="imgList"
        class="imgList setTrans"
      >
        <img src="http://localhost:3000/static/img/1.1abcd57.jpg" />
        <img src="http://localhost:3000/static/img/2.cf7651e.jpg" />
        <img src="http://localhost:3000/static/img/3.cafea12.jpg" />
        <img src="http://localhost:3000/static/img/4.3dfbc92.jpg" />
        <img src="http://localhost:3000/static/img/1.1abcd57.jpg" />
      </div>
      <ul class="uList">
        <li v-for="(item, index) in 4" @click="showindex(index)" :key="index">
          <img src="../assets/点.png" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySwiper",
  data() {
    return {
      imgForIndex: 0,
      timer: function () {},
      startx: 0,
      movex: 0,
      flag: false,
    };
  },
  methods: {
    leavebye() {
      const imgList = this.$refs.imgList;
      if (this.flag) {
        if (Math.abs(this.movex) > 187.5) {
          if (this.movex > 0) {
            this.imgForIndex--;
          } else {
            this.imgForIndex++;
          }
        }
      }
      imgList.style.transform = `translateX(${this.imgForIndex * -100}vw)`;
      this.change();
    },
    touchgo(TouchEvent) {
      this.startx = TouchEvent.targetTouches[0].pageX;
      clearInterval(this.timer);
    },
    gomove(TouchEvent) {
      const imgList = this.$refs.imgList;
      this.movex = TouchEvent.targetTouches[0].pageX - this.startx;
      // console.log(this.movex);
      imgList.style.transform = `translateX(${
        this.imgForIndex * -100 + this.movex
      }vw)`;
      TouchEvent.preventDefault();
      this.flag = true;
    },
    swiper() {
      const imgList = this.$refs.imgList;
      const amount = imgList.children;
      //   const timer = setInterval(() => {
      //     imgList.style.transform = `translateX(${-100}vw)`;
      //   }, 1000);
      //   timer();
      // console.log(amount.length);
    },
    change() {
      this.timer = setInterval(this.intimer, 1000);
    },
    showindex(e) {
      this.imgForIndex = e;
      const imgList = this.$refs.imgList;
      imgList.style.transform = `translateX(${e * -100}vw)`;
    },
    intimer() {
      const imgList = this.$refs.imgList;
      if (!imgList.classList.contains("setTrans")) {
        imgList.classList.toggle("setTrans");
      }
      const amount = imgList.children.length;
      if (this.imgForIndex == 5) {
        clearInterval(this.timer);
        imgList.classList.toggle("setTrans");
        imgList.style.transform = `translateX(${0}vw)`;
        this.imgForIndex = 0;
        this.change();
      } else {
        imgList.style.transform = `translateX(${this.imgForIndex * -100}vw)`;
        this.imgForIndex = this.imgForIndex < amount ? ++this.imgForIndex : 0;
      }
    },
  },

  computed: {
    imgIndex() {
      const imgList = this.$refs.imgList;
      const amount = imgList.children.length;
      return amount;
    },
  },
  mounted() {
    this.change();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.Swiper-Container {
  height: 40vw;
  width: 100%;
  background-color: red;
  overflow: hidden;
}
.imgList {
  display: flex;
  position: relative;
}
.setTrans {
  transition: all 1s;
}
.imgList img {
  height: 40vw;
  width: 100vw;
}
.uList {
  position: absolute;
  width: 100vw;

  display: flex;
  justify-content: center;
  bottom: 0;
}
.uList li {
  display: inline-block;
}
li img {
  width: 5.3333vw;
  height: 5.3333vw;
}
</style>

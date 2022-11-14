<template>
  <div>
    <div
      ref="imgbox"
      @touchstart="touchIn"
      @touchend="touchout"
      @touchmove="touchmo"
      class="Swiper-Container"
    >
      <transition name="slide">
        <ul ref="ul" class="imgList cleart">
          <li>
            <img src="http://101.43.168.167:3000/static/img/4.3dfbc92.jpg" />
          </li>
          <li>
            <img src="http://101.43.168.167:3000/static/img/1.1abcd57.jpg" />
          </li>
          <li>
            <img src="http://101.43.168.167:3000/static/img/2.cf7651e.jpg" />
          </li>
          <li>
            <img src="http://101.43.168.167:3000/static/img/3.cafea12.jpg" />
          </li>
          <li>
            <img src="http://101.43.168.167:3000/static/img/4.3dfbc92.jpg" />
          </li>
          <li>
            <img src="http://101.43.168.167:3000/static/img/1.1abcd57.jpg" />
          </li>
        </ul>
      </transition>
      <!-- <ul class="uList">
        <li v-for="(item, index) in 4" @click="showindex(index)" :key="index">
          <img src="../assets/点.png" />
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NewSwiper",
  data() {
    return {
      currentIndex: 1,
      startx: 0,
      endx: 0,
      timer: null,
    };
  },
  methods: {
    touchIn(e) {
      clearInterval(this.timer);
      this.startx = e.targetTouches[0].pageX;
      const ul = document.querySelector(".imgList");
      const imgwidth = this.$refs.imgbox.offsetWidth;
      if (this.currentIndex == 0) {
        ul.classList.toggle("cleart");
        this.currentIndex = ul.children.length - 2;
        ul.style.left = -imgwidth * this.currentIndex + "px";
      }
      if (this.currentIndex == ul.children.length - 1) {
        ul.classList.toggle("cleart");
        this.currentIndex = 2;
        ul.style.left = -imgwidth * this.currentIndex + "px";
      }
    },
    touchmo(e) {
      const ul = this.$refs.ul;
      const imgwidth = this.$refs.imgbox.offsetWidth;
      ul.classList.toggle("cleart");
      let uleaft = ul.offsetLeft;
      console.log(imgwidth, uleaft);
      this.disx = e.targetTouches[0].pageX - this.startx;
      ul.style.left = -imgwidth * this.currentIndex + this.disx + "px";
    },
    touchout(e) {
      const ul = this.$refs.ul;
      const imgwidth = this.$refs.imgbox.offsetWidth;
      this.endx = e.changedTouches[0].pageX;
      //   console.log(this.startx, imgwidth, this.endx);
      if (!ul.classList.contains("cleart")) {
        ul.classList.toggle("cleart");
      }
      if (this.endx - this.startx > imgwidth / 3) {
        if (this.currentIndex <= 0) {
          this.currentIndex = ul.children.length - 3;
        } else {
          this.currentIndex--;
        }
      } else if (this.endx - this.startx < -imgwidth / 3) {
        if (this.currentIndex >= ul.children.length - 1) {
          this.currentIndex = 2;
        } else {
          this.currentIndex++;
        }

        console.log("向zuo ");
      } else {
        console.log("不动");
      }
      ul.style.left = -imgwidth * this.currentIndex + "px";

      this.autoplay();
    },
    autoplay() {
      const ul = this.$refs.ul;
      const imgwidth = this.$refs.imgbox.offsetWidth;
      this.timer = setInterval(() => {
        if (!ul.classList.contains("cleart")) {
          ul.classList.toggle("cleart");
        }
        if (this.currentIndex >= ul.children.length - 1) {
          ul.classList.toggle("cleart");
          this.currentIndex = 1;
        } else {
          this.currentIndex++;
        }
        ul.style.left = -imgwidth * this.currentIndex + "px";
      }, 1000);
    },
  },
  mounted() {
    const imgwidth = this.$refs.imgbox.offsetWidth;
    const ul = this.$refs.ul;
    ul.style.width = ul.children.length * imgwidth + "px";
    ul.style.left = -imgwidth * this.currentIndex + "px";
    // console.log(ul, imgwidth);
    this.autoplay();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped>
.Swiper-Container {
  height: 40vw;
  background-color: red;
  position: relative;
  overflow: hidden;
}
.cleart {
  transition: all 0.3s;
}
.imgList {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  align-items: center;
}

.imgList li {
  list-style: none;
  height: 100%;
  width: 100%;
}
li img {
  height: 40vw;
  width: 100%;
}

.uList {
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  bottom: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}
.uList li {
  display: inline-block;
}
/* li img {
  width: 5.3333vw;
  height: 5.3333vw;
} */
</style>

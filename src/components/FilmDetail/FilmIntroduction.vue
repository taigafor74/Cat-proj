<template>
  <div class="I-container">
    <div class="I-title">
      <span>简介</span>
      <div>
        <button @click="addEvent" class="open">
          {{ open ? "展开↓" : "收起↑" }}
        </button>
      </div>
    </div>
    <div class="forP no">
      <p ref="refdiv2" class="pClass">
        {{ intro }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmIntroduction",
  props: ["intro"],
  data() {
    return {
      open: true,
    };
  },
  methods: {
    addEvent() {
      // this.$refs.refdiv2.classList.toggle("no");
      this.$refs.refdiv2.classList.toggle("pClass");
      this.open = !this.open;
    },
  },
};
</script>

<style>
.I-container {
  color: white;
  width: 91.5547vw;
  padding-top: 4.2667vw;
  background-color: rgb(46, 46, 66);
  border-radius: 2.6667vw;
  padding: 3.2vw;
  margin-bottom: 5.3333vw;
}
.I-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.fullheight {
  height: 59.2vw;
}
button {
  font-size: 3.2vw;
  color: rgb(232, 230, 227);
  background-color: transparent;
  border: 0;
}
.forP {
  overflow: hidden;
  font-size: 4vw;
  line-height: 6.9333vw;
  transition: all 0.7s ease-in-out;
}
.no {
  overflow: hidden;
}
.pClass {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
}
</style>

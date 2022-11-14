<template>
  <div class="loading-con">
    <div class="dots">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 7"></span>
      <span style="--i: 8"></span>
      <span style="--i: 9"></span>
      <span style="--i: 10"></span>
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 13"></span>
      <span style="--i: 14"></span>
      <span style="--i: 15"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyLoading",
};
</script>

<style scoped>
.loading-con {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dots span {
  position: absolute;
  height: 2.6667vw;
  width: 2.6667vw;
  background: rgb(2, 2, 2);
  border-radius: 50%;
  transform: rotate(calc(var(--i) * (360deg / 15))) translateY(35px);
  animation: animate 1.5s linear infinite;
  animation-delay: calc(var(--i) * 0.1s);
  opacity: 0;
}
@keyframes animate {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

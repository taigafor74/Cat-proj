<template>
  <div style="margin-top: 3vw">
    <div class="Score-Container">
      <div class="Score-Title">
        <div><span>口碑</span></div>
        <div><span>1人想看</span></div>
      </div>
      <div class="mark">
        <div class="star">
          <span><i class="el-icon-star-on"></i></span>
          <span><i class="el-icon-star-on"></i></span>
          <span><i class="el-icon-star-on"></i></span>
          <span><i class="el-icon-star-on"></i></span>
          <span><i class="el-icon-star-on"></i></span>
        </div>
        <div class="score-right">
          <div class="score-point">0<span class="score-small">分</span></div>
          <div class="score-sub">暂无人评</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmScore",
};
</script>

<style scoped>
.Score-Container {
  border-radius: 3vw;
  overflow: hidden;
  height: 31.0667vw;
  background-color: rgb(46, 46, 66);
  padding: 3.3333vw;
}
.Score-Title {
  height: 7.4667vw;
  margin-bottom: 3.3333vw;

  display: flex;
  justify-content: space-between;
}
.mark {
  height: 13.6vw;
  display: flex;
  justify-content: space-between;
}
.el-icon-star-on {
  font-size: 8vw;
  color: yellow;
}
.Score-Title div:nth-child(1) span {
  font-weight: bolder;
}
.Score-Title div:nth-child(2) span {
  font-size: 2.6667vw;
}
.score-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(255, 188, 26);
}
.score-sub {
  margin-top: -1.3333vw;
  font-size: 1.333vw;
}
.score-point {
  font-size: 9.0667vw;
  font-weight: bolder;
}
.score-small {
  font-size: 3.3333vw;
}
</style>

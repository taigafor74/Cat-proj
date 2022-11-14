<template>
  <div class="commentCon">
    <div class="comment-header">
      <span>评论</span>
      <span class="joincomment">参与评论</span>
    </div>
    <div v-if="!data" style="padding: 3.3333vw">暂无评论！</div>
    <div class="main-comment" v-if="data">
      <div class="comment-top">精选评论</div>
      <div class="comment-down">
        <div class="comment-left"><img :src="baseUrl + data.avatar" /></div>
        <div class="comment-right">
          <div>{{ data.user_name }}</div>
          <div>给这部作品打了{{ data.user_score }}分</div>
          <div>{{ data.comment_content }}</div>
          <div>{{ data.comment_date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmComment",
  props: ["commentData"],
  data() {
    return {
      data: {},
      baseUrl: "http://101.43.168.167:3000/",
    };
  },
  watch: {
    commentData: {
      handler(newval) {
        console.log(newval);
        this.data = newval;
        this.data.comment_date =
          this.data.comment_date.match(/(?<=-)\d{2}-\d{2}/)[0];
        console.log(this.data.comment_date);
      },
    },
  },
  created() {
    console.log(this.data.avatar);
  },
};
</script>

<style>
.joincomment {
  background: red;
  border-radius: 1.6vw;
  font-size: 3.2vw;
  padding: 1.8667vw;
}
.commentCon {
  width: 100%;
  padding: 3.3333vw;
  background-color: rgb(24, 26, 27);
  border-top-left-radius: 2.6667vw;
  border-top-right-radius: 2.6667vw;
  overflow: hidden;
}
.comment-left {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  overflow: hidden;
}
.comment-left img {
  width: 100%;
  height: 100%;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 13.3333vw;
}
.comment-header span:nth-child(1) {
  padding: 3.3333vw;
}
.comment-top {
  font-weight: lighter;
  font-size: 3.3333vw;
}
.comment-down {
  display: flex;
  padding-top: 1.5vw;
}
.main-comment {
  padding: 3.3333vw;
}
.comment-right {
  margin: 0 3.3333vw 3.3333vw;
  font-size: 4vw;
  width: 100%;
}
.comment-down div:nth-child(1) {
  font-size: 3.3333vw;
  font-weight: bolder;
  margin-bottom: 1.3333vw;
}
.comment-down div:nth-child(2) {
  font-size: 2.6667vw;
  font-weight: lighter;
  margin-bottom: 1.3333vw;
}
.comment-down div:nth-child(3) {
  font-size: 4vw;
  line-height: 5.3333vw;
  margin-bottom: 1.3333vw;
  text-align: justify;
}
.comment-down div:nth-child(4) {
}
</style>

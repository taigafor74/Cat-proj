<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field v-model="id" name="id" placeholder="id" />
      <van-field v-model="filmname" name="filmname" placeholder="filmname" />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
      <van-uploader :after-read="afterRead" />
    </van-form>

    <div v-for="(item, index) in data" :key="index" class="img">
      <div>{{ url + item.img }}</div>
      <img :src="url + item.img + `.png`" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TestInsert",
  data() {
    return {
      id: "",
      filmname: "",
      filetext: "",
      data: [],
      url: "http://localhost:3087/",
    };
  },
  methods: {
    onSubmit(values) {
      values.filetext = this.filetext;
      //   console.log(this.filetext);
      axios.post("http://localhost:3087/film/postfilm", values).then((res) => {
        console.log(res);
      });
      //   axios.get("http://localhost:3087/film/getallfilm").then((res) => {
      //     console.log(res);
      //   });
    },
    afterRead(file) {
      this.filetext = file.content;
    },
  },
  created() {
    axios.get("http://localhost:3087/film/getallfilm").then((res) => {
      this.data = res.data;
      console.log(this.data[0].img);
    });
  },
};
</script>

<style>
.img img {
  width: 100px;
  height: 100px;
}
</style>

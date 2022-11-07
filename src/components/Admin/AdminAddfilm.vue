<template>
  <div class="adfilm-c">
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="Date" prop="id"> </el-table-column>
      <el-table-column label="Name" prop="filmname"> </el-table-column>
      <el-table-column label="img" prop="img">
        <template slot-scope="scope">
          <el-image
            style="width: 50px; height: 50px; margin-bottom: -4px"
            :src="url + scope.row.img + '.png'"
          >
          </el-image>
        </template>
      </el-table-column>
      <el-table-column label="intro" prop="intro"> </el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div v-if="showOrnot" class="showbox">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="影片名">
          <el-input v-model="form.filmname"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input type="textarea" v-model="form.intro"></el-input>
        </el-form-item>

        <van-uploader :after-read="afterRead" />

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="reject">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminAddfilm",
  data() {
    return {
      fileList: [
        // // Uploader 根据文件后缀来判断是否为图片文件
        // // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { name: "", url: "" },
      ],
      tableData: [],
      form: {
        filmname: "",
        filetext: "",
        intro: "",
      },
      showOrnot: false,
      search: "",
      url: "http://localhost:3087/",
    };
  },
  methods: {
    reject() {
      this.form = {};
      this.showOrnot = !this.showOrnot;
    },
    handleEdit(index, row) {
      this.showOrnot = !this.showOrnot;
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    onSubmit() {
      console.log("submit!");
      console.log(this.fileList);
      axios
        .post("http://localhost:3087/film/postfilm", this.form)
        .then((res) => {
          console.log(res);
        });
    },
    afterRead(file) {
      this.form.filetext = file.content;
    },
    handleChange(file) {
      this.fileList = [file];
    },
  },
  mounted() {
    axios.get("http://localhost:3087/film/getallfilm").then((res) => {
      this.tableData = res.data;

      console.log(this.tableData);
    });
  },
};
</script>

<style>
.adfilm-c {
  width: 100%;
  height: 100%;
  border: 1px solid white;
  position: relative;
}
.showbox {
  position: absolute;
  top: 25%;
  left: 25%;

  width: 400px;
  height: 400px;
  display: flex;
  z-index: 999;
  background-color: #000;
  justify-content: center;
  align-items: center;
}
</style>

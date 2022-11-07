<template>
  <div class="c-con">
    <router-link to="/ForAdmin/AdminAddfilm"
      ><div>
        <img src="../../assets/用户.png" /><span>用户管理</span>
      </div></router-link
    >
    <router-link to="/ForAdmin/AdminAdduser"
      ><div>
        <img src="../../assets/旗子.png" /><span>电影管理</span>
      </div></router-link
    >
    <router-link to="/ForAdmin/AdminAdduser"
      ><div>
        <img src="../../assets/电影院.png" /><span>影院管理</span>
      </div></router-link
    >
    <router-link to="/ForAdmin/AdminAdduser"
      ><div>
        <img src="../../assets/影院.png" /><span>影厅管理</span>
      </div></router-link
    >
    <router-link to="/ForAdmin/AdminAdduser"
      ><div>
        <img src="../../assets/排序题.png" /><span>电影排片</span>
      </div></router-link
    >
    <router-link to="/ForAdmin/AdminAdduser"
      ><div>
        <img src="../../assets/评论.png" /><span>评论管理</span>
      </div></router-link
    >
    <router-link to="/ForAdmin/AdminAdduser"
      ><div>
        <img src="../../assets/订单.png" /><span>订单管理</span>
      </div></router-link
    >
  </div>
</template>

<script>
export default {
  name: "AdminAside",
};
</script>

<style scoped>
.c-con {
  width: 190px;
  height: 360px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(197, 196, 196);
  box-shadow: 3px 3px 3px 3px gray;
  border-radius: 5px;
}
.c-con a {
  flex: 1;
  display: flex;
  align-items: center;
}
img {
  width: 25px;
  height: 30px;
  margin-right: 10px;
  margin-left: 20px;
}
.c-con div:hover {
  background-color: rgb(84, 150, 247);
}
.c-con div:last-child {
  border: 0;
}
a {
  color: #fff;
  text-decoration: none;
  display: block;
}
</style>

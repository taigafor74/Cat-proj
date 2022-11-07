<template>
  <div class="Littlecontainer">
    <router-link to="/">猫眼电影></router-link>
    <span>{{ filmname }}</span>
  </div>
</template>

<script>
export default {
  name: "LittileNav",
  props: ["filmname"],
};
</script>

<style scoped>
.Littlecontainer {
  width: 100%;
  height: 5.6vw;
  margin-bottom: 4vw;
  color: rgb(200, 195, 188);
  font-size: 3.7333vw;
}
.Littlecontainer a {
  text-decoration: none;
  color: rgb(200, 195, 188);
}
</style>

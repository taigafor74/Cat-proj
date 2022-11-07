<template>
  <div>
    <MyHeader></MyHeader>
    <MyDownbar></MyDownbar>
    <TopNav></TopNav>
    <SelectSeat></SelectSeat>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader.vue";
import MyDownbar from "../components/MyDownbar.vue";
import TopNav from "../components/TopNav.vue";
import SelectSeat from "@/components/UserControl/SelectSeat.vue";
export default {
  name: "ChoseSeat",
  components: { SelectSeat, MyHeader, MyDownbar, TopNav },
};
</script>

<style></style>

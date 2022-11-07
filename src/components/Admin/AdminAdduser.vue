<template>
  <div>
    <button @click="gogo">123</button>
    <AdminTest @add123="add123"></AdminTest>
    <AbAc :user="user"></AbAc>
  </div>
</template>

<script>
import AdminTest from "./AdminTest.vue";
import AbAc from "./AbAc.vue";
export default {
  name: "AdminAdduser",
  components: { AdminTest, AbAc },
  data() {
    return {
      i: 0,
      user: [
        {
          id: 0,
          content: "kk",
        },
        {
          id: 1,
          content: "yy",
        },
        {
          id: 2,
          content: "zz",
        },
        {
          id: 3,
          content: "xx",
        },
      ],
    };
  },
  methods: {
    // addd() {
    //   console.log(this.i);
    //   let b = Math.random() * 20;
    //   this.user.push({ id: b, content: this.i });
    // },
    // deleteli(itemx) {
    //   console.log(itemx);
    //   this.user = this.user.filter((item) => item.id != itemx);
    // },
    gogo() {
      this.parentMessage = "hello";
    },
    add123(e) {
      console.log(e);
      let b = Math.random() * 20;
      this.user.push({ id: b, content: e });
      console.log(this.user);
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <input v-model="i" />
    <button @click="addd">添加</button>
  </div>
</template>

<script>
export default {
  name: "AdminTest",
  data() {
    return {
      i: 0,
    };
  },
  methods: {
    addd() {
      this.$emit("add123", this.i);
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <ul>
      <li v-for="item in users" :key="item.id">
        {{ item.content }} <button @click="deleteli(item.id)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AbAc",
  props: ["user"],
  data() {
    return {
      users: this.user,
    };
  },
  methods: {
    deleteli(itemx) {
      this.users = this.users.filter((item) => item.id != itemx);
    },
  },
};
</script>

<style></style>

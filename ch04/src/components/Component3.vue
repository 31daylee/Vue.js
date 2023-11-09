<script setup>
import { provide } from "vue";
import Component4 from "./Component4.vue";
const user2 = {
  name: "홍길동",
  age: 32,
  addr: "서울",
};

provide("user2", user2);
</script>
<template>
  <h4>Component3</h4>
  <Component4 />
</template>
<style scoped></style>

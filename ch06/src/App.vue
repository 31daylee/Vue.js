<script setup>
import { useMainStore } from "./store/mainStore";
import MyComponent1 from "./components/myComponent1.vue";
import MyComponent2 from "./components/myComponent2.vue";
const mainStore = useMainStore();
</script>

<template>
  <h3>ch06. Pinia 실습</h3>

  <!-- store의 state (=상태 값) 출력-->
  <p>
    mainStore title : {{ mainStore.title }}<br />
    mainStore count : {{ mainStore.count }}<br />
  </p>
  <p>cities : {{ mainStore.cities }}</p>
  <table border="1">
    <tr>
      <td>아이디</td>
      <td>이름</td>
      <td>나이</td>
    </tr>
    <tr v-for="person in mainStore.people">
      <td>{{ person.uid }}</td>
      <td>{{ person.name }}</td>
      <td>{{ person.age }}</td>
    </tr>
  </table>
  <MyComponent1 />
  <MyComponent2 />
</template>

<style scoped></style>

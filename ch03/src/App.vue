<script setup>
import MyComponent1 from "./components/MyComponent1.vue";
import MyComponent2 from "./components/MyComponent2.vue";
import MyComponent3 from "./components/MyComponent3.vue";
import OptionComponent1 from "./components/OptionComponent1.vue";
import OptionComponent2 from "./components/OptionComponent2.vue";
import OptionComponent3 from "./components/OptionComponent3.vue";
</script>

<template>
  <h3>ch03. Component</h3>

  <h4>1. Component</h4>
  <MyComponent1 />
  <!--MyComponent1 에서 작성한 컴포넌트가 삽입 & 자동으로 import 생성 완료-->
  <MyComponent2 />
  <MyComponent3 />

  <h4>2. Options API</h4>
  <OptionComponent1 />
  <OptionComponent2 />
  <OptionComponent3 />

  <h4>3. Component 통신</h4>

  <h4>4. Component 생명주기</h4>
</template>

<style scoped></style>

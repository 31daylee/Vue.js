<script>
import MyComponent4 from "./MyComponent4.vue";

export default {
  name: "MyComponent3",
  components: { MyComponent4 } /*하위 컴포넌트 추가 시 필수 항목*/,
};
</script>
<template>
  <h4>MyComponent3</h4>
  <p>부모 컴포넌트</p>

  <MyComponent4 />
</template>

<style scoped>
h4 {
  color: green;
}
</style>

<script>
export default {
  name: "PropsComponent1",
  props: ["name", "age"] /* 상위에서 전달된 props 를 받기 위한 */,
};
</script>
<template>
  <h3>PropsComponent1</h3>
  <p>
    props name : {{ name }} <br />
    props age : {{ age }}
  </p>
  <!--상위로 전달 될 이벤트 -->
</template>

<style scoped></style>

<script>
export default {
  name: "LifeComponent",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btnAdd: function () {
      this.count++;
    },
  },
  // 컴포넌트 라이프 사이클 함수(Hook)
  beforeCreate: function () {
    console.log("beforeCreate...");
  },
  created: function () {
    console.log("created...");
  },
  beforeMount: function () {
    console.log("beforeMount...");
  },
  mounted: function () {
    console.log("mounted...");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate...");
  },
  beforeUnmount: function () {
    console.log("beforeUnmount...");
  },
  unmounted: function () {
    console.log("unmounted...");
  },
};
</script>
<template>
  <h4>LifeCycleComponent</h4>
  <p>카운터:{{ count }}</p>
  <button @click="btnAdd">증가</button>
</template>
<style scoped></style>

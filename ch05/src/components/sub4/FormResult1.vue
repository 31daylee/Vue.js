<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = router.query;
</script>
<template>
  <h4>FormResult1</h4>
  <p>
    name :
    {{}}
    age : {{}}
  </p>
</template>
<style scoped></style>

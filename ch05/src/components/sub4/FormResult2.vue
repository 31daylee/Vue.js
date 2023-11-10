<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = router.params;
</script>
<template>
  <h4>FormResult2</h4>
  <p>
    name :
    {{ user.name }}, age : {{ user.age }},addr : {{ user.addr }}
  </p>
</template>
<style scoped></style>

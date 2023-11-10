<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <h4>Parent</h4>
  <p><RouterLink to="/parent/child1">child1</RouterLink>&nbsp;</p>
  <p><RouterLink to="/parent/child2">child2</RouterLink>&nbsp;</p>

  <RouterView></RouterView>
</template>
<style scoped></style>

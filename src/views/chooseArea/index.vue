<template>
  <j-choose-area @change="changeArea" />
</template>

<script setup lang="ts">
let changeArea = (value: any) => {
  console.log(value);
};
</script>

<style scoped lang="scss"></style>

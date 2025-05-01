<template>
  <div>
    <j-progress :percentage="80" is-animation @complete="handleComplete" />
  </div>
</template>

<script setup lang="ts">
let handleComplete = () => {
  console.log("complete");
};
</script>

<style scoped lang="scss"></style>

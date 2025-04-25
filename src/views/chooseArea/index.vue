<template>
  <j-choose-area @change="changeArea" />
</template>

<script setup lang="ts">
import jChooseArea from "../../components/chooseArea/src/index.vue";

let changeArea = (value: any) => {
  console.log(value);
};
</script>

<style scoped lang="scss"></style>

<template>
  <div>
    <j-choose-icon
      title="选择图标"
      :visible="visible"
      @update:visible="visible = $event"
      >选择图标</j-choose-icon
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import jChooseIcon from "../../components/chooseIcon/src/index.vue";

let visible = ref<boolean>(false);
</script>

<style scoped></style>

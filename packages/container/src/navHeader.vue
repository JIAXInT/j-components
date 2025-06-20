<template>
  <div class="header">
    <span @click="toggleCollapse">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
let props = defineProps<{
  collapse: boolean;
}>();

let emits = defineEmits(["update:collapse"]);
let toggleCollapse = () => {
  emits("update:collapse", !props.collapse);
};
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>

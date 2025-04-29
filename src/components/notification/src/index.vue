<template>
  <el-popover placement="top-start" :width="300" trigger="hover">
    <template #default> <slot name="content"></slot> </template>
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon${toLine(props.icon)}`" /> </el-badge
    ></template>
  </el-popover>
</template>

<script setup lang="ts">
import { toLine } from "../../../utils";

let props = defineProps({
  icon: {
    type: String,
    default: "Bell",
  },
  value: {
    type: [Number, String],
    default: "",
  },
  max: {
    type: Number,
    default: 99,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>

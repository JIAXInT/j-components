<!-- 时间选择器组件，包含开始时间和结束时间两个选择器 -->
<template>
  <div style="display: flex; gap: 20px">
    <el-time-select
      v-model="startTime"
      style="width: 240px"
      :max-time="endTime"
      class="mr-4"
      :placeholder="startPlaceholder"
      :start="startTimeStart"
      :step="startStep"
      :end="startTimeEnd"
      v-bind="$attrs.startOptions!"
    />
    <el-time-select
      v-model="endTime"
      style="width: 240px"
      :min-time="startTime"
      :placeholder="endPlaceholder"
      :start="endTimeStart"
      :step="endStep"
      :end="endTimeEnd"
      :disable="endTimeDisable"
      v-bind="$attrs.endOptions!"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

// 组件props定义
let props = defineProps({
  // 开始时间选择器的占位文本
  startPlaceholder: {
    type: String,
    default: "开始时间",
  },
  // 结束时间选择器的占位文本
  endPlaceholder: {
    type: String,
    default: "结束时间",
  },
  // 开始时间选择器的最早可选时间
  startTimeStart: {
    type: String,
    default: "08:30",
  },
  // 开始时间选择器的最晚可选时间
  startTimeEnd: {
    type: String,
    default: "18:30",
  },
  // 开始时间选择器的时间间隔
  startStep: {
    type: String,
    default: "00:15",
  },
  // 结束时间选择器的时间间隔
  endStep: {
    type: String,
    default: "00:15",
  },
  // 结束时间选择器的最早可选时间
  endTimeStart: {
    type: String,
    default: "08:30",
  },
  // 结束时间选择器的最晚可选时间
  endTimeEnd: {
    type: String,
    default: "18:30",
  },
});

let emits = defineEmits(["startChange", "endChange"]);

// 开始时间选择器的当前值
let startTime = ref<string>("08:30");
// 结束时间选择器的当前值
let endTime = ref<string>("18:30");

let endTimeDisable = ref<boolean>(true); // 结束时间选择器是否禁用

// 监听开始时间选择器的值变化，更新结束时间选择器的禁用状态
watch(
  () => startTime.value,
  (val) => {
    if (val === "") {
      endTime.value = ""; // 清空结束时间
      endTimeDisable.value = true; // 禁用结束时间选择器
    } else {
      endTimeDisable.value = false; // 启用结束时间选择器
      emits("startChange", val); // 触发开始时间变化事件，传递当前时间值
    }
  }
);

// 监听结束时间选择器的值变化，更新开始时间选择器的禁用状态
watch(
  () => endTime.value,
  (val) => {
    if (val !== "") {
      emits("endChange", {
        startTime: startTime.value,
        endTime: val,
      }); // 触发结束时间变化事件
    }
  }
);
</script>

<style scoped lang="scss"></style>

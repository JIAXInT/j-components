<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledDate"
        v-bind="$attrs.startOptions!"
      ></el-date-picker>
    </div>
    <div>
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabled-date="endDisabledDate"
        v-bind="$attrs.endOptions!"
      ></el-date-picker>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

let props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  // 是否禁用选择今天之前的日期
  disabledBeforeToday: {
    type: Boolean,
    default: true,
  },
});

let emits = defineEmits(["startChange", "endChange"]);

// 开始日期
let startDate = ref<Date | null>(null);
// 结束日期
let endDate = ref<Date | null>(null);
// 控制结束日期的禁用状态
let endDateDisabled = ref<boolean>(true);

// 禁用开始日期的函数
let startDisabledDate = (time: Date) => {
  if (props.disabledBeforeToday) {
    return time.getTime() < Date.now() - 8.64e7; // 禁用今天之前的日期
  }
};
// 禁用结束日期的函数;1
let endDisabledDate = (time: Date) => {
  if (startDate.value) {
    return time.getTime() < startDate.value.getTime() + 8.64e7; // 禁用开始日期之前的日期
  }
};

// 监听开始日期的变化
watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      endDateDisabled.value = true;
      endDate.value = null;
    } else {
      emits("startChange", val); // 触发 startChange 事件并传递选中的日期作为参数
      endDateDisabled.value = false;
    }
  }
);

// 监听结束日期的变化
watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits("endChange", {
        startDate: startDate.value,
        endDate: val,
      }); // 触发 endChange 事件并传递选中的日期作为参数
    }
  }
);
</script>

<style scoped lang="scss"></style>

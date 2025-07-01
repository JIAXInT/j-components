<!--
  时间范围选择器组件 (Time Range Selector)
  
  功能描述：
  1. 提供开始时间和结束时间的双时间选择器
  2. 自动处理时间范围的联动关系（开始时间必须早于结束时间）
  3. 自定义时间范围、时间步长和占位文本
  4. 提供时间变化的事件回调
  
  使用示例：
  <j-choose-time
    startPlaceholder="上班时间"
    endPlaceholder="下班时间"
    startTimeStart="09:00"
    startTimeEnd="18:00"
    startStep="00:30"
    endTimeStart="09:30"
    endTimeEnd="20:00"
    endStep="00:30"
    @startChange="handleStartTimeChange"
    @endChange="handleEndTimeChange"
  />
-->

<!-- 时间选择器组件，包含开始时间和结束时间两个选择器 -->
<template>
  <div style="display: flex; gap: 20px">
    <!-- 
      开始时间选择器 - 使用h函数渲染
      1. 通过modelValue和onUpdate:modelValue替代v-model双向绑定
      2. maxTime限制不能选择晚于结束时间的时间
      3. 合并从父组件传入的startOptions属性
    -->
    <component
      :is="
        h(
          ElTimeSelect,
          {
            modelValue: startTime,
            'onUpdate:modelValue': (val) => (startTime = val),
            style: 'width: 240px',
            // maxTime: endTime,
            class: 'mr-4',
            placeholder: startPlaceholder,
            start: startTimeStart,
            step: startStep,
            end: startTimeEnd,
            ...($attrs.startOptions || {}),
          },
          $slots
        )
      "
    />

    <!-- 
      结束时间选择器 - 使用h函数渲染
      1. minTime限制不能选择早于开始时间的时间
      2. disable控制在未选择开始时间时禁用结束时间选择器
      3. 合并从父组件传入的endOptions属性
    -->
    <component
      :is="
        h(
          ElTimeSelect,
          {
            modelValue: endTime,
            'onUpdate:modelValue': (val) => (endTime = val),
            style: 'width: 240px',
            minTime: startTime,
            placeholder: endPlaceholder,
            start: endTimeStart,
            step: endStep,
            end: endTimeEnd,
            disable: endTimeDisable,
            ...($attrs.endOptions || {}),
          },
          $slots
        )
      "
    />
  </div>
</template>

<script setup lang="ts">
import { ElTimeSelect, type TimeSelectProps } from "element-plus";
import { h, ref, watch } from "vue";

/**
 * 时间选择器组件属性接口
 * 继承ElementPlus的TimeSelectProps，并添加自定义属性
 */
interface chooseTimeProps extends Partial<TimeSelectProps> {
  startPlaceholder: string; // 开始时间选择器的占位文本
  endPlaceholder: string; // 结束时间选择器的占位文本
  startTimeStart: string; // 开始时间选择器的开始时间点
  startTimeEnd: string; // 开始时间选择器的结束时间点
  startStep: string; // 开始时间选择器的时间间隔步长
  endTimeStart: string; // 结束时间选择器的开始时间点
  endTimeEnd: string; // 结束时间选择器的结束时间点
  endStep: string; // 结束时间选择器的时间间隔步长
}

// 组件props定义
let props = withDefaults(defineProps<chooseTimeProps>(), {
  startPlaceholder: "开始时间",
  endPlaceholder: "结束时间",
  startTimeStart: "08:30",
  startTimeEnd: "18:30",
  startStep: "00:15",
  endTimeStart: "08:30",
  endTimeEnd: "18:30",
  endStep: "00:15",
});

// 定义组件事件
let emits = defineEmits(["startChange", "endChange"]);

// 开始时间选择器的当前值
let startTime = ref<string>("");
// 结束时间选择器的当前值
let endTime = ref<string>("");

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

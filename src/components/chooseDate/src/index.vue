<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <component
        :is="
          h(
            ElDatePicker,
            {
              modelValue: startDate,
              'onUpdate:modelValue': (val) => (startDate = val),
              type: 'date',
              placeholder: startPlaceholder,
              disabledDate: startDisabledDate,
              ...($attrs.startOptions || {}),
            },
            $slots
          )
        "
      />
    </div>
    <div>
      <component
        :is="
          h(
            ElDatePicker,
            {
              modelValue: endDate,
              'onUpdate:modelValue': (val) => (endDate = val),
              type: 'date',
              placeholder: endPlaceholder,
              disabled: endDateDisabled,
              disabledDate: endDisabledDate,
              ...($attrs.endOptions || {}),
            },
            $slots
          )
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, h, getCurrentInstance } from "vue";
import { ElDatePicker, type DatePickerProps } from "element-plus";

/**
 * 日期选择器组件属性接口
 */
interface ChooseDateProps extends Partial<DatePickerProps> {
  startPlaceholder?: string;
  endPlaceholder?: string;
  // 是否禁用选择今天之前的日期
  disabledBeforeToday?: boolean;
}

// 组件props定义
let props = withDefaults(defineProps<ChooseDateProps>(), {
  startPlaceholder: "请选择开始日期",
  endPlaceholder: "请选择结束日期",
  disabledBeforeToday: true,
});

// 获取组件实例
const vm = getCurrentInstance();

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
// 禁用结束日期的函数
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

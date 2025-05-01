<!-- 进度条组件模板，使用el-progress显示进度 -->
<template>
  <el-progress :percentage="p"></el-progress>
</template>

<script setup lang="ts">
import { onMounted, ref, defineEmits } from "vue";

// 组件props定义
let props = defineProps({
  // 进度百分比(0-100)
  percentage: {
    type: Number,
    default: 0,
  },
  // 是否启用动画效果
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // 动画持续时间(毫秒)
  time: {
    type: Number,
    default: 3000,
  },
});

// 定义组件事件
const emit = defineEmits(["complete"]); // 进度完成时触发

let p = ref(0);
// 组件挂载后处理进度逻辑
onMounted(() => {
  // 如果启用动画效果
  if (props.isAnimation) {
    // 规定时间内加载完成
    let t = Math.ceil(props.time / props.percentage);
    let timer = setInterval(() => {
      p.value++;
      if (p.value >= props.percentage) {
        p.value = props.percentage;
        clearInterval(timer); // 清除定时器
        emit("complete"); // 触发完成事件
      }
    }, t);
  } else {
    p.value = props.percentage;
  }
});
</script>

<style scoped lang="scss"></style>

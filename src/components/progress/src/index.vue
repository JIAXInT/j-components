<template>
  <component
    :is="
      h(
        ElProgress,
        {
          percentage: p,
          ...props,
          ...$attrs,
        },
        $slots
      )
    "
  ></component>
</template>

<script lang="ts" setup>
import { onMounted, ref, h, getCurrentInstance } from "vue";
import { ElProgress, type ProgressProps } from "element-plus";

// 获取组件实例
const vm = getCurrentInstance();

/**
 * 进度条组件属性接口
 */
interface JProgressProps extends Partial<ProgressProps> {
  // 进度条进度
  percentage: number;
  // 是否有动画效果
  isAnimate?: boolean;
  // 动画时长(毫秒)
  time?: number;
}

// 组件props定义
let props = withDefaults(defineProps<JProgressProps>(), {
  isAnimate: false,
  time: 3000,
});

// 当前显示的进度值
let p = ref(props.isAnimate ? 0 : props.percentage);

onMounted(() => {
  if (props.isAnimate) {
    // 规定时间内加载完成
    let t = Math.ceil(props.time / props.percentage);
    let timer = setInterval(() => {
      p.value += 1;
      if (p.value >= props.percentage) {
        p.value = props.percentage;
        clearInterval(timer);
      }
    }, t);
  }
});
</script>

<style lang="scss" scoped></style>

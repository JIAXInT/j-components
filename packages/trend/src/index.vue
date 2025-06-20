<template>
  <!-- 趋势组件容器 -->
  <div class="trend">
    <!-- 文字部分，支持插槽或默认文本 -->
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <!-- 图标部分，根据趋势类型显示不同图标 -->
    <div class="icon">
      <!-- 动态组件渲染，根据type显示上升或下降图标 -->
      <component
        :is="`el-icon${toLine(upIcon)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      />
      <component
        :is="`el-icon${toLine(downIcon)}`"
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, useSlots } from "vue";
import { toLine } from "../../utils";

let props = defineProps({
  // 标记当前的趋势是上升还是下降(up/down)
  type: {
    type: String,
    default: "up",
  },
  // 上升趋势的图标
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  // 下降趋势的图标
  downIcon: {
    type: String,
    default: "ArrowDown",
  },
  // 趋势形式的文字
  text: {
    type: String,
    default: "上升",
  },
  // 颜色反转（只在默认颜色下生效）
  reverseColor: {
    type: Boolean,
    default: false,
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: "#f5222d",
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: "#52c41a",
  },
  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: "#000",
  },
  // 下降趋势文字颜色
  downTextColor: {
    type: String,
    default: "#000",
  },
});

onMounted(() => {
  // 如果传递了颜色反转
  if (props.reverseColor) {
    let temp = props.upIconColor;
    // 由于 props 是只读的，不能直接修改，这里通过定义响应式变量来处理
    let upIconColor = ref(props.upIconColor);
    upIconColor.value = props.downIconColor;
    let downIconColor = ref(props.downIconColor);
    downIconColor.value = temp;
  }
});

// 获取插槽内容
let slots = useSlots();

// 文字颜色
let textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor;
});
</script>

<style scoped lang="scss">
/* 趋势组件基础样式 */
.trend {
  display: flex;
  align-items: center;
  gap: 5px;
  /* 文字样式 */
  .text {
    font-size: 12px;
    color: #666;
    margin-right: 4px;
  }
  /* 图标样式 */
  .icon {
    font-size: 12px;
    color: #333;
    svg {
      width: 1em;
      height: 1em;
    }
  }
}
</style>

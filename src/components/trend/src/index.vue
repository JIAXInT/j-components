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
      <!-- 使用h函数渲染动态图标组件 -->
      <component
        :is="
          h(
            resolveComponent(
              `el-icon${toLine(type === 'up' ? upIcon : downIcon)}`
            ),
            {
              style: {
                color:
                  type === 'up'
                    ? !reverseColor
                      ? upIconColor
                      : downIconColor
                    : !reverseColor
                    ? downIconColor
                    : upIconColor,
              },
              ...($attrs.iconOptions || {}),
            }
          )
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  useSlots,
  h,
  resolveComponent,
  getCurrentInstance,
} from "vue";
import { toLine } from "../../../utils";

/**
 * 趋势组件属性接口
 */
interface TrendProps {
  // 标记当前的趋势是上升还是下降(up/down)
  type?: string;
  // 上升趋势的图标
  upIcon?: string;
  // 下降趋势的图标
  downIcon?: string;
  // 趋势形式的文字
  text?: string;
  // 颜色反转（只在默认颜色下生效）
  reverseColor?: boolean;
  // 上升趋势图标颜色
  upIconColor?: string;
  // 下降趋势图标颜色
  downIconColor?: string;
  // 上升趋势文字颜色
  upTextColor?: string;
  // 下降趋势文字颜色
  downTextColor?: string;
}

// 组件props定义
let props = withDefaults(defineProps<TrendProps>(), {
  type: "up",
  upIcon: "ArrowUp",
  downIcon: "ArrowDown",
  text: "上升",
  reverseColor: false,
  upIconColor: "#f5222d",
  downIconColor: "#52c41a",
  upTextColor: "#000",
  downTextColor: "#000",
});

// 获取组件实例
const vm = getCurrentInstance();

// 获取插槽内容
let slots = useSlots();

// 文字颜色
let textColor = computed(() => {
  // 确保type有有效值
  const safeType =
    props.type && ["up", "down"].includes(props.type) ? props.type : "up";
  return safeType === "up" ? props.upTextColor : props.downTextColor;
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

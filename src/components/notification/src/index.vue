<template>
  <!-- 使用h函数动态渲染ElPopover组件，合并属性并传递插槽 -->
  <component
    :is="h(ElPopover, { ...$attrs, ...props, ref: changeRef }, $slots)"
  >
    <template #default>
      <slot name="default"></slot> <slot name="content"></slot>
    </template>
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon${toLine(props.icon)}`" />
      </el-badge>
    </template>
  </component>
</template>

<script setup lang="ts">
import { getCurrentInstance, h } from "vue";
import { toLine } from "../../../utils";
import { type PopoverProps, ElPopover } from "element-plus";

// 定义组件属性接口，继承PopoverProps并添加自定义属性
interface NotificationProps extends Partial<PopoverProps> {
  icon?: string; // 图标名称
  value?: number | string; // 通知数量
  max?: number; // 最大显示数量
  isDot?: boolean; // 是否显示为小圆点
}

// 定义属性并设置默认值
const props = withDefaults(defineProps<NotificationProps>(), {
  icon: "Bell",
  value: "",
  max: 99,
  isDot: false,
  width: 300,
  placement: "top-start",
});

// 获取当前组件实例
const vm = getCurrentInstance();

/**
 * 改变引用，暴露内部ElPopover组件实例
 *
 * 实现目的：
 * 1. 在使用h函数渲染组件时，默认情况下无法从外部获取到ElPopover实例
 * 2. 通过此函数，将ElPopover实例设置为当前组件的exposed和exposeProxy
 * 3. 这样父组件可以通过ref引用来控制弹出框，例如：
 *    - 手动触发弹出框的显示/隐藏: popoverRef.value.hide()
 *    - 访问弹出框内部状态
 *    - 调用弹出框方法
 *
 * @param inputInstance ElPopover组件实例
 */
const changeRef = (inputInstance: any) => {
  if (vm) {
    vm.exposed = inputInstance || {};
    vm.exposeProxy = inputInstance || {};
  }
};
</script>

<style scoped lang="scss">
:deep(.el-badge__content) {
  cursor: pointer !important;
}
</style>

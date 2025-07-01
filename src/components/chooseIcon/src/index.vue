<template>
  <div class="j-choose-icon-dialog-body-height">
    <!-- 触发弹窗按钮 -->
    <component
      :is="
        h(
          ElButton,
          {
            onClick: handleClick,
            type: 'primary',
            ...($attrs.buttonOptions || {}),
          },
          { default: () => ($slots.default ? $slots.default() : '选择图标') }
        )
      "
    />

    <!-- 图标选择弹窗 -->
    <component
      :is="
        h(
          ElDialog,
          {
            title: title,
            modelValue: visible,
            'onUpdate:modelValue': (val) => emits('update:visible', val),
            ...($attrs.dialogOptions || {}),
          },
          {
            default: () =>
              h(
                'div',
                { class: 'container' },
                Object.keys(ElIcons).map((item) =>
                  h(
                    'div',
                    {
                      class: 'item',
                      onClick: () => clickItem(item),
                      key: item,
                    },
                    [
                      h('div', {}, [
                        h(resolveComponent(`el-icon${toLine(item)}`), {
                          style: 'font-size: 20px; margin-right: 10px',
                        }),
                      ]),
                      h('div', { class: 'icon' }, item),
                    ]
                  )
                )
              ),
          }
        )
      "
    />
  </div>
</template>

<script setup lang="ts">
import * as ElIcons from "@element-plus/icons-vue";
import { toLine } from "../../../utils/index";
import { useCopy } from "../../../hooks/useCopy/index";
import { h, resolveComponent, getCurrentInstance } from "vue";
import { ElButton, ElDialog } from "element-plus";

// 获取组件实例
const vm = getCurrentInstance();

// 组件参数
interface ChooseIconProps {
  title: string; // 弹窗标题
  visible: boolean; // 显示状态
}

// 组件props定义
let props = defineProps<ChooseIconProps>();

// 事件定义
let emits = defineEmits<{
  (e: "update:visible", value: boolean): void;
}>();

// 切换弹窗显示
let handleClick = () => {
  emits("update:visible", !props.visible);
};

// 图标点击处理
let clickItem = (item: string) => {
  useCopy(`<el-icon${toLine(item)} />`); // 复制图标代码
  emits("update:visible", false); // 关闭弹窗
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  cursor: pointer;
  font-size: 14px;
}

.icon {
  flex: 1;
}

svg {
  width: 1.5em;
  height: 1.5em;
}
</style>

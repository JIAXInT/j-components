<template>
  <div class="j-choose-icon-dialog-body-height">
    <!-- 触发弹窗按钮 -->
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>

    <!-- 图标选择弹窗 -->
    <el-dialog
      :title="title"
      :model-value="visible"
      @update:model-value="emits('update:visible', $event)"
    >
      <!-- 图标展示区 -->
      <div class="container">
        <div
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
          class="item"
          @click="clickItem(item)"
        >
          <div>
            <!-- 动态渲染图标 -->
            <component
              :is="`el-icon${toLine(item)}`"
              style="font-size: 20px; margin-right: 10px"
            />
          </div>
          <div class="icon">{{ item }}</div>
          <!-- 图标名称 -->
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as ElIcons from "@element-plus/icons-vue";
import { toLine } from "../../utils/index";
import { useCopy } from "../../hooks/useCopy/index";

// 组件参数
let props = defineProps<{
  title: string; // 弹窗标题
  visible: boolean; // 显示状态
}>();

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

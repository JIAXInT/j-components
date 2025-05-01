<template>
  <!-- 菜单组件容器 -->
  <el-menu :default-active="defaultActive" :router="router" v-bind="$attrs">
    <!-- 遍历菜单数据，渲染菜单项 -->
    <template v-for="(item, index) in data" :key="index">
      <!-- 无子菜单的菜单项 -->
      <el-menu-item
        v-if="!item.children || !item.children.length"
        :index="item.index"
      >
        <component
          v-if="item.icon"
          :is="`el-icon${toLine(item.icon)}`"
        ></component>
        <span>{{ item.name }}</span>
      </el-menu-item>
      <!-- 有子菜单的菜单项 -->
      <el-sub-menu
        v-if="item.children && item.children.length"
        :index="item.index"
      >
        <template #title>
          <component
            v-if="item.icon"
            :is="`el-icon${toLine(item.icon)}`"
          ></component>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(child, index) in item.children"
          :key="index"
          :index="child.index"
        >
          <component
            v-if="child.icon"
            :is="`el-icon${toLine(child.icon)}`"
          ></component>
          <span>{{ child.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { MenuItem } from "./type";
import { toLine } from "../../../utils";

// 组件props定义
let props = defineProps({
  // 菜单数据，必须传入
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
  // 默认激活的菜单项
  defaultActive: {
    type: String,
    default: "1",
  },
  // 是否启用路由模式
  router: {
    type: Boolean,
    default: false,
  },
});

console.log(props.data);
</script>

<style scoped lang="scss">
svg {
  margin-right: 5px;
}
</style>

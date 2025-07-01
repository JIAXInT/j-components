<template>
  <!-- 菜单组件容器 -->
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :router="router"
    :collapse="isCollapse"
    v-bind="$attrs"
  >
    <!-- 遍历菜单数据，渲染菜单项 -->
    <template v-for="(item, i) in data" :key="i">
      <!-- 无子菜单的菜单项 -->
      <el-menu-item
        v-if="!item[children] || !item[children].length"
        :index="item[index]"
      >
        <component
          v-if="item[icon]"
          :is="`el-icon${toLine(item[icon])}`"
        ></component>
        <span>{{ item[name] }}</span>
      </el-menu-item>
      <!-- 有子菜单的菜单项 -->
      <el-sub-menu
        v-if="item[children] && item[children].length"
        :index="item[index]"
      >
        <template #title>
          <component
            v-if="item[icon]"
            :is="`el-icon${toLine(item[icon])}`"
          ></component>
          <span>{{ item[name] }}</span>
        </template>
        <el-menu-item
          v-for="(child, index2) in item[children]"
          :key="index2"
          :index="child[index]"
        >
          <component
            v-if="child[icon]"
            :is="`el-icon${toLine(child[icon])}`"
          ></component>
          <span>{{ child[name] }}</span>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import { toLine } from "../../../utils";

// 组件props定义
let props = defineProps({
  // 菜单数据，必须传入
  data: {
    type: Array as PropType<any[]>,
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
  // 是否折叠菜单
  isCollapse: {
    type: Boolean,
    default: false,
  },
  // 菜单标题键名
  name: {
    type: String,
    default: "name",
  },
  index: {
    type: String,
    default: "index",
  },
  icon: {
    type: String,
    default: "icon",
  },
  children: {
    type: String,
    default: "children",
  },
});
</script>

<style scoped lang="scss">
svg {
  margin-right: 5px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>

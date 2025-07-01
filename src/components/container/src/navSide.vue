<template>
  <j-menu
    :data="data"
    :default-active="$route.path"
    :router="true"
    :isCollapse="isCollapse"
  ></j-menu>
</template>

<script setup lang="ts">
const props = defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
});

let data = [
  {
    icon: "House",
    name: "首页",
    index: "/",
  },
  {
    icon: "Menu",
    name: "基础组件",
    index: "/basic",
    children: [
      {
        icon: "Select",
        name: "图标选择器",
        index: "/chooseIcon",
      },
      {
        icon: "Location",
        name: "省市区选择",
        index: "/chooseArea",
      },
      {
        icon: "MapLocation",
        name: "城市选择",
        index: "/chooseCity",
      },
      {
        icon: "Timer",
        name: "时间选择",
        index: "/chooseTime",
      },
      {
        icon: "TrendCharts",
        name: "趋势标记",
        index: "/trend",
      },
      {
        icon: "Bell",
        name: "通知菜单",
        index: "/notification",
      },
      {
        icon: "Menu",
        name: "导航菜单",
        index: "/menu",
      },
      {
        icon: "Odometer",
        name: "进度条",
        index: "/progress",
      },
    ],
  },
  {
    icon: "Document",
    name: "表单组件",
    index: "/forms",
    children: [
      {
        icon: "Document",
        name: "基础表单",
        index: "/form",
      },
      {
        icon: "Collection",
        name: "弹窗表单",
        index: "/modelForm",
      },
    ],
  },
  {
    icon: "Grid",
    name: "表格组件",
    index: "/tables",
    children: [
      {
        icon: "Grid",
        name: "基础表格",
        index: "/table",
      },
      {
        icon: "Operation",
        name: "表格示例",
        index: "/tabledemo",
      },
    ],
  },
];
</script>

<style scoped></style>

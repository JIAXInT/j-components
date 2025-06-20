<template>
  <j-menu :data="data" :default-active="$route.path" router></j-menu>
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
    icon: "House",
    name: "图标选择器",
    index: "/chooseIcon",
  },
  {
    icon: "House",
    name: "省市区选择器",
    index: "/chooseArea",
  },
  {
    icon: "House",
    name: "趋势标记",
    index: "/trend",
  },
  {
    icon: "House",
    name: "时间选择",
    index: "/chooseTime",
  },
  {
    icon: "House",
    name: "通知菜单",
    index: "/notification",
  },
  {
    icon: "Menu",
    name: "导航菜单",
    index: "/menu",
  },
  {
    icon: "House",
    name: "城市选择",
    index: "/chooseCity",
  },
  {
    icon: "House",
    name: "进度条",
    index: "/progress",
  },
  {
    icon: "Home",
    name: "日历",
    index: "/calendar",
  },
  {
    icon: "Home",
    name: "表单",
    index: "/form",
  },
  {
    icon: "Home",
    name: "表格",
    index: "/table",
  },
];
</script>

<style scoped></style>

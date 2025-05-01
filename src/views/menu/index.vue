<template>
  <div style="width: 200px; display: flex; gap: 30px">
    <j-menu :data="data1" default-active="2"></j-menu>
    <j-infinite-menu :data="data2" default-active="2"></j-infinite-menu>
  </div>
</template>

<script setup lang="ts">
let data1 = [
  {
    name: "首页",
    index: "1",
    icon: "House",
  },
  {
    name: "商品管理",
    index: "2",
    icon: "Memo",
    children: [
      { name: "商品列表", index: "2-1", icon: "List" },
      { name: "商品分类", index: "2-2", icon: "FolderOpened" },
    ],
  },
  {
    name: "订单管理",
    index: "3",
    icon: "DocumentRemove",
    children: [
      { name: "订单列表", index: "3-1", icon: "Tickets" },
      { name: "订单分类", index: "3-2", icon: "Collection" },
    ],
  },
];

let data2 = [
  {
    name: "首页",
    index: "1",
    icon: "House",
  },
  {
    name: "商品管理",
    index: "2",
    icon: "Memo",
    children: [
      { name: "商品列表", index: "2-1", icon: "List" },
      { name: "商品分类", index: "2-2", icon: "FolderOpened" },
    ],
  },
  {
    name: "订单管理",
    index: "3",
    icon: "DocumentRemove",
    children: [
      {
        name: "订单列表",
        index: "3-1",
        icon: "Tickets",
        children: [
          {
            name: "订单详情",
            index: "3-1-1",
            icon: "Document",
            children: [
              { name: "订单详情1", index: "3-1-1-1", icon: "DocumentCopy" },
            ],
          },
        ],
      },
      {
        name: "订单分类",
        index: "3-2",
        icon: "Collection",
        children: [
          {
            name: "订单详情",
            index: "3-2-1",
            icon: "Document",
            children: [
              {
                name: "订单详情1",
                index: "3-2-1-1",
                icon: "DocumentCopy",
                children: [
                  { name: "订单详情1", index: "3-2-1-1-1", icon: "Files" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
</script>

<style scoped lang="scss"></style>

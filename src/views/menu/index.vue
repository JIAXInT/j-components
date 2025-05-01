<template>
  <div style="width: 200px; display: flex; gap: 30px">
    <j-menu :data="data1" default-active="2"></j-menu>
    <!-- 无限层级 -->
    <p>无限层级</p>
    <j-infinite-menu :data="data2" default-active="2"> </j-infinite-menu>
    <!-- 自定义属性名称 -->
    <p>自定义属性名</p>
    <j-menu
      :data="data3"
      default-active="2"
      name="title"
      index="id"
      icon="iconName"
      children="subItems"
    ></j-menu>
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

let data3 = [
  {
    title: "首页",
    id: "1",
    iconName: "House",
  },
  {
    title: "商品管理",
    id: "2",
    iconName: "Memo",
    subItems: [
      { title: "商品列表", id: "2-1", iconName: "List" },
      { title: "商品分类", id: "2-2", iconName: "FolderOpened" },
    ],
  },
  {
    title: "订单管理",
    id: "3",
    iconName: "DocumentRemove",
    subItems: [
      { title: "订单列表", id: "3-1", iconName: "Tickets" },
      { title: "订单分类", id: "3-2", iconName: "Collection" },
    ],
  },
];
</script>

<style scoped lang="scss"></style>

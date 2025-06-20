<template>
  <div>
    <j-table :options="options" :data="tableData"></j-table>
  </div>
</template>

<script setup lang="ts">
import type { TableOptions } from "../../components/table/src/type";

// 表格配置
let options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
  },
];

const tableData = [
  {
    date: "1976-04-02",
    name: "Robert Rodriguez",
    address: "湖北省",
  },
  {
    date: "2006-09-15",
    name: "William Martinez",
    address: "陕西省",
  },
  {
    date: "2024-06-28",
    name: "Frank Thompson",
    address: "海外",
  },
  {
    date: "2018-05-23",
    name: "Maria Jones",
    address: "台湾",
  },
  {
    date: "2024-02-14",
    name: "Michelle Perez",
    address: "陕西省",
  },
  {
    date: "1971-08-09",
    name: "Carol Walker",
    address: "河北省",
  },
  {
    date: "1989-08-24",
    name: "Kimberly Williams",
    address: "河北省",
  },
  {
    date: "1975-05-12",
    name: "Steven Miller",
    address: "天津",
  },
  {
    date: "1972-07-19",
    name: "Shirley White",
    address: "湖北省",
  },
  {
    date: "1983-08-03",
    name: "Sarah Lopez",
    address: "天津",
  },
];
</script>

<style scoped lang="scss"></style>

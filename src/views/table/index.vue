<template>
  <div>
    <j-table
      :data="tableData"
      :options="options"
      element-loading-text="加载中。。。"
      @comfire="comfire"
      isEditRow
      v-model:editRowIndex="editRowIndex"
      pagination="true"
      :total="total"
      paginationAlign="center"
      @sizeChange="handleSizeChange"
      @currentChange="handleCurrentChange"
    >
      <template #date="{ scope }">
        <el-icon-timer></el-icon-timer>
        {{ scope.row.date }}
      </template>
      <template #name="{ scope }">
        <el-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <el-tag>{{ scope.row.name }}</el-tag>
          </template>
        </el-popover>
      </template>
      <template #action="{ scope }">
        <el-button type="primary" @click="edit(scope)" size="small">
          编辑
        </el-button>
        <el-button type="danger" size="small">删除</el-button>
      </template>
      <template #editRow="{ scope }">
        <el-button type="primary" size="small"> 确认 </el-button>
        <el-button type="danger" size="small">取消</el-button>
      </template>
      <!-- <template #editCell="{ scope }">
        <div style="display: flex">
          <el-button size="small">确认</el-button
          ><el-button size="small"> 取消</el-button>
        </div>
      </template> -->
    </j-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { TableOptions } from "../../components/table/src/type";
import axios from "axios";

interface TableData {
  date: string;
  name: string;
  address: string;
}

let tableData = ref<TableData[]>([]);

let editRowIndex = ref<string>("");

let current = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(0);

let getData = () => {
  axios
    .post("/api/list", {
      current: current.value,
      pageSize: pageSize.value,
    })
    .then((res) => {
      console.log(res);
      tableData.value = res.data.data.rows;
      total.value = res.data.data.total;
    });
};
onMounted(() => {
  getData();
});

// 表格配置
let options: TableOptions[] = [
  {
    label: "日期",
    prop: "date",
    align: "center",
    slot: "date",
    editable: true,
  },
  {
    label: "姓名",
    prop: "name",
    align: "center",
    slot: "name",
  },
  {
    label: "地址",
    prop: "address",
    align: "center",
    editable: true,
  },
  {
    label: "操作",
    prop: "action",
    align: "center",
    action: true,
  },
];

let edit = (scope: any) => {
  editRowIndex.value = "edit";
};

let comfire = (scope: any) => {
  console.log(scope);
};

let handleSizeChange = (val: number) => {
  pageSize.value = val;
  getData();
};

let handleCurrentChange = (val: number) => {
  current.value = val;
  getData();
};
</script>

<style scoped lang="scss">
svg {
  width: 1em;
  height: 1em;
}
</style>

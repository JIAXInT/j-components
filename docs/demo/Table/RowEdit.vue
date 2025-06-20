<template>
  <div class="row-edit-demo">
    <h3>行编辑功能示例</h3>
    <j-table
      :options="columns"
      :data="tableData"
      :isEditRow="true"
      :editRowIndex="editRowIndex"
      @comfire="handleComfire"
      @cancel="handleCancel"
    >
      <template #action="{ scope }">
        <el-button type="primary" @click="edit(scope)" size="small">
          编辑
        </el-button>
        <el-button type="danger" size="small">删除</el-button>
      </template>
    </j-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editRowIndex: -1,
      columns: [
        {
          prop: "name",
          label: "姓名",
          editable: true,
          width: 120,
          align: "center",
        },
        {
          prop: "age",
          label: "年龄",
          editable: true,
          width: 80,
          align: "center",
        },
        {
          prop: "address",
          label: "地址",
          editable: true,
          width: 200,
          align: "center",
        },
        {
          prop: "action",
          label: "操作",
          width: 120,
          align: "center",
          action: true,
        },
      ],
      tableData: [
        { name: "张三", age: 18, address: "北京市朝阳区" },
        { name: "李四", age: 20, address: "上海市浦东新区" },
        { name: "王五", age: 25, address: "广州市天河区" },
        { name: "赵六", age: 30, address: "深圳市南山区" },
      ],
    };
  },
  methods: {
    handleComfire(row) {
      this.$message.success(`确认编辑行数据: ${JSON.stringify(row)}`);
    },
    handleCancel(row) {
      this.$message.warning(`取消编辑行数据: ${JSON.stringify(row)}`);
    },
    editRow(scope) {
      this.editRowIndex = scope.rowIndex;
    },
  },
};
</script>

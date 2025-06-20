<template>
  <div class="pagination-demo">
    <h3>分页功能示例</h3>
    <j-table
      :options="columns"
      :data="tableData"
      :pagination="true"
      :currentPage="pagination.currentPage"
      :pageSize="pagination.pageSize"
      :total="pagination.total"
      :pageSizes="[10, 20, 30, 50]"
      :paginationAlign="'center'"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          prop: "name",
          label: "姓名",
          width: 120,
          align: "center",
        },
        {
          prop: "age",
          label: "年龄",
          width: 80,
          align: "center",
        },
        {
          prop: "address",
          label: "地址",
          width: 200,
          align: "center",
        },
      ],
      tableData: Array.from({ length: 20 }, (_, i) => ({
        name: `用户${i + 1}`,
        age: 18 + i,
        address: `城市${i + 1}`,
        id: i + 1,
      })),
      pagination: {
        currentPage: 1,
        pageSize: 10,
        total: 100,
      },
    };
  },
  methods: {
    handleSizeChange(size) {
      this.pagination.pageSize = size;
      this.pagination.currentPage = 1;
      this.$message.success(`每页显示条数变更为: ${size}`);
      // 这里可以添加获取新页数据的逻辑
    },
    handleCurrentChange(page) {
      this.pagination.currentPage = page;
      this.$message.success(`当前页码变更为: ${page}`);
      // 这里可以添加获取新页数据的逻辑
    },
  },
};
</script>

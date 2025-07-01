---
title: Table
description: Table 组件文档
---

# Table 表格

Table 组件是基于 Element Plus 的 el-table 进行二次开发的功能增强型表格组件，主要增加了行编辑、分页集成等功能，简化了复杂表格的开发流程。

## 基础用法

<!-- <preview path="../demo/Table/Basic.vue" title="基础用法" description="Table 组件的基础用法"></preview> -->

## 行编辑功能

<!--
<preview path="../demo/Table/RowEdit.vue" title="行编辑" description="Table 组件的行编辑功能"></preview> -->

## 分页功能

<!--
<preview path="../demo/Table/Pagination.vue" title="分页" description="Table 组件的分页功能"></preview> -->

## API

#### 类型定义

```typescript
// <mcfile name="type.ts" path="src/components/table/type.ts"></mcfile>
interface TableOptions {
  label: string; // 列标题
  prop: string; // 列对应数据的属性名
  width?: number; // 列宽度
}

interface PaginationOptions {
  currentPage: number; // 当前页码
  pageSize: number; // 每页数量
  total: number; // 总数据量
}
```

### 使用注意事项

- 数据项需包含`rowKey`指定的唯一标识字段
- 启用行编辑时需同时监听`confirm`和`cancel`事件
- 分页功能需通过`pagination.total`传递总数据量

### Props

### Props

| 参数            | 说明             | 类型           | 默认值        |
| --------------- | ---------------- | -------------- | ------------- |
| options         | 列配置           | TableOptions[] | -             |
| data            | 表格数据         | any[]          | -             |
| pagination      | 是否显示分页     | boolean        | false         |
| currentPage     | 当前页码         | number         | 1             |
| total           | 数据总数         | number         | -             |
| pageSize        | 每页显示条数     | number         | 10            |
| pageSizes       | 每页显示条数选项 | number[]       | [10,20,30,40] |
| paginationAlign | 分页对齐方式     | string         | "left"        |
| isEditRow       | 是否启用行编辑   | boolean        | false         |
| editRowIndex    | 行编辑按钮标识   | string         | ""            |

### Events

| 事件名        | 说明             | 回调参数   |
| ------------- | ---------------- | ---------- |
| sizeChange    | 分页大小改变事件 | 新分页大小 |
| currentChange | 页码改变事件     | 新页码     |
| comfire       | 确认编辑事件     | 行数据     |
| cancel        | 取消编辑事件     | 行数据     |

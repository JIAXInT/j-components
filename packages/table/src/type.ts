export interface TableOptions {
  label: string; // 表格标题
  prop: string; // 对应列内容的字段名， 例： prop: 'name'
  width?: string; // 自定义列的宽度， 默认单位px
  align?: "left" | "center" | "right"; // 自定义列的对齐方式
  slot?: string; // 自定义列的内容， 例： slot: 'name'
  action?: boolean; // 是否是操作列
  editable?: boolean; // 是否可编辑
}

export interface ListItem {
  /** 头像URL */
  avatar?: string;
  /** 标题文本 */
  title?: string;
  /** 描述内容 */
  desc?: string;
  /** 时间信息 */
  time?: string;
  /** 标签文本 */
  tag?: string;
  /** 标签类型：空字符串或预设类型 */
  tagType?: "" | "info" | "danger" | "success" | "warning";
}

export interface ListOptions {
  /** 列表标题 */
  title: string;
  /** 列表项内容数组 */
  content: ListItem[];
}

export interface ActionOptions {
  /** 操作按钮文本 */
  text: string;
  /** 操作按钮图标(可选) */
  icon?: string;
}

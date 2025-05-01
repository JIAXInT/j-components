export type MenuItem = {
  /** 菜单项图标(可选) */
  icon?: string;
  // 处理之后的图标
  i?: any;
  /** 菜单项显示名称 */
  name: string;
  /** 菜单项唯一标识 */
  index: string;
  /** 子菜单项数组(可选) */
  children?: MenuItem[];
};

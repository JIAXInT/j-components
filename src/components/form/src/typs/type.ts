import type { CSSProperties } from "vue";
import type { RuleItem } from "./rule";

// 表单每一项的配置选项
export interface FormOptions {
  // 表单项显示的元素类型
  // 支持以下Element Plus表单组件类型:
  // - 级联选择器(cascader)
  // - 复选框(checkbox/checkbox-group/checkbox-button)
  // - 颜色选择器(color-picker)
  // - 日期选择器(date-picker)
  // - 输入框(input/input-number)
  // - 单选框(radio/radio-group/radio-button)
  // - 评分(rate)
  // - 选择器(select/option)
  // - 滑块(slider)
  // - 开关(switch)
  // - 时间选择器(time-picker/time-select)
  // - 穿梭框(transfer)
  // - 上传(upload)
  // - 富文本编辑器(editor)
  type:
    | "cascader"
    | "checkbox"
    | "checkbox-group"
    | "checkbox-button"
    | "color-picker"
    | "date-picker"
    | "input"
    | "input-number"
    | "radio"
    | "radio-group"
    | "radio-button"
    | "rate"
    | "select"
    | "option"
    | "slider"
    | "switch"
    | "time-picker"
    | "time-select"
    | "transfer"
    | "upload"
    | "editor";

  // 表单项的默认值
  value?: any;

  // 表单项的标签文本
  label?: string;

  // 表单项对应的字段名，用于表单验证和数据收集
  prop?: string;

  // 表单验证规则
  rules?: RuleItem[];

  // 输入框占位文本
  placeholder?: string;

  // 传递给表单组件的额外属性
  attrs?: {
    //css样式
    style?: CSSProperties;
    clearable?: boolean;
    showPassword?: boolean;
    disabled?: boolean;
  };
  // 用于嵌套表单的子项配置
  children?: FormOptions[];

  // 上传组件的属性
  uploadAttrs?: {
    action: string; // 上传的URL地址
    headers?: object; // 设置上传的请求头部
    method?: "post" | "put" | "patch"; // 设置上传的请求方法
    multiple?: boolean; // 是否支持多选文件
    data?: any; // 上传时附带的额外参数
    name?: string; // 上传的文件字段名
    withCredentials?: boolean; // 支持发送 cookie 凭证信息
    showFileList?: boolean; // 是否显示已上传文件列表
    drag?: boolean; // 是否启用拖拽上传
    accept?: string; // 接受上传的文件类型
    thumbnailMode?: boolean; // 是否以缩略图的形式显示文件
    fileList?: any[]; // 已上传的文件列表
    listType?: "text" | "picture" | "picture-card"; // 文件列表的展示模式
    autoUpload?: boolean; // 是否在选择文件后自动上传
    disabled?: boolean; // 是否禁用上传功能
    limit?: number; // 上传的文件数量上限
  };
}

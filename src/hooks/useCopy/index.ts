import { ElMessage } from "element-plus";

// 复制文本
export const useCopy = (text: string) => {
  let input = document.createElement("input"); // 创建一个input元素
  input.value = text; // 将文本赋值给input元素
  document.body.appendChild(input); // 将input元素添加到body中
  input.select(); // 选中input元素
  document.execCommand("Copy"); // 执行复制命令
  document.body.removeChild(input); // 移除input元素
  ElMessage.success("复制成功"); // 提示复制成功
};

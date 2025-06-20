export const toLine = (value: string) => {
  // 把驼峰转换为横线连接
  return value.replace(/([A-Z])/g, "-$1").toLowerCase();
};

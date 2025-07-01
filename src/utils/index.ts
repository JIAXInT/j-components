export const toLine = (value: string | undefined | null): string => {
  if (!value) return "";
  // 把驼峰转换为横线连接
  return value.replace(/([A-Z])/g, "-$1").toLowerCase();
};

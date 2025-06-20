// 该脚本用于自动为 lib 目录下所有包含 index.js 的子目录生成 index.d.ts 类型声明文件
// 使用方法：在项目根目录下运行 node command/generate-dts.cjs
// 这样每个组件目录下都会有标准的类型声明文件，便于按需引入和类型提示

const fs = require("fs");
const path = require("path");

// 获取 lib 目录的绝对路径（修正）
const libDir = path.resolve(__dirname, "../lib");

// 需要写入的类型声明内容，与 j-component.d.ts 保持一致
const dtsContent = `import { App } from \"vue\";

declare const _default: {
  install(app: App): void;
};

export default _default;
`;

// 读取 lib 目录下的所有子目录
fs.readdirSync(libDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory()) // 只处理文件夹
  .forEach((dirent) => {
    const subDir = path.join(libDir, dirent.name); // 子目录路径
    const indexJs = path.join(subDir, "index.js"); // 检查是否有 index.js
    if (fs.existsSync(indexJs)) {
      const dtsPath = path.join(subDir, "index.d.ts"); // 目标 d.ts 路径
      fs.writeFileSync(dtsPath, dtsContent, "utf8"); // 写入类型声明文件
      console.log(`已生成: ${dtsPath}`);
    }
  });

console.log("所有 index.d.ts 文件已生成。");

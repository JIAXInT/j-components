const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const path = require("path");
const fsExtra = require("fs-extra");
const fs = require("fs");

// 打包入口文件夹
const entryDir = path.resolve(__dirname, "../packages");

// 出口文件夹
const outDir = path.resolve(__dirname, "../lib");

// vite基础配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

// rollup配置;
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// 获取递增的版本号
const getIncrementedVersion = () => {
  try {
    // 读取lib目录下的package.json (应该包含1.1.2版本)
    const pkgPath = path.resolve(__dirname, "../lib/package.json");

    // 如果lib目录下的package.json不存在，尝试从其他文件获取初始版本
    let initialVersion = "1.1.2"; // 设置默认初始版本为1.1.2

    if (fs.existsSync(pkgPath)) {
      const pkgContent = fs.readFileSync(pkgPath, "utf-8");
      const pkg = JSON.parse(pkgContent);
      if (pkg && pkg.version) {
        initialVersion = pkg.version;
      }
    }

    // 分割版本号
    const versionParts = initialVersion.split(".");
    if (versionParts.length === 3) {
      // 将最后一位加1
      const newPatch = parseInt(versionParts[2]) + 1;
      return `${versionParts[0]}.${versionParts[1]}.${newPatch}`;
    }

    // 如果没有找到有效的版本号，返回默认值
    return "1.0.0";
  } catch (error) {
    console.error("获取版本号时出错:", error);
    return "1.0.0";
  }
};

// 全量打包构建方法
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, "index.ts"),
        name: "justic-ui",
        fileName: (format) => (format === "es" ? "index.js" : "index.umd.cjs"),
        formats: ["es", "umd"],
      },
      outDir,
    },
  });
};

// 单组件打包构建
// name: 组件名称;
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: "index",
        fileName: (format) => (format === "es" ? "index.js" : "index.umd.cjs"),
        formats: ["es", "umd"],
      },
      outDir: path.resolve(outDir, name),
    },
  });
};

// 每个组件生成package.json;
const createPackageJson = (name) => {
  const fileStr = `
  {
    "name":"${name}",
    "main":"index.umd.cjs",
    "module":"index.js",
    "style":"style.css"
  }
  `;
  // 输出
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    "utf-8"
  );
};

// 确保lib目录存在并包含正确的package.json
const ensureLibPackageJson = () => {
  // 确保lib目录存在
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 检查是否存在package.json
  const libPkgPath = path.resolve(outDir, "package.json");
  if (!fs.existsSync(libPkgPath)) {
    // 如果不存在，创建一个初始的package.json
    const initialPkg = {
      name: "justic-ui",
      version: "1.1.2", // 初始版本设置为1.1.2
      main: "index.umd.cjs",
      module: "index.js",
      types: "index.d.ts",
      author: "Justic",
      keywords: ["element-plus", "ts", "封装组件", "组件库"],
    };
    fs.writeFileSync(libPkgPath, JSON.stringify(initialPkg, null, 2), "utf-8");
    console.log("已创建初始的lib/package.json文件，版本号为1.1.2");
  }
};

// 打包成库
const buildLib = async () => {
  // 确保lib目录和package.json存在
  ensureLibPackageJson();

  // 全量引入
  await buildAll();

  // 获取递增后的版本号
  const newVersion = getIncrementedVersion();

  // 全量打包后生成 lib/package.json
  const libPkgPath = path.resolve(outDir, "package.json");
  // 只保留部分字段
  const libPkg = {
    name: "justic-ui",
    version: newVersion,
    main: "index.umd.cjs",
    module: "index.js",
    types: "index.d.ts",
    author: "Justic",
    keywords: ["element-plus", "ts", "封装组件", "组件库"],
  };
  fs.writeFileSync(libPkgPath, JSON.stringify(libPkg, null, 2), "utf-8");

  // 全量打包后生成 lib/index.d.ts
  const dtsContent = `import { App } from "vue";

declare const _default: {
  install(app: App): void;
};

export default _default;
`;
  fs.writeFileSync(path.resolve(outDir, "index.d.ts"), dtsContent, "utf-8");

  // 按需引入
  // 获取组件名称组成的数组;
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });

  // 循环构建
  for (const name of components) {
    await buildSingle(name);
    createPackageJson(name);
  }
};

buildLib();

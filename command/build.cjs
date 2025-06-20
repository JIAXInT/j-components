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

// 全量打包构建方法
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, "index.ts"),
        name: "justic-ui",
        fileName: "index",
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
        fileName: "index",
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
    "main":"index.umd.js",
    "module":"index.es.js",
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

// 打包成库
const buildLib = async () => {
  // 全量引入
  await buildAll();

  // 全量打包后生成 lib/package.json
  const libPkgPath = path.resolve(outDir, "package.json");
  // 只保留部分字段
  const libPkg = {
    name: "justic-ui",
    version: "1.*.*",
    main: "index.umd.js",
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
